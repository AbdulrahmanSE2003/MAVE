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
