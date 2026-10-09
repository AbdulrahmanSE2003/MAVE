"use client"
import { useState } from "react"
import Step1 from "./Step1"
import Step2 from "./Step2"
import Step3 from "./Step3"
import Step4 from "./Step4"
import StepsButtons from "./StepsButtons"
import { ProviderValue, Steps } from "../types"
import OnboardingHeader from "./OnboardingHeader"
import Step5 from "./Step5"
import { SaveAiCredentialInput } from "../schemas"
import { saveAiCredential, saveWritingExamples } from "../actions"
import { toast } from "sonner"
const Onboarding = ({
  state,
}: {
  state: { readonly isCompleted: boolean; readonly step: Steps | null }
}) => {
  const [step, setStep] = useState<Steps>(state.step || 1)
  const [provider, setProvider] = useState<ProviderValue | null>(null)
  const [apiKey, setApiKey] = useState("")
  const [isSaving, setIsSaving] = useState(false)
  const [isSkipping, setIsSkipping] = useState(false)
  const [examples, setExamples] = useState<string[]>([""])
  const [error, setError] = useState("")

  const isStep2Valid = provider !== null && apiKey.trim().length > 0
  const handleBack = () => {
    if (step === 1) return
    else {
      setStep((prev) => (prev - 1) as 1 | 2 | 3 | 4)
    }
  }

  const handleSkip = async () => {
    setIsSkipping(true)
    setError("")

    try {
      const result = await saveWritingExamples({ examples: [] })

      if (!result.success) {
        setError(result.error)
        return
      }

      setStep(4)
    } catch {
      setError("Failed to skip this step. Please try again.")
    } finally {
      setIsSkipping(false)
    }
  }

  const handleClick = async () => {
    // Handle step 2 Ai credential saving
    if (step === 2) {
      setIsSaving(true)
      const data: SaveAiCredentialInput = {
        provider: provider as ProviderValue,
        apiKey: apiKey.trim(),
      }
      await saveAiCredential(data)
      setIsSaving(false)
    } else if (step === 3) {
      setIsSaving(true)
      setError("")

      try {
        const data = examples
          .filter((ex) => ex.trim().length > 0)
          .map((content) => ({ content: content.trim() }))

        const result = await saveWritingExamples({
          examples: data,
        })

        if (!result.success) {
          setError(result.error)
          return
        }

        setStep(4)
        return
      } catch {
        setError("Failed to save your writing examples. Please try again.")
        toast.error("Failed to save your writing examples. Please try again.")
        return
      } finally {
        setIsSaving(false)
      }
    } else if (step === 5) {
      //   TODO:
    }
    setStep((prev) => (prev + 1) as 1 | 2 | 3 | 4 | 5)
  }
  return (
    <div className={``}>
      {/* Header */}
      <OnboardingHeader step={step} />

      <div
        className={`mx-auto flex-center min-h-[80svh] max-w-6xl flex-col gap-16 p-12 px-64`}
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
          isSaving={isSaving }
          isSkipping={isSkipping}
        />
      </div>
    </div>
  )
}

export default Onboarding
