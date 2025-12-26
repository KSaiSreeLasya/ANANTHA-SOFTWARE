const SENDGRID_API_KEY = import.meta.env.VITE_SENDGRID_API_KEY;
const SENDGRID_API_URL = 'https://api.sendgrid.com/v3/mail/send';

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

export async function sendContactEmail(
  name: string,
  email: string,
  message: string
): Promise<void> {
  if (!SENDGRID_API_KEY) {
    console.warn('SendGrid API key not configured');
    return;
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
}

export async function sendCareersEmail(
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
  position: string,
  startDate: string | null,
  resumeUrl: string,
  linkedinUrl: string
): Promise<void> {
  if (!SENDGRID_API_KEY) {
    console.warn('SendGrid API key not configured');
    return;
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
}
