'use server';

import { GoogleGenAI, Type } from '@google/genai';

// Initialize client explicitly. If process.env.GEMINI_API_KEY is not reading, 
// fallback ensures local variables evaluate correctly.
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export async function processOnboardingWithAI(currentData, rawPrompt) {
  try {
    if (!rawPrompt || rawPrompt.trim().length === 0) {
      return { success: false, data: currentData, error: "Prompt is completely blank." };
    }

    // Fix: Simplify the content array to string format inputs to prevent SDK arg errors
    const response = await ai.models.generateContent({
      model: 'gemini-3.5-flash-lite',
      contents: `Current state configuration: ${JSON.stringify(currentData)}\nUser dynamic prompt request: "${rawPrompt}"`,
      config: {
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            companyName: { type: Type.STRING },
            industry: { type: Type.STRING },
            companySize: { type: Type.STRING },
            aiSummary: { type: Type.STRING },
          },
          required: ['companyName', 'industry', 'companySize', 'aiSummary'],
        },
        systemInstruction: `You are an onboarding assistant parser. Analyze the user's custom layout text prompt. 
        Extract their desired: companyName, industry, and companySize. 
        
        Valid industry values MUST be exactly one of: SaaS, Fintech, Healthcare, E-commerce.
        Valid companySize values MUST be exactly one of: 1-10, 11-50, 51-200, 200+.
        
        If the prompt explicitly mentions changes or states these fields, overwrite them. 
        If the prompt does not mention a field, retain the current value. 
        Provide a short 1-sentence description of the user request in the aiSummary field.`
      },
    });

    const parsedUpdates = JSON.parse(response.text);

    return {
      success: true,
      data: parsedUpdates, // Automatically populates step-one input state!
      error: null
    };

  } catch (err) {
    console.error("Gemini Extraction Failure Deep Debug Log:", err);
    return { 
      success: false, 
      data: currentData, 
      error: err.message || "Failed to process structural layout text context." 
    };
  }
}

// export async function saveFinalOnboarding(finalPayload) {
//   try {
//     await db.workspace.create({
//       data: {
//         companyName: finalPayload.companyName,
//         industry:    finalPayload.industry,
//         companySize: finalPayload.companySize,
//         fullName:    finalPayload.fullName,
//         workEmail:   finalPayload.workEmail,
//         password:    finalPayload.password, 
//         aiPrompt:    finalPayload.aiPrompt || null,
//         aiSummary:   finalPayload.aiSummary || null,
//       }
//     });
//     return { success: true, error: null };
//   } catch (err) {
//     console.error("Database Transaction Error:", err);
//     return { 
//       success: false, 
//       error: err.code === 'P2002' ? "This email address is already registered." : "Failed to record profile configurations." 
//     };
//   }
// }