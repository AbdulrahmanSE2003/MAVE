import { GoogleGenAI } from "@google/genai"
import { GenerationAdapter } from "../types"

export const geminiAdapter: GenerationAdapter = {
  async generateText({ systemPrompt, userPrompt, apiKey, model }) {
    const client = new GoogleGenAI({ apiKey })
    

    let response
    try {
      response = await client.models.generateContent({
        model,
        contents: userPrompt,
        config: {
          systemInstruction: systemPrompt,
        },
      })
    } catch (err) {
      console.error("[Gemini] generateContent failed:", err)
      throw new Error("GEMINI_REQUEST_FAILED")
    }

    const raw = response.text

    if (!raw) {
      throw new Error("GEMINI_EMPTY_RESPONSE")
    }

    return { raw }
  },
}
