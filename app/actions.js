'use server';

import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function processOnboardingWithAI(currentData, rawPrompt) {
  try {
    if (!rawPrompt || rawPrompt.trim().length === 0) {
      return { success: false, data: currentData, error: "Prompt is completely blank." };
    }

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      response_format: { type: "json_object" }, // Ensures formatting is solid
      messages: [
        {
          role: "system",
          content: `You are an onboarding assistant. Analyze the user's custom layout prompt. 
          Extract their desired: companyName, industry, and companySize. 
          
          Valid industry values MUST be exactly one of: SaaS, Fintech, Healthcare, E-commerce.
          Valid companySize values MUST be exactly one of: 1-10, 11-50, 51-200, 200+.
          
          If the prompt explicitly mentions changes or states these fields, overwrite them. 
          If the prompt does not mention a field, retain the current value.
          
          Output your answer in this exact JSON structure:
          {
            "companyName": "extracted name or current value",
            "industry": "extracted value or current value",
            "companySize": "extracted value or current value",
            "aiSummary": "A concise 1-sentence summary of their functional text requests"
          }`
        },
        {
          role: "user",
          content: `Current data parameters: ${JSON.stringify(currentData)}\nUser layout prompt: "${rawPrompt}"`
        }
      ]
    });

    const parsedUpdates = JSON.parse(response.choices.message.content);

    return {
      success: true,
      data: parsedUpdates, // Contains the freshly extracted form values!
      error: null
    };

  } catch (err) {
    console.error("AI Extractor Pipeline Error:", err);
    return { success: false, data: currentData, error: err.message };
  }
}

// 🗄️ Core database submission file gateway execution
export async function saveFinalOnboarding(finalPayload) {
  console.log("STORING INTEGRATED PROFILE RECORD TO DB:", finalPayload);
  // Place your database connection code here: await db.workspace.create(...)
  return { success: true };
}