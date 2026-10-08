import Highlight from "@/components/layout/Highlight"
import { Separator } from "@/components/ui/separator"
import { ArrowRight02Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { cn } from "cn"

const Step1 = () => {
  return (
    <div className={`flex w-full flex-col gap-8`}>
      <span className={cn(`text-xs font-medium`)}>01</span>

      <h1 className={cn(`text-7xl font-medium`)}>
        Welcome to
        <br />{" "}
        <span className={`relative inline-block w-fit`}>
          <Highlight />
          MAVE.
        </span>{" "}
      </h1>
      <p className={`max-w-md paragraph`}>
        A creative workspace designed around one thing: helping your ideas sound
        more like you.
      </p>

      <Separator />
      <div className={`flex justify-between [&_span]:text-xs`}>
        <span>I have an idea.</span>
        <HugeiconsIcon icon={ArrowRight02Icon} size={20} />
        <span>MAVE understands my voice.</span>
        <HugeiconsIcon icon={ArrowRight02Icon} size={20} />
        <span>I make it mine.</span>
      </div>
    </div>
  )
}

export default Step1
