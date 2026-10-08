"use client"
import { useState } from "react"
import Step1 from "./Step1"
import Step2 from "./Step2"
import Step3 from "./Step3"
import Step4 from "./Step4"
import StepsButtons from "./StepsButtons"
import { steps } from "../types"
import OnboardingHeader from "./OnboardingHeader"
import Step5 from "./Step5"
const Onboarding = ({
  state,
}: {
  state: { readonly isCompleted: boolean; readonly step: steps | null }
}) => {
  const [step, setStep] = useState<steps>(state.step || 1)

  const handleBack = () => {
    if (step === 1) return
    else {
      setStep((prev) => (prev - 1) as 1 | 2 | 3 | 4)
    }
  }

  const handleClick = () => {
    if (step === 4) {
      //   TODO:
    } else {
      setStep((prev) => (prev + 1) as 1 | 2 | 3 | 4)
    }
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
        {step === 2 && <Step2 />}
        {step === 3 && <Step3 />}
        {step === 4 && <Step4 />}
        {step === 5 && <Step5 />}
        {/* Steps Button */}
        <StepsButtons step={step} onBack={handleBack} onClick={handleClick} />
      </div>
    </div>
  )
}

export default Onboarding
