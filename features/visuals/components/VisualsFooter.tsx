import { Sparkles } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

const VisualsFooter = () => {
  return (
    <div className="flex items-center gap-2 border-t pt-5 text-xs text-muted-foreground">
      <HugeiconsIcon icon={Sparkles} className="size-4 text-muted-foreground" />
      <span>Sample concepts for your future visual workspace.</span>
    </div>
  )
}

export default VisualsFooter
