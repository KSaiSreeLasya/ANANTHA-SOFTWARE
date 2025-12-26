const API_BASE_URL = 'http://localhost:3001';

export async function sendContactEmail(
  name: string,
  email: string,
  message: string
): Promise<void> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/send-contact-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to send email');
    }
  } catch (error) {
    console.error('Error sending contact email:', error);
    throw error;
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
  try {
    const response = await fetch(`${API_BASE_URL}/api/send-careers-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        phone,
        position,
        startDate,
        resumeUrl,
        linkedinUrl,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to send email');
    }
  } catch (error) {
    console.error('Error sending careers email:', error);
    throw error;
  }
}
