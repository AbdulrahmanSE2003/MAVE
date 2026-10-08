import { Button } from "@/components/ui/button"
import { ArrowRight02Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { steps } from "../types"

const StepsButtons = ({
  step,
  onBack,
  onClick,
}: {
  step: steps
  onBack: () => void
  onClick: () => void
}) => {
  return (
    <div className={`flex items-center gap-2 self-end`}>
      {step > 1 && (
        <Button
          onClick={onBack}
          size={"lg"}
          className={`text-md flex-center gap-2 p-5`}
          variant={"ghost"}
        >
          Back
        </Button>
      )}
      <Button
        onClick={onClick}
        size={"lg"}
        className={`text-md flex-center gap-2 self-end p-5`}
      >
        Continue
        <HugeiconsIcon icon={ArrowRight02Icon} className={`size-5`} />
      </Button>
    </div>
  )
}

export default StepsButtons
