export const marketing = {
  /** Shared primary CTA used by the navbar, hero and closing CTA. */
  startCreating: "Start Creating",

  nav: {
    home: "home",
    about: "about",
    changelog: "changelog",
    toggleMenu: "Toggle menu",
  },

  footer: {
    home: "Home",
    about: "About",
    changelog: "changelog",
    signin: "Signin",
    builtBy: "Built & designed by",
  },

  hero: {
    badge: "Personal content studio",
    titleLine1: "Your ideas,",
    titleLine2: "your voice.",
    description:
      "MAVE turns the thoughts in your head into polished social content that still sounds unmistakably like you.",
    seeHowItWorks: "See how it works",
    flow: {
      idea: "Idea",
      writingStyle: "Writing style",
      content: "Content",
      visual: "Visual",
    },
  },

  workspace: {
    insideMave: "Inside MAVE",
    title: "Writing workspace",
    generated: "Generated",
    turnIntoVisual: "Turn this post into a visual",
    continue: "Continue",
    demoLinkedin: `
I used to think good ideas arrived **fully formed**.

They don't.

They start as a sentence in your notes.
A thought you almost ignore.
A question you keep returning to.

The work isn't having **more ideas**.

It's learning which ones deserve your attention — then giving them enough time to become clear.

> The best ideas aren't always the loudest ones.

**What idea have you been sitting on?**
`,
    demoInstagram: `
  Ideas rarely arrive ready. They show up messy, **incomplete**, and easy to miss.

  The **creative work** is noticing which ones keep pulling you back.`,
  },

  howItWorks: {
    badge: "How it works",
    headingLine1: "From thought",
    headingLine2: "to something real.",
    steps: [
      {
        id: "01",
        title: "Add your voice",
        description:
          "Add up to five examples of your writing. MAVE learns your rhythm, vocabulary, and point of view.",
      },
      {
        id: "02",
        title: "Bring an idea",
        description:
          "Write whatever you want to talk about. A one sentence is enough to get you started.",
      },
      {
        id: "03",
        title: "Make it yours",
        description:
          "Generate, edit, and create a visual. That's all you need to do. You always have the final word.",
      },
    ],
  },

  outro: {
    badge: "Visual studio",
    headingLine1: "One idea.",
    headingLine2: "A complete story.",
    description:
      "When the words feel right, turn them into a distinctive visual without leaving your creative flow.",
    cta: "Explore visual creation",
    fromYourPost: "From your post",
    quoteLine1: "Good ideas",
    quoteLine2: "rarely arrive",
    quoteLine3: "fully formed.",
    serial: "mave / 001",
    posterLine1: "MAKE",
    posterLine2: "SPACE",
    posterLine3: "FOR THE",
    posterLine4: "unfinished.",
    tagline: "Your ideas, your voice.",
  },

  cta: {
    heading: "There’s something worth sharing.",
    description: "Give your next idea a place to become clear.",
  },

  about: {
    label: "ABOUT MAVE",
    heroLine1: "Ideas are personal.",
    heroHighlight: "Writing",
    heroLine2: "should be too.",
    beliefs: "What MAVE believes",
    visionIntro:
      "MAVE is a personal content studio for people who have something to say — but don’t always have the time or distance to shape it.",
    clarityHeading: "A tool for clarity, not volume.",
    clarityBody1:
      "Most writing tools optimize for more. More posts, more hooks, more output. MAVE starts somewhere quieter: with your point of view. It learns from examples of your real writing, then helps turn rough thoughts into clear LinkedIn and Instagram content.",
    clarityBody2:
      "It doesn't replace your judgment. It gives your ideas a strong first form, so you can edit, refine, and make them yours.",
    quote:
      "“The best technology should make you feel more like yourself, not less.”",
    howItWorksHeading: "How it works",
    howItWorksBody:
      "You bring a handful of writing examples and an idea. MAVE learns the patterns that make your voice yours — sentence length, pacing, vocabulary, structure — and uses them as creative direction, not a formula.",
  },

  changelog: {
    badge: "Changelog",
    heading: "What’s new in MAVE.",
    description:
      "New features, thoughtful improvements, and everything we’re refining along the way.",
    entries: [
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
    ],
  },

  postCard: {
    edit: "Edit",
    regenerate: "Regenerate",
  },
}

export type Marketing = typeof marketing
