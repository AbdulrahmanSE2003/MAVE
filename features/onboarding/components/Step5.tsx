import { Check } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import StepIntro from "./StepIntro"
import { cn } from "@/lib/utils"
import { useT } from "@/lib/i18n"
import { motion } from "framer-motion"

const Step5 = () => {
  const t = useT()

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.2, ease: "easeInOut" }}

      className={`flex flex-col items-center gap-8 text-center`}
    >
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
          <h2 className={cn(`relative z-10 text-7xl`)}>
            {t("onboarding.steps.done.heading")}
          </h2>
        }
        para={t("onboarding.steps.done.paragraph")}
      />
    </motion.div>
  )
}

export default Step5
