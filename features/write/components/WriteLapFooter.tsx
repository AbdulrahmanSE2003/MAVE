import { Button } from "@/components/ui/button"
import { SparklesIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

const WriteLapFooter = ({ idea }: { idea: string }) => {
  return (
    <div className="mt-6 flex flex-col gap-4 border-t pt-5 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-xs text-muted-foreground">Your idea, your voice.</p>

      <Button
        type="button"
        size="lg"
        disabled={!idea.trim()}
        className="gap-2"
        onClick={() => {
          // Connect generation to the existing flow later.
        }}
      >
        <HugeiconsIcon icon={SparklesIcon} className="size-4" />
        Generate
      </Button>
    </div>
  )
}

export default WriteLapFooter
