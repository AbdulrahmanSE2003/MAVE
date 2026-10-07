import { Button } from "@/components/ui/button"
import ArrowRight02Icon from "@hugeicons/core-free-icons/ArrowRight02Icon"
import { HugeiconsIcon } from "@hugeicons/react"

const CTA = () => {
  return (
    <div
      id="CTA"
      className={`flex flex-col items-center gap-6 bg-primary p-8 py-24 text-center md:gap-8 md:p-16`}
    >
      <span className={`text-xs font-bold uppercase`}>mave</span>
      <h6
        className={`text-center text-[2.5rem] font-medium max-md:leading-none md:max-w-2xl md:text-7xl`}
      >
        There’s something worth sharing.
      </h6>
      <p className={`max-md:max-w-64`}>
        Give your next idea a place to become clear.
      </p>
      <Button variant={"third"} size={"lg"} className={`p-4 py-5`}>
        Start Creating
        <HugeiconsIcon icon={ArrowRight02Icon} />
      </Button>
    </div>
  )
}

export default CTA
