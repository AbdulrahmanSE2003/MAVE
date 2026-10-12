import { ContentType } from "../app/types"

const CONTENT_TYPE_INSTRUCTIONS: Record<ContentType, string> = {
  "Linkedin Post": `Write a LinkedIn post. Professional but human, not corporate-sounding.
Use short paragraphs and line breaks for readability. No hashtags unless the idea
clearly calls for them. Return plain text only — no markdown, no quotation marks
around the whole post.`,

  "Instagram Caption": `Write an Instagram caption. Shorter and more casual than a LinkedIn
post. Emojis are fine where they feel natural, but don't force them. Return plain
text only — no markdown, no quotation marks around the whole caption.`,

  "Instagram Carousel": `Write an Instagram carousel (a sequence of slides) based on the idea.
Break the idea into 4 to 7 slides that build on each other logically — a hook,
development, and a closing slide. Return ONLY valid JSON matching exactly this
shape, with no markdown fences and no extra commentary:
{"slides":[{"heading":"string, max 80 chars","body":"string, max 280 chars"}]}`,
}

function buildWritingVoiceInstructions(writingExamples: string[]): string {
  if (writingExamples.length === 0) {
    return "The user hasn't provided writing examples yet. Use a clear, confident, and natural default voice."
  }

  return [
    "Match the user's own writing voice, based on these examples of how they write.",
    "Study their sentence rhythm, vocabulary, and tone — don't copy the examples verbatim.",
    "",
    ...writingExamples.map((example, i) => `Example ${i + 1}:\n${example}`),
  ].join("\n")
}

export function buildSystemPrompt(params: {
  contentType: ContentType
  writingExamples: string[]
}): string {
  return [
    "You are MAVE, a writing assistant that helps someone turn their raw ideas into",
    "platform-ready content that still sounds like them — not like generic AI output.",
    "",
    CONTENT_TYPE_INSTRUCTIONS[params.contentType],
    "",
    buildWritingVoiceInstructions(params.writingExamples),
  ].join("\n")
}

export function buildUserPrompt(params: { idea: string }): string {
  return `Idea:\n${params.idea}`
}
