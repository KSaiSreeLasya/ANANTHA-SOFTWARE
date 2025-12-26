import express from 'express';
import cors from 'cors';
import sgMail from '@sendgrid/mail';

const app = express();
const PORT = 3001;

// Configure SendGrid
sgMail.setApiKey(process.env.VITE_SENDGRID_API_KEY || '');

// Middleware
app.use(cors());
app.use(express.json());

// Email sending endpoint for contact form
app.post('/api/send-contact-email', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const msg = {
      to: 'kotesaisreelasya@gmail.com',
      from: 'noreply@ananthasoftware.in',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>Submitted at: ${new Date().toLocaleString()}</small></p>
      `,
      replyTo: email,
    };

    await sgMail.send(msg);
    res.json({ success: true, message: 'Email sent successfully' });
  } catch (error: any) {
    console.error('SendGrid error:', error);
    res.status(500).json({ error: error.message || 'Failed to send email' });
  }
});

// Email sending endpoint for careers form
app.post('/api/send-careers-email', async (req, res) => {
  try {
    const { firstName, lastName, email, phone, position, startDate, resumeUrl, linkedinUrl } = req.body;

    if (!firstName || !lastName || !email || !position) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const msg = {
      to: 'kotesaisreelasya@gmail.com',
      from: 'noreply@ananthasoftware.in',
      subject: `New Career Application from ${firstName} ${lastName}`,
      html: `
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
      replyTo: email,
    };

    await sgMail.send(msg);
    res.json({ success: true, message: 'Email sent successfully' });
  } catch (error: any) {
    console.error('SendGrid error:', error);
    res.status(500).json({ error: error.message || 'Failed to send email' });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Email server running on http://localhost:${PORT}`);
});

// Helper function to escape HTML
function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}
