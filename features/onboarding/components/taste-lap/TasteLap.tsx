"use client"

import { cn } from "@/lib/utils"
import {
  VisualColorPalette,
  VisualDensity,
  VisualMood,
  VisualTypography,
} from "@/lib/visuals/taste"
import TasteOption from "./TasteOption"
import {
  COLOR_PALETTES,
  DENSITIES,
  MOODS,
  TYPOGRAPHIES,
  TYPOGRAPHY_FONT_CLASS,
  TYPOGRAPHY_LABEL,
  TYPOGRAPHY_SAMPLE,
} from "../../utils"

type TasteLapProps = {
  mood: VisualMood | undefined
  onMoodChange: (mood: VisualMood) => void
  colorPalette: VisualColorPalette | undefined
  onColorPaletteChange: (colorPalette: VisualColorPalette) => void
  density: VisualDensity | undefined
  onDensityChange: (density: VisualDensity) => void
  typography: VisualTypography | undefined
  onTypographyChange: (typography: VisualTypography) => void
}

const TasteLap = ({
  mood,
  onMoodChange,
  colorPalette,
  onColorPaletteChange,
  density,
  onDensityChange,
  typography,
  onTypographyChange,
}: TasteLapProps) => {
  return (
    <div className={`flex w-full flex-col gap-8`}>
      {/* Mood */}
      <div className={`flex w-full flex-col items-start gap-3`}>
        <span className={`text-xs font-medium uppercase`}>Mood</span>
        <div className={`grid w-full grid-cols-2 gap-2.5`}>
          {MOODS.map((m) => (
            <TasteOption
              isActive={mood === m.mood}
              value={m.mood}
              key={m.id}
              onChange={onMoodChange}
            >
              {m.element}
            </TasteOption>
          ))}
        </div>
      </div>

      {/* Color Palette */}
      <div className={`flex w-full flex-col items-start gap-3`}>
        <span className={`text-xs font-medium uppercase`}>Color palettes</span>

        <div className="grid w-full grid-cols-2 gap-2.5">
          {COLOR_PALETTES.map((c) => (
            <TasteOption
              key={c.id}
              isActive={colorPalette === c.palette}
              value={c.palette}
              onChange={onColorPaletteChange}
            >
              <div className="flex h-16 flex-col justify-between gap-3">
                <div className="flex h-10 w-full overflow-hidden rounded-md [&_span]:flex-1">
                  {c.swatches.map((color) => (
                    <span key={color} style={{ backgroundColor: color }} />
                  ))}
                </div>
                <span className="text-sm font-medium">{c.palette}</span>
              </div>
            </TasteOption>
          ))}
        </div>
      </div>

      {/* Density */}
      <div className={`flex w-full flex-col items-start gap-3`}>
        <span className={`text-xs font-medium uppercase`}>Density</span>

        <div className="grid w-full grid-cols-3 gap-2.5">
          {DENSITIES.map((d) => (
            <TasteOption
              key={d}
              isActive={density === d}
              value={d}
              onChange={onDensityChange}
            >
              <span className="flex-center text-sm font-medium">{d}</span>
            </TasteOption>
          ))}
        </div>
      </div>

      {/* Typography */}
      <div className={`flex w-full flex-col items-start gap-3`}>
        <span className={`text-xs font-medium uppercase`}>Typography</span>

        <div className="grid w-full grid-cols-1 gap-2.5">
          {TYPOGRAPHIES.map((t) => (
            <TasteOption
              key={t}
              isActive={typography === t}
              value={t}
              onChange={onTypographyChange}
            >
              <div className="flex items-center justify-between gap-4">
                <span className={cn("text-lg", TYPOGRAPHY_FONT_CLASS[t])}>
                  {TYPOGRAPHY_SAMPLE[t]}
                </span>
                <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                  {TYPOGRAPHY_LABEL[t]}
                </span>
              </div>
            </TasteOption>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TasteLap
