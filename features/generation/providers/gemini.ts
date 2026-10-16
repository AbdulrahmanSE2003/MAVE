import { GoogleGenAI } from "@google/genai"
import type { GenerationAdapter } from "../types"

export type GeminiErrorCode =
  | "GEMINI_TEMPORARILY_UNAVAILABLE"
  | "GEMINI_RATE_LIMITED"
  | "GEMINI_INVALID_API_KEY"
  | "GEMINI_PERMISSION_DENIED"
  | "GEMINI_NETWORK_ERROR"
  | "GEMINI_REQUEST_FAILED"
  | "GEMINI_EMPTY_RESPONSE"

type GeminiError = {
  status?: number
  code?: number | string
  message?: string
  error?: {
    code?: number
    status?: string
    message?: string
  }
  cause?: {
    code?: string
    message?: string
    errors?: Array<{
      code?: string
      message?: string
    }>
  }
}

function getGeminiErrorCode(error: unknown): GeminiErrorCode {
  const err = error as GeminiError

  const status = err?.status ?? err?.error?.code
  const apiStatus = err?.error?.status
  const message = [err?.message, err?.error?.message, err?.cause?.message]
    .filter(Boolean)
    .join(" ")

  const networkCodes = new Set([
    "ETIMEDOUT",
    "ECONNRESET",
    "ECONNREFUSED",
    "EHOSTUNREACH",
    "ENETUNREACH",
    "EAI_AGAIN",
    "UND_ERR_CONNECT_TIMEOUT",
    "UND_ERR_HEADERS_TIMEOUT",
    "UND_ERR_SOCKET",
  ])

  const causeCodes = [
    err?.cause?.code,
    ...(err?.cause?.errors?.map((item) => item.code) ?? []),
  ]

  if (
    causeCodes.some((code) => code && networkCodes.has(code)) ||
    (error instanceof TypeError && /fetch failed/i.test(message))
  ) {
    return "GEMINI_NETWORK_ERROR"
  }

  if (
    status === 503 ||
    apiStatus === "UNAVAILABLE" ||
    /high demand|temporarily unavailable/i.test(message)
  ) {
    return "GEMINI_TEMPORARILY_UNAVAILABLE"
  }

  if (status === 429 || apiStatus === "RESOURCE_EXHAUSTED") {
    return "GEMINI_RATE_LIMITED"
  }

  if (status === 401 || /API key not valid|invalid API key/i.test(message)) {
    return "GEMINI_INVALID_API_KEY"
  }

  if (status === 403 || apiStatus === "PERMISSION_DENIED") {
    return "GEMINI_PERMISSION_DENIED"
  }

  return "GEMINI_REQUEST_FAILED"
}

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
    } catch (error) {
      const code = getGeminiErrorCode(error)

      console.error("[Gemini] generateContent failed:", {
        code,
        error,
      })

      throw new Error(code)
    }

    const raw = response.text

    if (!raw?.trim()) {
      throw new Error("GEMINI_EMPTY_RESPONSE")
    }

    return { raw }
  },
}
