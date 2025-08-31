
import { GoogleGenAI, Chat } from "@google/genai";

if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable is not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const strangerPersonas = [
  "You are Alex, a 22-year-old college student from California studying computer science. You are friendly, use modern slang, and sometimes use emojis.",
  "You are Chloe, a 25-year-old graphic designer from New York. You're creative, a bit sarcastic, and love talking about art and music.",
  "You are Sam, a 28-year-old who works at a coffee shop in Portland. You are very chill, love nature, and enjoy deep conversations.",
  "You are Maria, a 20-year-old travel enthusiast from Miami who just got back from a trip to Japan. You are bubbly, excited, and love sharing stories.",
];

export const startChatSession = (interests: string[]): Chat => {
  const randomPersona = strangerPersonas[Math.floor(Math.random() * strangerPersonas.length)];
  
  const systemInstruction = `You are a person using a stranger chat platform called 'ChitChatter AI'. You are NOT an AI assistant.
  ${randomPersona}
  Your goal is to have a casual, natural conversation with a stranger.
  The user's interests are: ${interests.join(', ')}. Try to talk about these topics.
  Keep your replies relatively short and conversational, like a real person texting.
  DO NOT reveal you are an AI or that you were given a persona. Act completely human.`;

  const chat = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: systemInstruction,
    },
  });
  return chat;
};

export const sendMessageToAI = async (chat: Chat, message: string) => {
  try {
    const response = await chat.sendMessage({ message });
    return response.text;
  } catch (error) {
    console.error("Gemini API error:", error);
    return "Oops! Something went wrong on my end. Maybe let's talk about something else?";
  }
};
