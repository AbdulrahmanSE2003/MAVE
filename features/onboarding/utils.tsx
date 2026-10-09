import {
  VisualColorPalette,
  VisualDensity,
  VisualMood,
  VisualTypography,
} from "@/lib/visuals/taste"
import { ReactNode } from "react"

export const MOODS: {
  id: number
  mood: VisualMood
  element: ReactNode
}[] = [
  {
    id: 1,
    mood: "Editorial",
    element: (
      <div className="flex h-12 flex-col justify-between">
        <span className="font-semibold">Editorial</span>
        <div className="flex h-4 w-20 flex-col gap-1.5 [&_span]:inline-block">
          <span className="h-0.5 w-full bg-foreground" />
          <span className="h-0.5 w-full bg-foreground/75" />
          <span className="h-0.5 w-full bg-foreground/50" />
        </div>
      </div>
    ),
  },
  {
    id: 2,
    mood: "Bold",
    element: (
      <div className="flex h-12 flex-col justify-between">
        <span className="font-bold">Bold</span>
        <span className="h-2.5 w-16 bg-foreground" />
      </div>
    ),
  },
  {
    id: 3,
    mood: "Minimal",
    element: (
      <div className="flex h-12 flex-col justify-between">
        <span className="font-medium">Minimal</span>
        <span className="h-0.5 w-10 bg-foreground/60" />
      </div>
    ),
  },
  {
    id: 4,
    mood: "Playful",
    element: (
      <div className="flex h-12 flex-col justify-between">
        <span className="font-semibold">Playful</span>
        <div className="flex items-center gap-1.5">
          <span className="size-3 rounded-full bg-foreground" />
          <span className="size-3 rounded-full bg-primary" />
          <span className="size-3 rounded-full bg-muted-foreground/40" />
        </div>
      </div>
    ),
  },
]

export const COLOR_PALETTES: {
  id: number
  palette: VisualColorPalette
  swatches: string[]
}[] = [
  {
    id: 1,
    palette: "Warm neutral",
    swatches: ["#F2EEE5", "#C07B4A", "#8A8375"],
  },
  {
    id: 2,
    palette: "Cool muted",
    swatches: ["#ECEFEF", "#6E8385", "#8A9698"],
  },
  {
    id: 3,
    palette: "Monochrome",
    swatches: ["#1A1A1A", "#4A4A45", "#2E2E2A"],
  },
  {
    id: 4,
    palette: "Vibrant",
    swatches: ["#AD0555", "#608DDD", "#FFCF56"],
  },
]

export const TYPOGRAPHIES: VisualTypography[] = ["serif", "sans", "display"]

export const TYPOGRAPHY_SAMPLE: Record<VisualTypography, string> = {
  serif: "The idea starts here.",
  sans: "The idea starts here.",
  display: "The idea starts here.",
}

export const TYPOGRAPHY_FONT_CLASS: Record<VisualTypography, string> = {
  serif: "font-serif",
  sans: "font-sans",
  display: "font-sans font-extrabold uppercase",
}

export const TYPOGRAPHY_LABEL: Record<VisualTypography, string> = {
  serif: "Serif Editorial",
  sans: "Sans Modern",
  display: "Bold Display",
}

export const DENSITIES: VisualDensity[] = ["Spacious", "Balanced", "Dense"]

export const DENSITY_PREVIEW_CLASS: Record<VisualDensity, string> = {
  Spacious: "py-8",
  Balanced: "py-5",
  Dense: "py-2",
}

const MOOD_FEEL: Record<VisualMood, string> = {
  Editorial: "refined",
  Bold: "confident",
  Minimal: "intentional",
  Playful: "expressive",
}

const COLOR_FEEL: Record<VisualColorPalette, string> = {
  "Warm neutral": "warm",
  Vibrant: "vibrant",
  "Cool muted": "cool",
  Monochrome: "monochrome",
}

const DENSITY_FEEL: Record<VisualDensity, string> = {
  Spacious: "spacious",
  Balanced: "balanced",
  Dense: "dense",
}

export function buildTasteDescription(
  mood: VisualMood,
  colorPalette: VisualColorPalette,
  density: VisualDensity
): string {
  const moodLower = mood.toLowerCase()
  const colorFeel = COLOR_FEEL[colorPalette]
  const densityFeel = DENSITY_FEEL[density]
  const feel = MOOD_FEEL[mood]

  return `${moodLower[0].toUpperCase()}${moodLower.slice(1)}, ${colorFeel}, ${densityFeel} and ${feel}.`
}
