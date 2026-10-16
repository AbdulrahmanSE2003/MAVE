export const visuals = {
  header: {
    eyebrow: "Your workspace / Visual",
    title: "Visuals",
    description:
      "A home for the visuals behind your ideas. Explore concepts and keep your creative direction in one place.",
    createVisual: "Create visual",
    createUnavailableTitle:
      "Visual creation will be available in a future version.",
  },

  filters: {
    allVisuals: "All visuals",
    saved: "Saved",
  },

  card: {
    moreOptionsAriaLabel: "More options for {title}",
  },

  empty: {
    title: "No visuals found",
    description: "Try another search or choose a different filter.",
    clearFilters: "Clear filters",
  },

  footer: {
    note: "Sample concepts for your future visual workspace.",
  },

  /** Sample concepts shown in the visuals preview. */
  items: {
    lessNoise: {
      title: "Less noise, more clarity",
      category: "Minimal",
      eyebrow: "A NOTE ON CREATIVITY",
      headline: "Less noise.\nMore clarity.",
      footer: "Your ideas, your voice.",
    },
    buildThings: {
      title: "Build things that matter",
      category: "Typography",
      eyebrow: "BUILD IN PUBLIC / 001",
      headline: "Build things\nthat actually\nmatter.",
      footer: "MAVE / CREATOR NOTES",
    },
    ideasNeedAVoice: {
      title: "Ideas need a voice",
      category: "Minimal",
      eyebrow: "CREATIVE PROCESS",
      headline: "Good ideas\ndeserve to be\nheard.",
      footer: "MAVE STUDIO",
    },
    stopChasingTrends: {
      title: "Stop chasing trends",
      category: "Typography",
      eyebrow: "A DIFFERENT PERSPECTIVE",
      headline: "Stop chasing\ntrends.\nStart thinking.",
      footer: "MAVE / NOTES",
    },
  },
}

export type Visuals = typeof visuals
