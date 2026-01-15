
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const queryArchive = async (query: string) => {
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: query,
    config: {
      systemInstruction: "You are the central computer at Hawkins National Laboratory, 1984. Your responses must be cold, technical, and slightly eerie. Refer to subjects by IDs like '011'. Use 1980s terminology. If the user asks about the Upside Down, refer to it as 'Dimension X' or 'The Gate'. Keep responses concise and formatted as a CRT terminal output.",
      temperature: 0.7,
    },
  });
  return response.text;
};

export const generateTheory = async () => {
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: "Generate a weird mystery theory about Hawkins, Indiana in 3 short sentences.",
    config: {
      systemInstruction: "You are a paranoid conspiracy theorist from the 80s like Murray Bauman.",
      temperature: 0.9,
    },
  });
  return response.text;
};

export const generateCharacterDossier = async (char: any) => {
  const prompt = `Write a classified 1984 lab report for a new subject. 
  Name: ${char.name}
  Role: ${char.role}
  Appearance: Wearing a ${char.hat}, ${char.top}, ${char.bottom}, and holding ${char.accessory}.
  Keep it technical, eerie, and mention their potential psionic level. MAX 3 sentences.`;

  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: prompt,
    config: {
      systemInstruction: "You are a senior scientist at Hawkins National Laboratory reporting to Dr. Brenner.",
      temperature: 0.8,
    },
  });
  return response.text;
};
