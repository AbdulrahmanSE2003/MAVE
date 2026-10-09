import Highlight from "@/components/layout/Highlight"
import { Separator } from "@/components/ui/separator"
import { ArrowDown02Icon, ArrowRight02Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { cn } from "cn"
import StepIntro from "./StepIntro"
import { motion } from "framer-motion"

const Step1 = () => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className={`flex w-full flex-col gap-8`}
    >
      <StepIntro
        step="01"
        heading={
          <h2 className={cn(`relative z-10 text-5xl font-medium md:text-7xl`)}>
            Welcome to
            <br />{" "}
            <span className={`relative inline-block w-fit`}>
              <Highlight />
              MAVE.
            </span>{" "}
          </h2>
        }
        para="A creative workspace designed around one thing: helping your ideas sound
        more like you."
      />

      <Separator />
      <div
        className={`flex justify-between max-md:flex-col max-md:items-start max-md:gap-3 [&_span]:text-xs`}
      >
        <span>I have an idea.</span>
        <HugeiconsIcon
          icon={ArrowDown02Icon}
          size={20}
          className={`md:hidden`}
        />
        <HugeiconsIcon
          icon={ArrowRight02Icon}
          size={20}
          className={`max-md:hidden`}
        />
        <span>MAVE understands my voice.</span>
        <HugeiconsIcon
          icon={ArrowDown02Icon}
          size={20}
          className={`md:hidden`}
        />
        <HugeiconsIcon
          icon={ArrowRight02Icon}
          size={20}
          className={`max-md:hidden`}
        />
        <span>I make it mine.</span>
      </div>
    </motion.div>
  )
}

export default Step1
