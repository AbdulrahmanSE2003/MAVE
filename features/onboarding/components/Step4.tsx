"use client"

import StepIntro from "./StepIntro"
import { cn } from "@/lib/utils"
import TasteLap from "./taste-lap/TasteLap"
import { useState } from "react"
import {
  VisualColorPalette,
  VisualDensity,
  VisualMood,
  VisualTypography,
  MOOD_DEFAULTS,
} from "@/lib/visuals/taste"
import TastePreview from "./taste-lap/TastePreview"
import { Separator } from "@/components/ui/separator"

const Step4 = () => {
  // Only these 4 are real user choices.
  const [mood, setMood] = useState<VisualMood>("Minimal")
  const [colorPalette, setColorPalette] =
    useState<VisualColorPalette>("Cool muted")
  const [density, setDensity] = useState<VisualDensity>("Balanced")
  const [typography, setTypography] = useState<VisualTypography>("sans")

  // medium / subject fallback / lighting / composition are DERIVED from
  // mood, not separate state — they're not user-facing choices in the MVP.
  const moodProfile = MOOD_DEFAULTS[mood]

  return (
    <div className={`flex-between min-h-200 items-start gap-16`}>
      <div className={`flex w-3/5 flex-col items-start gap-8`}>
        {/* Intro */}
        <div className={`flex w-full flex-col gap-5`}>
          <StepIntro
            step="04"
            heading={
              <h2
                className={cn(`relative z-10 max-w-2xl text-5xl font-medium`)}
              >
                Select your visual style.
              </h2>
            }
            para="Choose the visual style that feels most like you. Pick what catches your eye. "
          />
        </div>

        <Separator />

        {/* Taste Lap */}
        <TasteLap
          mood={mood}
          onMoodChange={setMood}
          colorPalette={colorPalette}
          onColorPaletteChange={setColorPalette}
          density={density}
          onDensityChange={setDensity}
          typography={typography}
          onTypographyChange={setTypography}
        />
      </div>

      <TastePreview
        mood={mood}
        colorPalette={colorPalette}
        density={density}
        typography={typography}
        moodProfile={moodProfile}
      />
    </div>
  )
}

export default Step4
