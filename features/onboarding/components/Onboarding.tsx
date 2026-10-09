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
import { SaveAiCredentialInput } from "../schemas"
import { saveAiCredential, saveWritingExamples } from "../actions"
import { toast } from "sonner"
import { cn } from "cn"
const Onboarding = ({
  state,
}: {
  state: { readonly isCompleted: boolean; readonly step: Steps | null }
}) => {
  const [step, setStep] = useState<Steps>(state.step || 1)
  const [provider, setProvider] = useState<ProviderValue | null>(null)
  const [apiKey, setApiKey] = useState("")
  const [submissionType, setSubmissionType] = useState<SubmissionType>(null)

  const [examples, setExamples] = useState<string[]>([""])
  const [error, setError] = useState("")

  const isSubmitting = submissionType !== null
  const isStep2Valid = provider !== null && apiKey.trim().length > 0

  // Handlers

  const handleError = (message: string) => {
    setError(message)
    toast.error(message)
  }

  const handleBack = () => {
    if (step === 1) return
    else {
      setStep((prev) => (prev - 1) as 1 | 2 | 3 | 4)
    }
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

    if (step === 1) {
      setStep(2)
      return
    }

    if (step === 4) {
      // هنضيف حفظ الـ visual preferences في الخطوة الجاية.
      return
    }

    if (step === 5) {
      // هنضيف إكمال الـ onboarding هنا لاحقًا.
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
            ? "max-w-8xl flex justify-start p-12"
            : "flex-center max-w-6xl p-12 px-64"
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
        {step === 4 && <Step4 />}
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
