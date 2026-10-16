export const common = {
  brand: "MAVE",
  tagline: "Your ideas, your voice.",

  actions: {
    save: "Save",
    cancel: "Cancel",
    close: "Close",
    back: "Back",
    retry: "Try again",
    copy: "Copy",
    copied: "Copied",
    dismiss: "Dismiss",
  },

  status: {
    loading: "Loading…",
    saving: "Saving…",
    comingSoon: "Soon",
  },

  /** Display labels for ContentType values (shared by dashboard + write). */
  contentTypes: {
    LINKEDIN_POST: "LinkedIn post",
    INSTAGRAM_CAPTION: "Instagram caption",
    INSTAGRAM_CAROUSEL: "Instagram carousel",
  },

  metadata: {
    titleDefault: "MAVE — Your ideas, your voice.",
    titleTemplate: "%s — MAVE",
    description:
      "MAVE turns your ideas into content that sounds like you — written for the platforms you create on.",
    ogDescription: "Turn your ideas into content that sounds like you.",
  },
}

export type Common = typeof common
