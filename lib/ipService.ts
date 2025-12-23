// Service to get user's IP address
export const getClientIp = async (): Promise<string | null> => {
  try {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    return data.ip;
  } catch (error) {
    console.error('Error fetching IP address:', error);
    return null;
  }
};

// Get user agent
export const getUserAgent = (): string => {
  return navigator.userAgent;
};
