import {
  KeyRound,
  Palette,
  PenLine,
  UserRound,
} from "@hugeicons/core-free-icons"

export const settingsSections = [
  {
    id: "account",
    icon: UserRound,
  },
  {
    id: "ai",
    icon: KeyRound,
  },
  {
    id: "writing",
    icon: PenLine,
  },
  {
    id: "appearance",
    icon: Palette,
  },
] as const
