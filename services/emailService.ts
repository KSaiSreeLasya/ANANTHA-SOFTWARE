// Email service using EmailJS
import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const CONTACT_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID;
const SIGNUP_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_SIGNUP_TEMPLATE_ID;
const CAREER_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_CAREER_TEMPLATE_ID;

const RECIPIENT_EMAIL = 'kottesaisreelasya@gmail.com';

// Initialize EmailJS once
if (PUBLIC_KEY && SERVICE_ID) {
  emailjs.init(PUBLIC_KEY);
}

export const sendEmail = async (templateId: string, variables: Record<string, any>): Promise<boolean> => {
  try {
    if (!PUBLIC_KEY || !SERVICE_ID || !templateId) {
      console.error('EmailJS not properly configured. Please set environment variables.');
      return false;
    }

    const response = await emailjs.send(SERVICE_ID, templateId, variables);
    console.log('Email sent successfully:', response.status);
    return response.status === 200;
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
  return sendEmail(CONTACT_TEMPLATE_ID, {
    to_email: RECIPIENT_EMAIL,
    from_name: name,
    from_email: email,
    message: message,
    subject: `New Contact Form Submission from ${name}`,
  });
};

// Signup form email template
export const sendSignupEmail = async (
  firstName: string,
  lastName: string,
  email: string,
  company: string
): Promise<boolean> => {
  return sendEmail(SIGNUP_TEMPLATE_ID, {
    to_email: RECIPIENT_EMAIL,
    first_name: firstName,
    last_name: lastName,
    email: email,
    company: company || 'Not provided',
    subject: `New User Signup: ${firstName} ${lastName}`,
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
  return sendEmail(CAREER_TEMPLATE_ID, {
    to_email: RECIPIENT_EMAIL,
    first_name: firstName,
    last_name: lastName,
    email: email,
    phone: phone || 'Not provided',
    position: position,
    linkedin: linkedin || 'Not provided',
    subject: `Career Application: ${firstName} ${lastName} - ${position}`,
  });
};
