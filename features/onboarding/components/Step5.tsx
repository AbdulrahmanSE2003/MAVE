import { Check } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import StepIntro from "./StepIntro"
import { cn } from "@/lib/utils"
const Step5 = () => {
  return (
    <div className={`flex flex-col items-center gap-8 text-center`}>
      {/* Check mark */}
      <div
        className={`flex h-16 w-16 items-center justify-center rounded-full bg-primary`}
      >
        <HugeiconsIcon
          icon={Check}
          strokeWidth={2}
          className={`size-8 text-black`}
        />
      </div>

      <StepIntro
        step="05"
        heading={
          <h2 className={cn(`relative z-10 text-7xl`)}>You&apos;re ready.</h2>
        }
        para="Your studio is set up and your first idea is waiting, Let's make something that sounds like you."
      />
    </div>
  )
}

export default Step5
