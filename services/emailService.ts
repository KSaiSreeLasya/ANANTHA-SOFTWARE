// Email service using Resend API
const RESEND_API_KEY = import.meta.env.VITE_RESEND_API_KEY;
const RECIPIENT_EMAIL = 'kottesaisreelasya@gmail.com';
const SENDER_EMAIL = 'onboarding@resend.dev'; // Default Resend domain

interface EmailData {
  from: string;
  to: string;
  subject: string;
  html: string;
}

export const sendEmail = async (emailData: EmailData): Promise<boolean> => {
  try {
    if (!RESEND_API_KEY) {
      console.error('Resend API key not configured');
      return false;
    }

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify(emailData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Email sending failed:', errorData);
      return false;
    }

    const data = await response.json();
    console.log('Email sent successfully:', data);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};

// Contact form email template
export const sendContactFormEmail = async (
  name: string,
  email: string,
  message: string
): Promise<boolean> => {
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #333;">New Contact Form Submission</h2>
      <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap; color: #555;">${message}</p>
      </div>
      <p style="color: #888; font-size: 12px;">This message was sent from your website contact form.</p>
    </div>
  `;

  return sendEmail({
    from: SENDER_EMAIL,
    to: RECIPIENT_EMAIL,
    subject: `New Contact Form Submission from ${name}`,
    html,
  });
};

// Signup form email template
export const sendSignupEmail = async (
  firstName: string,
  lastName: string,
  email: string,
  company: string
): Promise<boolean> => {
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #333;">New User Signup</h2>
      <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
      </div>
      <p style="color: #888; font-size: 12px;">A new user has registered on your website.</p>
    </div>
  `;

  return sendEmail({
    from: SENDER_EMAIL,
    to: RECIPIENT_EMAIL,
    subject: `New User Signup: ${firstName} ${lastName}`,
    html,
  });
};

// Career application email template
export const sendCareerApplicationEmail = async (
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
  position: string,
  linkedin: string
): Promise<boolean> => {
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #333;">New Career Application</h2>
      <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Position Applied For:</strong> ${position}</p>
        <p><strong>LinkedIn:</strong> ${linkedin ? `<a href="${linkedin}">${linkedin}</a>` : 'Not provided'}</p>
      </div>
      <p style="color: #888; font-size: 12px;">A new career application has been submitted.</p>
    </div>
  `;

  return sendEmail({
    from: SENDER_EMAIL,
    to: RECIPIENT_EMAIL,
    subject: `Career Application: ${firstName} ${lastName} - ${position}`,
    html,
  });
};
