import { GoogleGenAI, Type } from "@google/genai";
import { UIDesign } from '../types';

if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const designSchema = {
    type: Type.OBJECT,
    properties: {
        colors: {
            type: Type.OBJECT,
            description: "A harmonious 5-color palette. Ensure very high contrast between text and background colors for accessibility. Provide a specific usage recommendation for each color.",
            properties: {
                primary: { 
                    type: Type.OBJECT, 
                    properties: { 
                        hex: { type: Type.STRING, description: "Primary color hex code (e.g., #1D4ED8)." },
                        usage: { type: Type.STRING, description: "Recommended usage for the primary color (e.g., 'Brand, buttons, links')." }
                    },
                    required: ["hex", "usage"]
                },
                secondary: { 
                    type: Type.OBJECT, 
                    properties: { 
                        hex: { type: Type.STRING, description: "Secondary color hex code (e.g., #6B7280)." },
                        usage: { type: Type.STRING, description: "Recommended usage for the secondary color (e.g., 'Borders, secondary text')." }
                    },
                    required: ["hex", "usage"]
                },
                accent: { 
                    type: Type.OBJECT, 
                    properties: { 
                        hex: { type: Type.STRING, description: "Accent color for CTAs (e.g., #F59E0B)." },
                        usage: { type: Type.STRING, description: "Recommended usage for the accent color (e.g., 'CTAs, highlights')." }
                    },
                    required: ["hex", "usage"]
                },
                background: { 
                    type: Type.OBJECT, 
                    properties: { 
                        hex: { type: Type.STRING, description: "Background color, can be light or dark (e.g., #F9FAFB or #111827)." },
                        usage: { type: Type.STRING, description: "Recommended usage for the background color (e.g., 'Page background')." }
                    },
                    required: ["hex", "usage"]
                },
                text: { 
                    type: Type.OBJECT, 
                    properties: { 
                        hex: { type: Type.STRING, description: "Main text color, must contrast with background (e.g., #111827 or #F9FAFB)." },
                        usage: { type: Type.STRING, description: "Recommended usage for the text color (e.g., 'Body text, headings')." }
                    },
                    required: ["hex", "usage"]
                }
            },
            required: ["primary", "secondary", "accent", "background", "text"]
        },
        typography: {
            type: Type.OBJECT,
            description: "Two complementary and highly-readable Google Fonts.",
            properties: {
                heading: { type: Type.OBJECT, properties: { fontFamily: { type: Type.STRING, description: "A Google Font name for headings (e.g., 'Poppins')." }}},
                body: { type: Type.OBJECT, properties: { fontFamily: { type: Type.STRING, description: "A Google Font name for body text (e.g., 'Open Sans')." }}}
            },
            required: ["heading", "body"]
        }
    },
    required: ["colors", "typography"]
};

const responseSchema = {
    type: Type.ARRAY,
    items: designSchema
};


export const generateUIDesign = async (): Promise<UIDesign[]> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: "Generate 3 distinct and cohesive UI design themes for a modern web application. For each theme, provide a color palette and typography suggestions.",
      config: {
        systemInstruction: "You are an expert UI/UX designer. Your task is to generate 3 complete and aesthetically pleasing design systems. For each system, you must provide a 5-color palette (primary, secondary, accent, background, text) with a specific, concise usage recommendation for each color, and two distinct Google Fonts (one for headings, one for body text). The colors should be harmonious and have excellent contrast. The fonts must be legible and pair well together. Only use popular and real Google Font names.",
        responseMimeType: "application/json",
        responseSchema: responseSchema,
        thinkingConfig: { thinkingBudget: 0 },
      }
    });

    const jsonText = response.text.trim();
    const parsedDesigns: UIDesign[] = JSON.parse(jsonText);
    
    // Basic validation
    if (!Array.isArray(parsedDesigns) || parsedDesigns.length === 0) {
        throw new Error("Invalid response structure from API. Expected an array of designs.");
    }
    
    return parsedDesigns;

  } catch (error) {
    console.error("Error generating UI design:", error);
    throw new Error("Falló la comunicación con el modelo de IA.");
  }
};