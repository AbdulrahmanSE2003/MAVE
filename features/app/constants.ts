import { ShortcutGroup } from "./types"

export const SHORTCUT_GROUPS: ShortcutGroup[] = [
  {
    category: "Navigation",
    items: [
      { label: "Toggle sidebar", keys: ["Ctrl", "B"] },
      { label: "Toggle theme", keys: ["Ctrl", "D"] },
      { label: "Keyboard shortcuts", keys: ["F1"] },
      { label: "Close dialog", keys: ["Esc"] },
    ],
  },
]

export const greetings = {
  morning: [
    "Rise and shine",
    "Ready to build something great today",
    "A fresh start for new ideas",
  ],
  afternoon: [
    "Keep up the momentum",
    "Let's make this afternoon productive",
    "Time to ship some code",
  ],
  evening: [
    "Good evening",
    "Unwinding or still building",
    "Hope it was a good day",
  ],
}
