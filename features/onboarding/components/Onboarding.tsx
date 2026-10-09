"use client"
import { useState } from "react"
import Step1 from "./Step1"
import Step2 from "./Step2"
import Step3 from "./Step3"
import Step4 from "./Step4"
import StepsButtons from "./StepsButtons"
import { ProviderValue, Steps, SubmissionType } from "../types"
import OnboardingHeader from "./OnboardingHeader"
import Step5 from "./Step5"
import { SaveAiCredentialInput, SaveVisualPreferencesInput } from "../schemas"
import {
  completeOnboarding,
  saveAiCredential,
  saveVisualPreferences,
  saveWritingExamples,
} from "../actions"
import { toast } from "sonner"
import { cn } from "cn"
import {
  VisualColorPalette,
  VisualDensity,
  VisualMood,
  VisualTypography,
  MOOD_DEFAULTS,
} from "@/lib/visuals/taste"
import { useRouter } from "next/navigation"
const Onboarding = ({
  state,
}: {
  state: { readonly isCompleted: boolean; readonly step: Steps | null }
}) => {
  const [step, setStep] = useState<Steps>(state.step || 1)
  const [provider, setProvider] = useState<ProviderValue | null>(null)
  const [apiKey, setApiKey] = useState("")
  const [submissionType, setSubmissionType] = useState<SubmissionType>(null)
  const [mood, setMood] = useState<VisualMood>("Minimal")
  const [colorPalette, setColorPalette] =
    useState<VisualColorPalette>("Cool muted")
  const [density, setDensity] = useState<VisualDensity>("Balanced")
  const [typography, setTypography] = useState<VisualTypography>("Sans")

  const moodProfile = MOOD_DEFAULTS[mood]

  const [examples, setExamples] = useState<string[]>([""])
  const [error, setError] = useState("")
  const router = useRouter()

  const isSubmitting = submissionType !== null
  const isStep2Valid = provider !== null && apiKey.trim().length > 0

  // Handlers

  const handleError = (message: string) => {
    setError(message)
    toast.error(message)
  }

  const handleBack = () => {
    if (isSubmitting || step === 1) return

    setStep((prev) => (prev - 1) as Steps)
  }

  const handleSkip = async () => {
    if (isSubmitting) return

    setSubmissionType("skip")
    setError("")

    try {
      const result = await saveWritingExamples({ examples: [] })

      if (!result.success) {
        setError(result.error)
        return
      }

      setStep(4)
    } catch {
      handleError("Failed to skip this step. Please try again.")
    } finally {
      setSubmissionType(null)
    }
  }

  const handleClick = async () => {
    if (isSubmitting) return

    if (step === 1) {
      setStep(2)
      return
    }
    if (step === 2) {
      setSubmissionType("credential")
      setError("")

      try {
        const data: SaveAiCredentialInput = {
          provider: provider as ProviderValue,
          apiKey: apiKey.trim(),
        }

        const result = await saveAiCredential(data)

        if (!result.success) {
          handleError(result.error)
          return
        }

        setStep(3)
      } catch {
        handleError("Failed to connect your AI provider. Please try again.")
      } finally {
        setSubmissionType(null)
      }

      return
    }

    if (step === 3) {
      setSubmissionType("examples")
      setError("")

      try {
        const data = examples
          .filter((example) => example.trim().length > 0)
          .map((content) => ({ content: content.trim() }))

        const result = await saveWritingExamples({ examples: data })

        if (!result.success) {
          handleError(result.error)
          return
        }

        setStep(4)
      } catch {
        handleError("Failed to save your writing examples. Please try again.")
      } finally {
        setSubmissionType(null)
      }

      return
    }

    if (step === 4) {
      setSubmissionType("visual")
      setError("")

      try {
        const data: SaveVisualPreferencesInput = {
          preferences: {
            style: mood,
            colorPalette: colorPalette,
            density,
            typography,
          },
        }

        const result = await saveVisualPreferences(data)

        if (!result.success) {
          handleError(result.error)
          return
        }

        setStep(5)
      } catch {
        handleError("Failed to save your visual preferences. Please try again.")
      } finally {
        setSubmissionType(null)
      }

      return
    }

    if (step === 5) {
      setSubmissionType("completion")
      setError("")

      try {
        const result = await completeOnboarding()
        if (!result.success) {
          handleError(result.error)
          return
        }

        router.replace("/app")
        router.refresh()
      } catch (error) {
        handleError("Failed to complete onboarding. Please try again.")
      } finally {
        setSubmissionType(null)
      }
    }
  }
  return (
    <div className={``}>
      {/* Header */}
      <OnboardingHeader step={step} />

      <div
        className={cn(
          `mx-auto min-h-[80svh] flex-col gap-16`,
          step === 4
            ? "max-w-8xl flex justify-start gap-y-10 p-6 md:p-12"
            : "flex-center max-w-6xl p-6 md:px-64"
        )}
      >
        {/* Steps */}
        {step === 1 && <Step1 />}
        {step === 2 && (
          <Step2
            provider={provider}
            setProvider={setProvider}
            apiKey={apiKey}
            setApiKey={setApiKey}
          />
        )}
        {step === 3 && <Step3 examples={examples} setExamples={setExamples} />}
        {step === 4 && (
          <Step4
            mood={mood}
            setMood={setMood}
            colorPalette={colorPalette}
            setColorPalette={setColorPalette}
            density={density}
            setDensity={setDensity}
            typography={typography}
            setTypography={setTypography}
          />
        )}
        {step === 5 && <Step5 />}
        {/* Steps Button */}
        <StepsButtons
          onSkip={handleSkip}
          step={step}
          onBack={handleBack}
          onClick={handleClick}
          disabled={step === 2 && !isStep2Valid}
          submissionType={submissionType}
        />
      </div>
    </div>
  )
}

export default Onboarding
