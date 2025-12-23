
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || '';

export const getAssistantResponse = async (message: string, history: { role: string; content: string }[]) => {
  if (!API_KEY) {
    return "I'm sorry, the AI assistant is not configured with an API key yet. Please contact Anantha Software directly via the contact form.";
  }

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  const model = 'gemini-3-flash-preview';

  const systemInstruction = `
    You are the AI Sales and Support Assistant for Anantha Software. 
    Anantha Software provides premium IT services including:
    1. Web Development (React, Angular, Node.js, Custom ERPs)
    2. Mobile App Development (Flutter, React Native, iOS, Android)
    3. UI/UX Design (Figma prototyping, user research)
    4. Digital Marketing (SEO, SMM, Content Strategy)
    5. Cloud & DevOps (AWS, Azure, Google Cloud deployment)

    Your goal is to:
    - Briefly explain our services.
    - Encourage users to fill out the contact form for a custom quote.
    - Sound professional, innovative, and helpful.
    - Keep responses concise (under 150 words).
  `;

  try {
    const chat = ai.chats.create({
      model,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    const response = await chat.sendMessage({ message });
    return response.text || "I'm having trouble connecting right now. Let me know how else I can help!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I apologize, but I'm experiencing some technical difficulties. Please reach out to our team at contact@ananthasoftware.in.";
  }
};
