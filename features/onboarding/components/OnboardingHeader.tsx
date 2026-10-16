import Logo from "@/components/layout/Logo"
import { Progress } from "@/components/ui/progress"
import { useT } from "@/lib/i18n"
import { Steps } from "../types"

const OnboardingHeader = ({ step }: { step: Steps }) => {
  const t = useT()

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
          {t("onboarding.header.timeHint")}
        </span>

        {/* Step Indicator */}
        <span className={`font-mono text-xs font-semibold`}>
          {t("onboarding.header.setup")}{" "}
          <span className={`font-bold text-sidebar-primary dark:text-primary`}>
            {step}{" "}
          </span>
          {t("onboarding.header.ofTotal")}
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
