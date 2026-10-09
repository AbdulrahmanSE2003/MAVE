import { Button } from "@/components/ui/button"
import {
  ArrowRight02Icon,
  Loading03Icon,
  SkipForwardIcon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import type { Steps, SubmissionType } from "../types"

const StepsButtons = ({
  step,
  onBack,
  onClick,
  onSkip,
  disabled,
  submissionType,
}: {
  step: Steps
  onBack: () => void
  onClick: () => void
  onSkip: () => void
  disabled?: boolean
  submissionType: SubmissionType
}) => {
  const isSubmitting = submissionType !== null
  const isSkipping = submissionType === "skip"

  const STEP_LABELS: Record<number, string> = {
    1: "Let's begin",
    2: "Connect & continue",
    3: "Teach MAVE",
    4: "Looks like me",
    5: "Start Creating",
  }

  return (
    <div className="flex items-center gap-2 self-end max-md:grid max-md:w-full max-md:grid-cols-1">
      {step > 1 && (
        <Button
          onClick={onBack}
          size="lg"
          variant="ghost"
          disabled={isSubmitting}
        >
          Back
        </Button>
      )}

      {step === 3 && (
        <Button
          onClick={onSkip}
          size="lg"
          variant="secondary"
          disabled={isSubmitting}
          aria-busy={isSkipping}
        >
          {isSkipping ? (
            <>
              <HugeiconsIcon
                icon={Loading03Icon}
                className="size-5 animate-spin"
              />
              <span>Skipping...</span>
            </>
          ) : (
            <>
              <span>Skip for now</span>
              <HugeiconsIcon
                icon={SkipForwardIcon}
                className="size-5"
                aria-hidden="true"
              />
            </>
          )}
        </Button>
      )}

      <Button
        onClick={onClick}
        disabled={disabled || isSubmitting}
        size="lg"
        aria-busy={isSubmitting && !isSkipping}
        className="min-w-36 justify-center"
      >
        {isSubmitting && !isSkipping ? (
          <>
            <HugeiconsIcon
              icon={Loading03Icon}
              className="size-5 animate-spin"
            />
            <span>Saving…</span>
          </>
        ) : (
          <>
            <span>{STEP_LABELS[step]}</span>
            <HugeiconsIcon icon={ArrowRight02Icon} className="size-5" />
          </>
        )}
      </Button>
    </div>
  )
}

export default StepsButtons
