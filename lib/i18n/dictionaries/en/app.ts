export const app = {
  dashboard: {
    title: "What are you creating today?",
    badge: "Your voice is ready!",

    generate: {
      ideaAriaLabel: "Your post idea",
      generatedAriaLabel: "Generated content",
      ideaPlaceholder: "Start with an idea, a thought, or question...",
      generatedPlaceholder: "Write something new…",
      unsavedChanges: "Unsaved changes",
      newIdea: "New idea",
      saveChanges: "Save changes",
      saving: "Saving...",
      generate: "Generate",
      generating: "Generating...",
      toasts: {
        draftGenerated: "Draft generated and saved to your workspace.",
        changesSaved: "Changes saved.",
        somethingWentWrong: "Something went wrong. Please try again.",
        enterIdeaFirst: "Please enter your idea first.",
      },
    },

    recentWork: {
      heading: "Recent Work",
      viewAll: "View all",
      twoHoursAgo: "2 hours ago",
    },

    emptyState: {
      title: "No posts yet",
      description: "Create your first post or idea to get started.",
    },
  },

  contentTypeSelect: {
    ariaLabel: "Content type",
    placeholder: "Content Type",
  },

  nav: {
    home: "Home",
    createPost: "Create a post",
    generateVisual: "Generate a visual",
    history: "History",
    settings: "Settings",
  },

  commandMenu: {
    title: "Command Menu",
    description: "Search and navigate around MAVE.",
    placeholder: "Search pages and actions...",
    empty: "No results found.",
    groups: {
      navigation: "Navigation",
      create: "Create",
      appearance: "Appearance",
    },
    actions: {
      createPost: "Create a post",
      generateVisual: "Generate a visual",
      switchToLightTheme: "Switch to light theme",
      switchToDarkTheme: "Switch to dark theme",
      useSystemTheme: "Use system theme",
    },
  },

  /** Default title/description of the shared CommandDialog (components/ui/command.tsx). */
  commandDialog: {
    title: "Command Palette",
    description: "Search for a command to run...",
  },

  shortcuts: {
    title: "Keyboard shortcuts",
    description: "Speed up your workflow across MAVE.",
    editorHint: "Writing shortcuts work inside the editor",
    groups: {
      navigation: {
        category: "Navigation",
        toggleSidebar: "Toggle sidebar",
        toggleTheme: "Toggle theme",
        commandCenter: "Command Center",
        keyboardShortcuts: "Keyboard shortcuts",
        closeDialog: "Close dialog",
      },
      editing: {
        category: "Editing",
        saveDraft: "Save draft",
        undo: "Undo",
        redo: "Redo",
      },
      formatting: {
        category: "Formatting",
        bold: "Bold",
        italic: "Italic",
        strikethrough: "Strikethrough",
        heading1: "Heading 1",
        heading2: "Heading 2",
        heading3: "Heading 3",
        paragraph: "Paragraph",
      },
      lists: {
        category: "Lists & Blocks",
        bulletList: "Bullet list",
        numberedList: "Numbered list",
      },
    },
  },

  sidebar: {
    toggleSidebar: "Toggle Sidebar",
    nav: {
      home: "Home",
      write: "Write",
      visuals: "Visuals",
      history: "History",
      settings: "Settings",
    },
    footer: {
      betaUser: "Beta user",
      profile: "Profile",
      keyboardShortcuts: "Keyboard shortcuts",
      toggleTheme: "Toggle Theme",
      logOut: "Log out",
      signingOut: "Signing out…",
      signOutFailed: "We couldn't sign you out. Please try again.",
    },
  },

  theme: {
    toggle: "Toggle theme",
    switchToLightMode: "Switch to light mode",
    switchToDarkMode: "Switch to dark mode",
  },

  greetings: {
    morning: [
      "Good morning",
      "Rise and shine",
      "Ready to create something great?",
      "A fresh start for new ideas",
      "Let's start something good",
      "Your next idea starts here",
      "A new day, a new canvas",
      "Ready to make today count?",
      "Let's bring some ideas to life",
      "Time to make something meaningful",
      "Here's to a creative day",
      "Let's get those ideas flowing",
      "Today has potential",
      "Make room for new ideas",
      "Let's turn inspiration into action",
    ],

    afternoon: [
      "Good afternoon",
      "Ready to keep things moving?",
      "Let's make this afternoon count",
      "Keep the momentum going",
      "Time to bring an idea to life",
      "Still time to make something great",
      "Let's get creative",
      "What are we working on today?",
      "One idea can go a long way",
      "Let's make something worth sharing",
      "Time to turn thoughts into words",
      "Let's make a little progress",
      "Your next idea is waiting",
      "Let's keep the creativity flowing",
      "Make this moment count",
    ],

    evening: [
      "Good evening",
      "Still creating?",
      "Ready for a little inspiration?",
      "Let's end the day on a good note",
      "A quiet moment for new ideas",
      "Got something on your mind?",
      "Let's capture that idea",
      "Time to put your thoughts into words",
      "One last idea for today?",
      "Let's create at your own pace",
      "A little space to think and create",
      "Your ideas are always welcome here",
      "Let's turn today's thoughts into something",
      "Take a breath, then create",
      "Let's make this moment yours",
    ],
  },

  actions: {
    errors: {
      signedOut: "You must be signed in.",
      postNotFound: "Post not found.",
    },
  },
}

export type App = typeof app
