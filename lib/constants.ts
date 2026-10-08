import openAiLogo from "@/public/images/openAi.png"
import gemini from "@/public/images/gemini.png"

export { openAiLogo, gemini }

export const linkedinPost = `
I used to think good ideas arrived **fully formed**.

They don't.

They start as a sentence in your notes.
A thought you almost ignore.
A question you keep returning to.

The work isn't having **more ideas**.

It's learning which ones deserve your attention — then giving them enough time to become clear.

> The best ideas aren't always the loudest ones.

**What idea have you been sitting on?**
`
export const instagramPost = `
  Ideas rarely arrive ready. They show up messy, **incomplete**, and easy to miss.

  The **creative work** is noticing which ones keep pulling you back.`

// Changelog
interface ChangelogEntry {
  id: number
  title: string
  description: string
  version: string
  date: string
  change: string[]
}

export const changelogs: ChangelogEntry[] = [
  {
    id: 1,
    title: "Initial release",
    description:
      "The first version of MAVE: teach it your voice, bring an idea, and create something worth sharing.",
    version: "v0.1.0",
    date: "NOV 2, 2026",
    change: [
      "Personal writing style",
      "LinkedIn and Instagram generation",
      "Bring your own OpenAI key",
    ],
  },
]
