import {
  DangerIcon,
  KeyRound,
  Palette,
  PenLine,
  UserRound,
} from "@hugeicons/core-free-icons"
import { DangerAction } from "./types"

export const settingsSections = [
  {
    id: "account",
    icon: UserRound,
  },
  // {
  //   id: "ai",
  //   icon: KeyRound,
  // },
  // {
  //   id: "writing",
  //   icon: PenLine,
  // },
  {
    id: "appearance",
    icon: Palette,
  },
  {
    id: "danger",
    icon: DangerIcon,
  },
] as const

export const DANGER_ACTIONS: DangerAction[] = [
  {
    id: "logout",
    titleKey: "settings.dangerZone.signOut",
    descriptionKey: "settings.dangerZone.signOutDescription",
    buttonKey: "settings.dangerZone.signOut",
    variant: "outline",
    confirmationTitleKey: "settings.dangerZone.confirmations.signOutTitle",
    confirmationDescriptionKey:
      "settings.dangerZone.confirmations.signOutDescription",
    confirmationButtonKey: "settings.dangerZone.signOut",
  },
  {
    id: "delete-posts",
    titleKey: "settings.dangerZone.deletePosts",
    descriptionKey: "settings.dangerZone.deletePostsDescription",
    buttonKey: "settings.dangerZone.deletePosts",
    variant: "destructive",
    confirmationTitleKey: "settings.dangerZone.confirmations.deletePostsTitle",
    confirmationDescriptionKey:
      "settings.dangerZone.confirmations.deletePostsDescription",
    confirmationButtonKey: "settings.dangerZone.deletePosts",
  },
  {
    id: "delete-visuals",
    titleKey: "settings.dangerZone.deleteVisuals",
    descriptionKey: "settings.dangerZone.deleteVisualsDescription",
    buttonKey: "settings.dangerZone.deleteVisuals",
    variant: "destructive",
    confirmationTitleKey:
      "settings.dangerZone.confirmations.deleteVisualsTitle",
    confirmationDescriptionKey:
      "settings.dangerZone.confirmations.deleteVisualsDescription",
    confirmationButtonKey: "settings.dangerZone.deleteVisuals",
  },
  {
    id: "delete-account",
    titleKey: "settings.dangerZone.deleteAccount",
    descriptionKey: "settings.dangerZone.deleteDescription",
    buttonKey: "settings.dangerZone.deleteAccount",
    variant: "destructive",
    confirmationTitleKey:
      "settings.dangerZone.confirmations.deleteAccountTitle",
    confirmationDescriptionKey:
      "settings.dangerZone.confirmations.deleteAccountDescription",
    confirmationButtonKey: "settings.dangerZone.deleteAccount",
  },
]
