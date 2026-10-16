"use client"

import { Button } from "@/components/ui/button"
import { Kbd, KbdGroup } from "@/components/ui/kbd"
import { Loading03Icon, SparklesIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

type WriteLapFooterProps = {
  idea: string
  isGenerating: boolean
  onGenerate: () => void
}

const WriteLapFooter = ({
  idea,
  isGenerating,
  onGenerate,
}: WriteLapFooterProps) => {
  return (
    <div className="mt-6 flex flex-col gap-4 border-t pt-5 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-xs text-muted-foreground">Your idea, your voice.</p>

      <div className={`flex items-center gap-1.5`}>
        <KbdGroup className={`max-sm:hidden`}>
          <Kbd>⌘</Kbd>
          <span>+</span>
          <Kbd>↵ Enter</Kbd>
        </KbdGroup>
        <Button
          type="button"
          size="lg"
          disabled={!idea.trim() || isGenerating}
          className="gap-2"
          onClick={onGenerate}
        >
          {isGenerating ? (
            <HugeiconsIcon
              icon={Loading03Icon}
              className="size-4 animate-spin"
            />
          ) : (
            <HugeiconsIcon icon={SparklesIcon} className="size-4" />
          )}

          {isGenerating ? "Generating..." : "Generate"}
        </Button>
      </div>
    </div>
  )
}

export default WriteLapFooter
