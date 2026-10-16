import { Visual } from "./types"

/** Filter ids — labels are resolved at render time through the dictionary. */
export const filters = ["All visuals", "Instagram", "LinkedIn", "Saved"]

export const visuals: Visual[] = [
  {
    id: 1,
    title: "visuals.items.lessNoise.title",
    platform: "Instagram",
    format: "4:5",
    category: "visuals.items.lessNoise.category",
    background: "#F3EFE5",
    foreground: "#111111",
    accent: "#A1FF00",
    eyebrow: "visuals.items.lessNoise.eyebrow",
    headline: "visuals.items.lessNoise.headline",
    footer: "visuals.items.lessNoise.footer",
  },
  {
    id: 2,
    title: "visuals.items.buildThings.title",
    platform: "LinkedIn",
    format: "4:5",
    category: "visuals.items.buildThings.category",
    background: "#111111",
    foreground: "#F3EFE5",
    accent: "#A1FF00",
    eyebrow: "visuals.items.buildThings.eyebrow",
    headline: "visuals.items.buildThings.headline",
    footer: "visuals.items.buildThings.footer",
  },
  {
    id: 3,
    title: "visuals.items.ideasNeedAVoice.title",
    platform: "Instagram",
    format: "1:1",
    category: "visuals.items.ideasNeedAVoice.category",
    background: "#EAE6DC",
    foreground: "#111111",
    accent: "#A1FF00",
    eyebrow: "visuals.items.ideasNeedAVoice.eyebrow",
    headline: "visuals.items.ideasNeedAVoice.headline",
    footer: "visuals.items.ideasNeedAVoice.footer",
  },
  {
    id: 4,
    title: "visuals.items.stopChasingTrends.title",
    platform: "LinkedIn",
    format: "4:5",
    category: "visuals.items.stopChasingTrends.category",
    background: "#DCE8D0",
    foreground: "#111111",
    accent: "#A1FF00",
    eyebrow: "visuals.items.stopChasingTrends.eyebrow",
    headline: "visuals.items.stopChasingTrends.headline",
    footer: "visuals.items.stopChasingTrends.footer",
  },
]
