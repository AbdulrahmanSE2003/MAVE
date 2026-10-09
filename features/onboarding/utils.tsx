import {
  Lighting,
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

export const TYPOGRAPHIES: VisualTypography[] = ["Serif", "Sans", "Bold"]

export const TYPOGRAPHY_SAMPLE: Record<VisualTypography, string> = {
  Serif: "The idea starts here.",
  Sans: "The idea starts here.",
  Bold: "The idea starts here.",
}

export const TYPOGRAPHY_FONT_CLASS: Record<VisualTypography, string> = {
  Serif: "font-serif",
  Sans: "font-sans",
  Bold: "font-sans font-extrabold uppercase",
}

export const TYPOGRAPHY_LABEL: Record<VisualTypography, string> = {
  Serif: "Serif Editorial",
  Sans: "Sans Modern",
  Bold: "Bold Display",
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

/* ---------- Color systems ---------- */

export const PALETTE_THEME: Record<
  VisualColorPalette,
  { bg: string; fg: string; accent: string; sub: string }
> = {
  "Warm neutral": {
    bg: "#F2EEE5",
    fg: "#28251F",
    accent: "#C07B4A",
    sub: "#8A8375",
  },
  Vibrant: {
    bg: "#AD0555",
    fg: "#FFFFFF",
    accent: "#608DDD",
    sub: "#FFCF56",
  },
  "Cool muted": {
    bg: "#DEDEEF",
    fg: "#282D6E",
    accent: "#6E83D5",
    sub: "#8A9698",
  },
  Monochrome: {
    bg: "#141414",
    fg: "#F4F4F2",
    accent: "#A8A8A4",
    sub: "#6E6E6A",
  },
}

export const DENSITY_SCALE: Record<
  VisualDensity,
  {
    pad: string
    gap: string
    title: string
    eyebrow: string
    detail: string
  }
> = {
  Spacious: {
    pad: "p-8 sm:p-10",
    gap: "gap-8",
    title: "text-4xl leading-none",
    eyebrow: "text-[10px]",
    detail: "gap-4",
  },
  Balanced: {
    pad: "p-7",
    gap: "gap-5",
    title: "text-[3.5rem] leading-none",
    eyebrow: "text-[10px]",
    detail: "gap-2.5",
  },
  Dense: {
    pad: "p-4 sm:p-5",
    gap: "gap-2",
    title: "text-7xl leading-[0.95]",
    eyebrow: "text-[10px]",
    detail: "gap-3",
  },
}

export const TYPE_CLASS: Record<VisualTypography, string> = {
  Serif: "font-serif font-normal tracking-[-0.045em]",
  Sans: "font-sans font-medium tracking-[-0.04em]",
  Bold: "font-sans font-extrabold uppercase tracking-[-0.065em]",
}

export const MOOD_LAYOUT: Record<
  VisualMood,
  {
    align: string
    justify: string
    extras: "rules" | "bar" | "none" | "dots"
  }
> = {
  Editorial: {
    align: "items-start text-left",
    justify: "justify-between",
    extras: "rules",
  },
  Bold: {
    align: "items-center text-center",
    justify: "justify-center",
    extras: "bar",
  },
  Minimal: {
    align: "items-start text-left",
    justify: "justify-end",
    extras: "none",
  },
  Playful: {
    align: "items-start text-left",
    justify: "justify-between",
    extras: "dots",
  },
}

export const LIGHTING_WASH: Record<
  Lighting,
  (bg: string, accent: string) => string
> = {
  "soft-natural": (bg, accent) =>
    `linear-gradient(135deg, transparent 30%, ${accent}14 100%)`,
  "soft-gradient": (bg, accent) =>
    `linear-gradient(160deg, ${accent}1F 0%, transparent 55%, ${accent}0A 100%)`,
  "flat-clean": () => "none",
  "flat-high-contrast": (bg) =>
    `linear-gradient(180deg, transparent 55%, ${bg} 100%)`,
}
