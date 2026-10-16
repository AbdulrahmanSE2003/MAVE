export const onboarding = {
  header: {
    timeHint: "Takes about 2 minutes",
    setup: "SETUP ·",
    ofTotal: "OF 5",
  },

  steps: {
    intro: {
      welcomeTo: "Welcome to",
      paragraph:
        "A creative workspace designed around one thing: helping your ideas sound more like you.",
      idea: "I have an idea.",
      understandsVoice: "MAVE understands my voice.",
      makesMine: "I make it mine.",
    },
    provider: {
      heading: "Connect your AI provider.",
      paragraph:
        "MAVE uses your own provider account to generate content. Your API key is encrypted and securely stored.",
      apiKeyLabel: "API Key",
      apiKeyHint:
        "Your key belongs to you. MAVE never uses it for anything outside your workspace.",
      bringOwnKey: "Bring your own API key",
    },
    examples: {
      teachLead: "Teach",
      teachTail: "your voice.",
      paragraph:
        "Add a few pieces of writing that feel like you, Posts or even long messages all work.",
      label: "Writing examples",
      optional: "(optional)",
      count: "{count}/5 examples",
      addAnother: "Add another example",
      exampleLabel: "Example {num}",
      deleteItem: "Delete item",
      placeholder: "Post something you've written...",
    },
    style: {
      heading: "Select your visual style.",
      paragraph:
        "Choose the visual style that feels most like you. Pick what catches your eye.",
    },
    done: {
      heading: "You're ready.",
      paragraph:
        "Your studio is set up and your first idea is waiting, Let's make something that sounds like you.",
    },
  },

  buttons: {
    letsBegin: "Let's begin",
    connectContinue: "Connect & continue",
    teachMave: "Teach MAVE",
    looksLikeMe: "Looks like me",
    startCreating: "Start Creating",
    skipForNow: "Skip for now",
    skipping: "Skipping...",
  },

  taste: {
    mood: "Mood",
    colorPalettes: "Color palettes",
    density: "Density",
    typography: "Typography",
    moods: {
      Editorial: "Editorial",
      Bold: "Bold",
      Minimal: "Minimal",
      Playful: "Playful",
    },
    paletteLabels: {
      "Warm neutral": "Warm neutral",
      Vibrant: "Vibrant",
      "Cool muted": "Cool muted",
      Monochrome: "Monochrome",
    },
    densityLabels: {
      Spacious: "Spacious",
      Balanced: "Balanced",
      Dense: "Dense",
    },
    typographyOptions: {
      Serif: "Serif",
      Sans: "Sans",
      Bold: "Bold",
    },
    typographySample: "The idea starts here.",
    typographyStyles: {
      Serif: "Serif Editorial",
      Sans: "Sans Modern",
      Bold: "Bold Display",
    },
  },

  preview: {
    livePreview: "Live preview",
    contentStudio: "Content studio",
    studyInIdeas: "A study in ideas",
    headlineMake: "MAKE",
    headlineIt: "IT",
    headlineMatter: "MATTER.",
    headlineIdea: "The idea",
    headlineStarts: "starts",
    headlineHere: "here.",
    mavesRead: "MAVE'S READ",
    description: "{mood}, {color}, {density} and {feel}.",
    mediums: {
      photography: "photography",
      abstract: "abstract",
      illustration: "illustration",
      "typography-only": "typography-only",
    },
    compositions: {
      "asymmetric-spacious": "asymmetric-spacious",
      "centered-bold": "centered-bold",
      "single-element-minimal": "single-element-minimal",
      "scattered-playful": "scattered-playful",
    },
    moodFeels: {
      Editorial: "refined",
      Bold: "confident",
      Minimal: "intentional",
      Playful: "expressive",
    },
    colorFeels: {
      "Warm neutral": "warm",
      Vibrant: "vibrant",
      "Cool muted": "cool",
      Monochrome: "monochrome",
    },
    densityFeels: {
      Spacious: "spacious",
      Balanced: "balanced",
      Dense: "dense",
    },
  },

  validation: {
    apiKeyRequired: "API key is required.",
    exampleEmpty: "Example cannot be empty.",
    maxExamples: "You can add up to 5 writing examples.",
  },

  errors: {
    mustBeSignedIn: "You must be signed in.",
    invalidInput: "Invalid input.",
    invalidPreferences: "Invalid preferences.",
    notReadyToComplete: "Onboarding is not ready to be completed.",
    skipFailed: "Failed to skip this step. Please try again.",
    connectFailed: "Failed to connect your AI provider. Please try again.",
    saveExamplesFailed:
      "Failed to save your writing examples. Please try again.",
    savePreferencesFailed:
      "Failed to save your visual preferences. Please try again.",
    completeFailed: "Failed to complete onboarding. Please try again.",
  },
}

export type Onboarding = typeof onboarding
