// Service to get user's IP address
export const getClientIp = async (): Promise<string | null> => {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout

    const response = await fetch('https://api.ipify.org?format=json', {
      signal: controller.signal
    });
    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const data = await response.json();
    return data.ip || null;
  } catch (error) {
    console.warn('Warning: Could not fetch IP address, continuing without it', error);
    return null;
  }
};

// Get user agent
export const getUserAgent = (): string => {
  return navigator.userAgent;
};
