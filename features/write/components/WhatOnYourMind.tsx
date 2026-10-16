"use client"

import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { BulbIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { useEffect } from "react"
import { toast } from "sonner"
import { useT } from "@/lib/i18n"
type WhatOnYourMindProps = {
  idea: string
  setIdea: (i: string) => void
}

const WhatOnYourMind = ({ idea, setIdea }: WhatOnYourMindProps) => {
  const t = useT()
  // useEffect(() => {
  //   function handleKeyDown(event: KeyboardEvent) {
  //     if (
  //       event.key !== "Enter" ||
  //       !(event.metaKey || event.ctrlKey) ||
  //       event.shiftKey ||
  //       event.altKey
  //     ) {
  //       return
  //     }

  //     event.preventDefault()

  //     if (draft) {
  //       if (isDirty) void handleSave()
  //       return
  //     }

  //     if (!canGenerate) {
  //       toast.warning("Please enter your idea first.")
  //       return
  //     }

  //     // void handleGenerate()
  //   }

  //   window.addEventListener("keydown", handleKeyDown)
  //   return () => window.removeEventListener("keydown", handleKeyDown)
  // }, [draft, isDirty, handleSave, canGenerate, handleGenerate])

  return (
    <div className="">
      <Label
        htmlFor="post-idea"
        className="flex items-center gap-2 text-base font-semibold"
      >
        <HugeiconsIcon
          icon={BulbIcon}
          className="size-4 text-muted-foreground"
        />
        {t("write.idea.label")}
      </Label>

      <p className="text-sm text-muted-foreground">{t("write.idea.hint")}</p>

      <Textarea
        id="post-idea"
        value={idea}
        onChange={(event) => setIdea(event.target.value)}
        placeholder={t("write.idea.placeholder")}
        className="mt-2 min-h-36 resize-y border-0 bg-muted/40 px-4 py-4 text-base leading-7 shadow-none focus-visible:ring-1"
        maxLength={2000}
      />

      <p className="text-end text-xs text-muted-foreground">
        {idea.length} / 2,000
      </p>
    </div>
  )
}

export default WhatOnYourMind
