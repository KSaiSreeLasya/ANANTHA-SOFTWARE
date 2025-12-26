import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3001;

// Environment variable for SendGrid API key
const SENDGRID_API_KEY = process.env.VITE_SENDGRID_API_KEY;
const SENDGRID_API_URL = 'https://api.sendgrid.com/v3/mail/send';

// Middleware
app.use(cors());
app.use(express.json());

function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

// Contact email endpoint
app.post('/api/send-contact-email', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const msg = {
      personalizations: [
        {
          to: [{ email: 'kotesaisreelasya@gmail.com' }],
          subject: `New Contact Form Submission from ${name}`,
        },
      ],
      from: {
        email: 'noreply@ananthasoftware.in',
        name: 'Anantha Software',
      },
      replyTo: {
        email: email,
      },
      content: [
        {
          type: 'text/html',
          value: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${escapeHtml(name)}</p>
            <p><strong>Email:</strong> ${escapeHtml(email)}</p>
            <p><strong>Message:</strong></p>
            <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
            <hr>
            <p><small>Submitted at: ${new Date().toLocaleString()}</small></p>
          `,
        },
      ],
    };

    const response = await fetch(SENDGRID_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${SENDGRID_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(msg),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`SendGrid error: ${errorData.errors?.[0]?.message || response.statusText}`);
    }

    res.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ error: error.message || 'Failed to send email' });
  }
});

// Careers email endpoint
app.post('/api/send-careers-email', async (req, res) => {
  try {
    const { firstName, lastName, email, phone, position, startDate, resumeUrl, linkedinUrl } = req.body;

    if (!firstName || !lastName || !email || !position) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const msg = {
      personalizations: [
        {
          to: [{ email: 'kotesaisreelasya@gmail.com' }],
          subject: `New Career Application from ${firstName} ${lastName}`,
        },
      ],
      from: {
        email: 'noreply@ananthasoftware.in',
        name: 'Anantha Software',
      },
      replyTo: {
        email: email,
      },
      content: [
        {
          type: 'text/html',
          value: `
            <h2>New Career Application</h2>
            <p><strong>Name:</strong> ${escapeHtml(firstName)} ${escapeHtml(lastName)}</p>
            <p><strong>Email:</strong> ${escapeHtml(email)}</p>
            <p><strong>Phone:</strong> ${escapeHtml(phone || 'Not provided')}</p>
            <p><strong>Position Applied:</strong> ${escapeHtml(position)}</p>
            <p><strong>Start Date:</strong> ${escapeHtml(startDate || 'Not specified')}</p>
            <p><strong>LinkedIn Profile:</strong> ${linkedinUrl ? `<a href="${escapeHtml(linkedinUrl)}" target="_blank">${escapeHtml(linkedinUrl)}</a>` : 'Not provided'}</p>
            ${resumeUrl ? `<p><strong>Resume:</strong> <a href="${escapeHtml(resumeUrl)}" target="_blank">View Resume</a></p>` : ''}
            <hr>
            <p><small>Submitted at: ${new Date().toLocaleString()}</small></p>
          `,
        },
      ],
    };

    const response = await fetch(SENDGRID_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${SENDGRID_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(msg),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`SendGrid error: ${errorData.errors?.[0]?.message || response.statusText}`);
    }

    res.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ error: error.message || 'Failed to send email' });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Email service running on http://localhost:${PORT}`);
});
