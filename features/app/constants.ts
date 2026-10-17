import { ShortcutGroup } from "./types"
import type { TranslationKey } from "@/lib/i18n/translator"
import type { ComponentProps } from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Home01Icon,
  FileAddFreeIcons,
  Time01Icon,
  Settings02Icon,
  ImagePlus,
} from "@hugeicons/core-free-icons"

export const SHORTCUT_GROUPS: ShortcutGroup[] = [
  {
    categoryKey: "app.shortcuts.groups.navigation.category",
    items: [
      {
        labelKey: "app.shortcuts.groups.navigation.toggleSidebar",
        keys: ["⌘", "\\"],
      },
      {
        labelKey: "app.shortcuts.groups.navigation.toggleTheme",
        keys: ["⌘", "D"],
      },
      {
        labelKey: "app.shortcuts.groups.navigation.commandCenter",
        keys: ["⌘", "K"],
      },
      {
        labelKey: "app.shortcuts.groups.navigation.keyboardShortcuts",
        keys: ["F1"],
      },
      {
        labelKey: "app.shortcuts.groups.navigation.closeDialog",
        keys: ["Esc"],
      },
    ],
  },
  {
    categoryKey: "app.shortcuts.groups.editing.category",
    items: [
      { labelKey: "app.shortcuts.groups.editing.saveDraft", keys: ["⌘", "S"] },
      { labelKey: "app.shortcuts.groups.editing.undo", keys: ["⌘", "Z"] },
      {
        labelKey: "app.shortcuts.groups.editing.redo",
        keys: ["⌘", "Shift", "Z"],
      },
    ],
  },
  {
    categoryKey: "app.shortcuts.groups.formatting.category",
    items: [
      { labelKey: "app.shortcuts.groups.formatting.bold", keys: ["⌘", "B"] },
      { labelKey: "app.shortcuts.groups.formatting.italic", keys: ["⌘", "I"] },
      {
        labelKey: "app.shortcuts.groups.formatting.strikethrough",
        keys: ["⌘", "Shift", "X"],
      },
      {
        labelKey: "app.shortcuts.groups.formatting.heading1",
        keys: ["⌘", "Alt", "1"],
      },
      {
        labelKey: "app.shortcuts.groups.formatting.heading2",
        keys: ["⌘", "Alt", "2"],
      },
      {
        labelKey: "app.shortcuts.groups.formatting.heading3",
        keys: ["⌘", "Alt", "3"],
      },
      {
        labelKey: "app.shortcuts.groups.formatting.paragraph",
        keys: ["⌘", "Alt", "0"],
      },
    ],
  },
  {
    categoryKey: "app.shortcuts.groups.lists.category",
    items: [
      {
        labelKey: "app.shortcuts.groups.lists.bulletList",
        keys: ["⌘", "Shift", "8"],
      },
      {
        labelKey: "app.shortcuts.groups.lists.numberedList",
        keys: ["⌘", "Shift", "7"],
      },
    ],
  },
]

export const MAX_LENGTH = 2000

export const MAX_TEXTAREA_HEIGHT = 320

export const navigationItems: {
  labelKey: TranslationKey
  href: string
  keywords: string
  icon: ComponentProps<typeof HugeiconsIcon>["icon"]
}[] = [
  {
    labelKey: "app.nav.home",
    href: "/app",
    keywords: "dashboard home الرئيسية",
    icon: Home01Icon,
  },
  {
    labelKey: "app.nav.createPost",
    href: "/app/write",
    keywords: "write create new post content إنشاء كتابة",
    icon: FileAddFreeIcons,
  },
  {
    labelKey: "app.nav.generateVisual",
    href: "/app/visuals",
    keywords: "generate create new image visual picture توليد إنشاء صور",
    icon: ImagePlus,
  },
  {
    labelKey: "app.nav.history",
    href: "/app/history",
    keywords: "history previous posts السجل",
    icon: Time01Icon,
  },
  {
    labelKey: "app.nav.settings",
    href: "/app/settings",
    keywords: "settings preferences الإعدادات",
    icon: Settings02Icon,
  },
]
