import { gemini, openAiLogo } from "@/lib/constants"
import { Provider } from "./types"

export const providers: Provider[] = [
  { id: 1, provider: "OpenAi", image: openAiLogo, value: "OPENAI" },
  { id: 2, provider: "Gemini", image: gemini, value: "GEMINI" },
]


