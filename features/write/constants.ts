import { Goal } from "./types"

export const goalValues = [
  "educate",
  "experience",
  "story",
  "discussion",
] as const

export const goals: Goal[] = [
  { value: "educate" },
  { value: "experience" },
  { value: "story" },
  { value: "discussion" },
]

export const Tones = [
  "My usual voice",
  "Friendly and conversational",
  "Professional and clear",
  "Bold and opinionated",
  "Educational and practical",
] as const

/**
 * Maps each tone value to its `write.settings.tones` dictionary key.
 * The English value is what reaches the AI prompt, so state, validation
 * and prompt-builder keep using it — only the visible label is localized.
 */
export const toneKeys = {
  "My usual voice": "usualVoice",
  "Friendly and conversational": "friendlyConversational",
  "Professional and clear": "professionalClear",
  "Bold and opinionated": "boldOpinionated",
  "Educational and practical": "educationalPractical",
} as const
