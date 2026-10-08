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
import { saveAiCredential } from "../actions"
const Onboarding = ({
  state,
}: {
  state: { readonly isCompleted: boolean; readonly step: Steps | null }
}) => {
  const [step, setStep] = useState<Steps>(state.step || 1)
  const [provider, setProvider] = useState<ProviderValue | null>(null)
  const [apiKey, setApiKey] = useState("")
  const [isSaving, setIsSaving] = useState(false)

  const isStep2Valid = provider !== null && apiKey.trim().length > 0
  const handleBack = () => {
    if (step === 1) return
    else {
      setStep((prev) => (prev - 1) as 1 | 2 | 3 | 4)
    }
  }

  const handleClick = async () => {
    if (step === 2) {
      setIsSaving(true)
      const data: SaveAiCredentialInput = {
        provider: provider as ProviderValue,
        apiKey: apiKey.trim(),
      }
      await saveAiCredential(data)
      setIsSaving(false)
    } else if (step === 4) {
      //   TODO:
    }
    setStep((prev) => (prev + 1) as 1 | 2 | 3 | 4)
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
        {step === 3 && <Step3 />}
        {step === 4 && <Step4 />}
        {step === 5 && <Step5 />}
        {/* Steps Button */}
        <StepsButtons
          step={step}
          onBack={handleBack}
          onClick={handleClick}
          disabled={step === 2 && !isStep2Valid}
          isSaving={isSaving}
        />
      </div>
    </div>
  )
}

export default Onboarding
