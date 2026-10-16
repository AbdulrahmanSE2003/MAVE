export const write = {
  header: {
    breadcrumb: "Your workspace / Write",
    title: "Let's make something.",
    subtitle: "Start with an idea. We'll help you find the words.",
  },

  idea: {
    label: "What's on your mind?",
    hint: "A thought, a problem, a lesson, or something you want to share.",
    placeholder: "e.g. Why not every project needs microservices...",
  },

  platform: {
    label: "Create for",
    description: "Social content",
  },

  settings: {
    title: "Generation settings",
    description: "Customize the direction of your post (optional)",
    goalLabel: "What's the goal?",
    toneLabel: "Tone of voice",
    tonePlaceholder: "Select a tone",
    toneGroup: "Tones",
    contextLabel: "Additional context",
    contextPlaceholder: "Anything specific the post should mention or avoid...",
    goals: {
      educate: "Educate",
      experience: "Share experience",
      story: "Tell a story",
      discussion: "Start a discussion",
    },
    tones: {
      usualVoice: "My usual voice",
      friendlyConversational: "Friendly and conversational",
      professionalClear: "Professional and clear",
      boldOpinionated: "Bold and opinionated",
      educationalPractical: "Educational and practical",
    },
  },

  footer: {
    tagline: "Your idea, your voice.",
    generate: "Generate",
    generating: "Generating...",
  },

  workspace: {
    saveChanges: "Save changes",
    generateImage: "Generate Image for this post",
    lastSaved: "Last saved {time}",
    notSavedYet: "Not saved yet",
    saveShortcut: "⌘ + S to save",
  },

  topBar: {
    home: "Home",
    write: "Write",
    newIdea: "New Idea",
  },

  editor: {
    menus: {
      edit: "Edit",
      format: "Format",
      lists: "Lists",
      insert: "Insert",
      actions: "Actions",
    },
    undo: "Undo",
    redo: "Redo",
    bold: "Bold",
    italic: "Italic",
    strikethrough: "Strikethrough",
    paragraph: "Paragraph",
    heading: "Heading {level}",
    inlineCode: "Inline code",
    bulletList: "Bullet list",
    orderedList: "Numbered list",
    blockquote: "Blockquote",
    horizontalDivider: "Horizontal divider",
    lineBreak: "Line break",
    copyPlainText: "Copy as plain text",
    copyHtml: "Copy as HTML",
    copySuccess: "Post copied successfully.",
    copyFailed: "Failed to copy post.",
    copyFormattedSuccess: "Formatted post copied successfully.",
  },

  toasts: {
    contentReady: "Your content is ready.",
    changesSaved: "Changes saved.",
    saveFailed: "Failed to save changes.",
  },

  errors: {
    somethingWentWrong: "Something went wrong. Please try again.",
    invalidInput: "Invalid input.",
    signInGenerate: "You must be signed in to generate.",
    signInSave: "You must be signed in to save changes.",
  },

  notFound: {
    title: "Post not found",
    description: "This post doesn't exist or is no longer available.",
    backToPosts: "Back to posts",
  },

  validation: {
    ideaRequired: "Please enter an idea.",
    carouselMinSlides: "Carousel must have at least one slide.",
    carouselMaxSlides: "Carousel cannot exceed 10 slides.",
    contentEmpty: "Content cannot be empty.",
  },

  generation: {
    noProvider:
      "No AI provider is connected yet. Connect one to start writing.",
    multipleProviders:
      "You have more than one provider saved. Choose which one to use.",
    noApiKey: "No API key is saved for that provider. Reconnect it first.",
    apiKeyUnreadable: "Your saved API key can't be read. Please reconnect it.",
    providerNotConfigured: "This provider isn't configured on the server yet.",
    providerEmpty: "The provider came back empty. Please try again.",
    geminiHighDemand:
      "Gemini is temporarily unavailable due to high demand. Please try again in a moment.",
    providerUnreachable:
      "Your AI provider couldn't be reached. Please check your connection and try again.",
    carouselMalformed: "The carousel came back malformed. Please try again.",
    carouselInvalidFormat:
      "The carousel didn't match the expected format. Please try again.",
    postNotFound: "This post could not be found.",
    noPermission: "You don't have permission to edit this post.",
    networkError:
      "Couldn't connect to the AI provider. Check your connection and try again.",
    temporarilyUnavailable:
      "Gemini is temporarily unavailable. Please try again in a moment.",
    rateLimited:
      "Gemini is receiving too many requests. Please wait a moment and try again.",
    invalidApiKey:
      "Your Gemini API key is invalid. Please check your provider settings.",
    permissionDenied:
      "Gemini denied this request. Check your API key permissions and model access.",
    emptyResponse: "The AI returned an empty response. Please try again.",
  },
}

export type Write = typeof write
