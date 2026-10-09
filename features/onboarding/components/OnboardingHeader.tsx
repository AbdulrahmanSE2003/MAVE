import Logo from "@/components/layout/Logo"
import { Progress } from "@/components/ui/progress"
import { Steps } from "../types"

const OnboardingHeader = ({ step }: { step: Steps }) => {
  return (
    <div className={`w-full`}>
      <div
        className={`flex-between h-16 w-full border-b border-border bg-background p-6`}
      >
        {/* Logo */}
        <Logo />

        {/* Hint */}
        <span
          className={`paragraph text-xs text-muted-foreground max-md:hidden`}
        >
          Takes about 2 minutes{" "}
        </span>

        {/* Step Indicator */}
        <span className={`font-mono text-xs font-semibold`}>
          SETUP ·{" "}
          <span className={`font-bold text-sidebar-primary dark:text-primary`}>
            {step}{" "}
          </span>
          OF 5
        </span>
      </div>
      <Progress
        className={`h-0.75`}
        value={((step - 1) / 4) * 100}
        id="progress-setup"
      />
    </div>
  )
}

export default OnboardingHeader
