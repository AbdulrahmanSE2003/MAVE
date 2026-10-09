// lib/visuals/taste-mapping.ts

// ──────────────────────────────────────────────────────────
// 1. Core onboarding preference types (already defined by you)
// ──────────────────────────────────────────────────────────

export type VisualMood = "Editorial" | "Bold" | "Minimal" | "Playful"

export type VisualColorPalette =
  "Warm neutral" | "Vibrant" | "Cool muted" | "Monochrome"

export type VisualDensity = "Spacious" | "Balanced" | "Dense"

export type VisualTypography = "Serif" | "Sans" | "Bold"

// ──────────────────────────────────────────────────────────
// 2. Derived generation-time properties (NOT asked from the user —
//    these are inferred from mood, and from the post content)
// ──────────────────────────────────────────────────────────

export type VisualMedium =
  "photography" | "illustration" | "abstract" | "typography-only"

export type SubjectPresence = "people" | "objects-only" | "no-subject"

export type Lighting =
  "soft-natural" | "flat-high-contrast" | "flat-clean" | "soft-gradient"

export type Composition =
  | "asymmetric-spacious"
  | "centered-bold"
  | "single-element-minimal"
  | "scattered-playful"

// ──────────────────────────────────────────────────────────
// 3. Mood → defaults mapping (hardcoded for MVP)
// ──────────────────────────────────────────────────────────

type MoodProfile = {
  medium: VisualMedium
  lighting: Lighting
  composition: Composition
  /** Used only when the content step (see §5) can't determine a concrete subject. */
  fallbackSubject: SubjectPresence
}

export const MOOD_DEFAULTS: Record<VisualMood, MoodProfile> = {
  Editorial: {
    medium: "photography",
    lighting: "soft-natural",
    composition: "asymmetric-spacious",
    fallbackSubject: "objects-only",
  },
  Bold: {
    medium: "abstract",
    lighting: "flat-high-contrast",
    composition: "centered-bold",
    fallbackSubject: "no-subject",
  },
  Minimal: {
    medium: "abstract",
    lighting: "flat-clean",
    composition: "single-element-minimal",
    fallbackSubject: "no-subject",
  },
  Playful: {
    medium: "illustration",
    lighting: "soft-gradient",
    composition: "scattered-playful",
    fallbackSubject: "objects-only",
  },
}

// ──────────────────────────────────────────────────────────
// 4. Prompt-text fragments for color palette and typography
//    (these only affect the words sent to the image model —
//    they are not re-derived, just translated to descriptive text)
// ──────────────────────────────────────────────────────────

const COLOR_PALETTE_TEXT: Record<VisualColorPalette, string> = {
  "Warm neutral": "warm neutral tones — beige, cream, soft brown",
  Vibrant: "vibrant, high-saturation colors with strong contrast",
  "Cool muted": "cool muted tones — soft blue, grey, desaturated green",
  Monochrome: "monochrome palette, single hue with tonal variation",
}

const DENSITY_TEXT: Record<VisualDensity, string> = {
  Spacious: "generous negative space, minimal visual elements",
  Balanced: "balanced composition with moderate breathing room",
  Dense: "tightly composed, multiple layered elements",
}

const TYPOGRAPHY_TEXT: Record<VisualTypography, string> = {
  Serif: "editorial serif type character",
  Sans: "clean modern sans-serif character",
  Bold: "bold expressive display type character",
}

// ──────────────────────────────────────────────────────────
// 5. Visual concept extraction — SEPARATE LLM call, not implemented
//    here. This file only defines the contract it must satisfy.
// ──────────────────────────────────────────────────────────

export type VisualConcept = {
  /** A short, concrete, literal description of what should appear in the
   *  image — e.g. "a hand hovering thoughtfully over a keyboard".
   *  Must never include any text meant to be rendered inside the image. */
  description: string
  subject: SubjectPresence
}

/**
 * Implemented elsewhere (e.g. lib/generation/visual-concept.ts).
 * Takes the post's idea + content and asks the configured AI provider
 * to extract a concrete visual concept, deciding whether the content
 * has a literal subject (people/objects) or is abstract.
 *
 * This keeps "understanding the post" separate from "building the
 * final image prompt" — the function below only composes text.
 */
export type ExtractVisualConcept = (input: {
  idea: string
  content: string
}) => Promise<VisualConcept>

// ──────────────────────────────────────────────────────────
// 6. Final prompt builder — pure, synchronous, no AI calls.
//    Combines mood defaults + user preferences + extracted concept.
// ──────────────────────────────────────────────────────────

export type BuildImagePromptInput = {
  mood: VisualMood
  colorPalette: VisualColorPalette
  density: VisualDensity
  typography: VisualTypography
  concept: VisualConcept
  aspectRatio: string // e.g. "1:1", "4:5", "16:9"
}

export function buildImagePrompt(input: BuildImagePromptInput): string {
  const { mood, colorPalette, density, typography, concept, aspectRatio } =
    input
  const profile = MOOD_DEFAULTS[mood]

  // A subject extracted from real content always wins over the mood's
  // fallback — the mood only decides HOW something looks, not WHETHER
  // a literal subject exists.
  const subject = concept.subject

  const mediumText =
    subject === "no-subject" && profile.medium === "photography"
      ? "abstract" // a mood that defaults to photography still needs a
      : profile.medium // fallback when the content has no literal subject

  const parts = [
    `${mood.toLowerCase()} ${mediumText} style`,
    COLOR_PALETTE_TEXT[colorPalette],
    profile.lighting.replace(/-/g, " "),
    DENSITY_TEXT[density],
    profile.composition.replace(/-/g, " ") + " composition",
    TYPOGRAPHY_TEXT[typography],
    `subject: ${concept.description}`,
    "no text or lettering rendered in the image",
    `${aspectRatio} aspect ratio`,
  ]

  return parts.join(", ")
}
