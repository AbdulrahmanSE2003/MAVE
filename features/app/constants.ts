import { ShortcutGroup } from "./types"
import {
  Home01Icon,
  FileAddFreeIcons,
  Time01Icon,
  Settings02Icon,
  ImagePlus,
} from "@hugeicons/core-free-icons"

export const SHORTCUT_GROUPS: ShortcutGroup[] = [
  {
    category: "Navigation",
    items: [
      { label: "Toggle sidebar", keys: ["⌘", "\\"] },
      { label: "Toggle theme", keys: ["⌘", "D"] },
      { label: "Command Center", keys: ["⌘", "K"] },
      { label: "Keyboard shortcuts", keys: ["F1"] },
      { label: "Close dialog", keys: ["Esc"] },
    ],
  },
  {
    category: "Editing",
    items: [
      { label: "Save draft", keys: ["⌘", "S"] },
      { label: "Undo", keys: ["⌘", "Z"] },
      { label: "Redo", keys: ["⌘", "Shift", "Z"] },
    ],
  },
  {
    category: "Formatting",
    items: [
      { label: "Bold", keys: ["⌘", "B"] },
      { label: "Italic", keys: ["⌘", "I"] },
      { label: "Strikethrough", keys: ["⌘", "Shift", "X"] },
      { label: "Heading 1", keys: ["⌘", "Alt", "1"] },
      { label: "Heading 2", keys: ["⌘", "Alt", "2"] },
      { label: "Heading 3", keys: ["⌘", "Alt", "3"] },
      { label: "Paragraph", keys: ["⌘", "Alt", "0"] },
    ],
  },
  {
    category: "Lists & Blocks",
    items: [
      { label: "Bullet list", keys: ["⌘", "Shift", "8"] },
      { label: "Numbered list", keys: ["⌘", "Shift", "7"] },
    ],
  },
]
export const greetings = {
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
}
export const MAX_LENGTH = 2000

export const MAX_TEXTAREA_HEIGHT = 320

export const navigationItems = [
  {
    label: "Home",
    href: "/app",
    keywords: "dashboard home الرئيسية",
    icon: Home01Icon,
  },
  {
    label: "Create a post",
    href: "/app/write",
    keywords: "write create new post content إنشاء كتابة",
    icon: FileAddFreeIcons,
  },
  {
    label: "Generate a visual",
    href: "/app/visual",
    keywords: "generate create new image visual picture  توليد إنشاء صور",
    icon: ImagePlus,
  },
  {
    label: "History",
    href: "/app/history",
    keywords: "history previous posts السجل",
    icon: Time01Icon,
  },
  {
    label: "Settings",
    href: "/app/settings",
    keywords: "settings preferences الإعدادات",
    icon: Settings02Icon,
  },
]
