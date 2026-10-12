import OpenAI from "openai"
import { GenerationAdapter } from "../types"

export const openaiAdapter: GenerationAdapter = {
  async generateText({ systemPrompt, userPrompt, apiKey, model }) {
    const client = new OpenAI({ apiKey })

    let response
    try {
      response = await client.chat.completions.create({
        model,
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt },
        ],
      })
    } catch {
      // Never leak provider-specific error details (could include request
      // metadata) to the caller. service.ts turns this into a safe message.
      throw new Error("OPENAI_REQUEST_FAILED")
    }

    const raw = response.choices[0]?.message?.content

    if (!raw) {
      throw new Error("OPENAI_EMPTY_RESPONSE")
    }

    return { raw }
  },
}