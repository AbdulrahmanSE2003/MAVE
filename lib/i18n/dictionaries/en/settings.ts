export const settings = {
  appearance: {
    title: "Appearance",
    description: "Personalize how MAVE looks and feels.",

    theme: {
      label: "Interface theme",
      hint: "Choose light, dark, or follow your system preference.",
      options: {
        light: "Light",
        dark: "Dark",
        system: "System",
      },
    },

    font: {
      label: "Font family",
      hint: "Changes the typography across your workspace. Your choice is saved on this device.",
      options: {
        sans: "Sans-serif",
        serif: "Serif",
      },
    },

    language: {
      label: "Interface language",
      hint: "Choose the language used across MAVE.",
    },
  },

  header: {
    eyebrow: "Your workspace / Settings",
    title: "Settings",
    description:
      "Everything you need to personalize your MAVE workspace and your writing experience.",
  },

  sectionsNavLabel: "Settings sections",

  sections: {
    account: "Account",
    ai: "AI provider",
    writing: "Writing preferences",
    appearance: "Appearance",
  },

  account: {
    title: "Account",
    description: "Your profile and account information.",
    profileName: "MAVE User",
    profileSubtitle: "Your workspace profile",
    previewBadge: "Preview",
    displayName: {
      label: "Display name",
      placeholder: "Your name",
    },
    email: {
      label: "Email address",
      placeholder: "Your email address",
    },
    note: "Account information will be connected to your authentication profile later.",
  },

  ai: {
    title: "AI provider",
    description: "Choose how MAVE will generate your content.",
    plannedBadge: "Planned",
    openaiDescription: "Use your own API key to power content generation.",
    provider: {
      label: "Provider",
      hint: "Additional providers can be introduced in a later version.",
    },
    apiKey: {
      label: "API key",
      hint: "API key management is not connected in this preview. No key is being stored.",
      placeholder: "Add your API key later",
    },
    securityNote:
      "API credentials should be handled securely and never exposed in client-side code.",
  },

  writing: {
    title: "Writing preferences",
    description: "Choose your default content settings.",
    language: {
      label: "Default language",
      hint: "Used as the preferred language when creating new content.",
      options: {
        en: "English",
        ar: "Arabic",
        es: "Spanish",
      },
    },
    platform: {
      label: "Default platform",
      hint: "The platform preselected when you start a new post.",
    },
    styleReferences: {
      title: "Writing style references",
      description: "Add sample posts to help MAVE understand your voice.",
    },
  },

  help: {
    title: "Need help?",
    description:
      "Account and AI provider settings are currently previews. Font, theme, and interface language preferences are stored locally where applicable.",
  },
}

export type Settings = typeof settings
