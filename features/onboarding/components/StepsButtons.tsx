"use client"

import { Button } from "@/components/ui/button"
import {
  ArrowRight02Icon,
  Loading03Icon,
  SkipForwardIcon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import type { Steps } from "../types"

const StepsButtons = ({
  step,
  onBack,
  onClick,
  disabled,
  isSaving,
}: {
  step: Steps
  onBack: () => void
  onClick: () => void
  disabled?: boolean
  isSaving?: boolean
}) => {
  return (
    <div className="flex items-center gap-2 self-end">
      {step > 1 && (
        <Button onClick={onBack} size="lg" variant="ghost" disabled={isSaving}>
          Back
        </Button>
      )}
      {step === 3 && (
        <Button
          onClick={onClick}
          size="lg"
          variant="secondary"
          disabled={isSaving}
        >
          Skip for now
          <HugeiconsIcon
            icon={SkipForwardIcon}
            className="size-5"
            aria-hidden="true"
          />
        </Button>
      )}

      <Button
        onClick={onClick}
        disabled={disabled || isSaving}
        size="lg"
        aria-busy={isSaving}
        className="min-w-36 justify-center"
      >
        {isSaving ? (
          <>
            <HugeiconsIcon
              icon={Loading03Icon}
              className="size-5 animate-spin"
            />
            <span>Saving…</span>
          </>
        ) : (
          <>
            <span>Continue</span>
            <HugeiconsIcon icon={ArrowRight02Icon} className="size-5" />
          </>
        )}
      </Button>
    </div>
  )
}

export default StepsButtons
