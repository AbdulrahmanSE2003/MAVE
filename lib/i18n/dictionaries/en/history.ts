export const history = {
  header: {
    eyebrow: "Your workspace / History",
    title: "History",
    description: "Every idea you've turned into content, all in one place.",
    itemsOne: "item",
    itemsOther: "items",
  },

  filters: {
    all: "All",
    searchPlaceholder: "Search your content...",
    searchAriaLabel: "Search history",
    resultsOne: "{count} result",
    resultsOther: "{count} results",
    recentlyGenerated: "Recently generated",
    newestFirst: "Newest first",
  },

  status: {
    generated: "Generated",
    edited: "Edited",
  },

  card: {
    copyAriaLabel: "Copy {title}",
    moreActionsAriaLabel: "More actions for {title}",
    copyContent: "Copy content",
    removeFromList: "Remove from list",
    removeUnavailableTitle:
      "Removing entries will be available once history is connected.",
    copiedMessage: "Content copied to clipboard.",
  },

  empty: {
    title: "Nothing found",
    noMatches:
      "Try another search or switch the platform filter to find what you're looking for.",
    noItems:
      "Your history is clear. Generated content will appear here once it is saved.",
    clearFilters: "Clear filters",
  },

  footer: {
    previewNote:
      "This is a UI preview using sample entries. History will need to be connected to your saved generations to persist between sessions.",
  },

  /** Placeholder text shown by the history sub-pages that are not built yet. */
  stubs: {
    page: "page",
  },

  /** Sample entries shown in the history preview. */
  items: {
    consistency: {
      title: "Consistency beats motivation",
      excerpt:
        "You don't need to feel motivated every day. You need a system that keeps you moving, even when you don't.",
      date: "Oct 12, 2026",
    },
    maveIdea: {
      title: "The idea behind MAVE",
      excerpt:
        "Your ideas deserve to sound like you. Not like another AI-generated post that everyone has already seen.",
      date: "Oct 11, 2026",
    },
    buildingInPublic: {
      title: "What I learned building in public",
      excerpt:
        "Building in public isn't about sharing every little thing. It's about sharing what you learn along the way.",
      date: "Oct 10, 2026",
    },
    lessPlanning: {
      title: "Less planning, more building",
      excerpt:
        "Sometimes the fastest way to find the right answer is to build the smallest version and learn from it.",
      date: "Oct 8, 2026",
    },
  },
}

export type History = typeof history
