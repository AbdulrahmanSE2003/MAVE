"use client"

import StepIntro from "./StepIntro"
import TasteLap from "./taste-lap/TasteLap"
import TastePreview from "./taste-lap/TastePreview"
import { Separator } from "@/components/ui/separator"
import {
  VisualColorPalette,
  VisualDensity,
  VisualMood,
  VisualTypography,
  MOOD_DEFAULTS,
} from "@/lib/visuals/taste"
import { motion } from "framer-motion"

type Step4Props = {
  mood: VisualMood
  setMood: (mood: VisualMood) => void
  colorPalette: VisualColorPalette
  setColorPalette: (palette: VisualColorPalette) => void
  density: VisualDensity
  setDensity: (density: VisualDensity) => void
  typography: VisualTypography
  setTypography: (typography: VisualTypography) => void
}

const Step4 = ({
  mood,
  setMood,
  colorPalette,
  setColorPalette,
  density,
  setDensity,
  typography,
  setTypography,
}: Step4Props) => {
  const moodProfile = MOOD_DEFAULTS[mood]

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.2, ease: "easeInOut" }}

      className="flex min-h-200 flex-col items-start gap-12 lg:flex-row lg:gap-16"
    >
      <div className="flex w-full flex-col items-start gap-8 lg:w-3/5">
        <div className="flex w-full flex-col gap-5">
          <StepIntro
            step="04"
            heading={
              <h2 className="relative z-10 max-w-2xl text-5xl font-medium">
                Select your visual style.
              </h2>
            }
            para="Choose the visual style that feels most like you. Pick what catches your eye."
          />
        </div>

        <Separator />

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

      {/* Sticky sidebar preview — hidden on mobile where there's no room */}
      <TastePreview
        mood={mood}
        colorPalette={colorPalette}
        density={density}
        typography={typography}
        moodProfile={moodProfile}
      />
    </motion.div>
  )
}

export default Step4
