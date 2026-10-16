"use client"

import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ArrowUp01Icon, ArrowDown01Icon } from "@hugeicons/core-free-icons"
import { useState } from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import GenSettingsHeader from "./GenerationSettings/GenSettingsHeader"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Tones, toneKeys } from "../constants"
import GoalChips from "./GenerationSettings/GoalChips"
import { Goal } from "../types"
import { useI18n, useT } from "@/lib/i18n"

type Tone = (typeof Tones)[number]

type GenerationSettingsProps = {
  goal: Goal["value"]
  setGoal: (g: Goal["value"]) => void
  tone: Tone
  setTone: (t: Tone) => void
  context: string
  setContext: (c: string) => void
}

const GenerationSettings = ({
  goal,
  setGoal,
  tone,
  setTone,
  context,
  setContext,
}: GenerationSettingsProps) => {
  const [settingsOpen, setSettingsOpen] = useState(false)
  const t = useT()
  const { dict } = useI18n()

  return (
    <Collapsible
      open={settingsOpen}
      onOpenChange={setSettingsOpen}
      className="mt-6 border-t pt-5"
    >
      <CollapsibleTrigger className="flex w-full items-center justify-between gap-3 rounded-lg text-start outline-none focus-visible:ring-2 focus-visible:ring-ring">
        <GenSettingsHeader />

        {settingsOpen ? (
          <HugeiconsIcon
            icon={ArrowUp01Icon}
            className="size-4 shrink-0 text-muted-foreground"
          />
        ) : (
          <HugeiconsIcon
            icon={ArrowDown01Icon}
            className="size-4 shrink-0 text-muted-foreground"
          />
        )}
      </CollapsibleTrigger>

      <CollapsibleContent className="space-y-6 pt-6">
        <div className="space-y-3">
          <Label htmlFor="post-goal">{t("write.settings.goalLabel")}</Label>
          <GoalChips goal={goal} setGoal={setGoal} />
        </div>

        <div className="space-y-2">
          <Label htmlFor="post-tone">{t("write.settings.toneLabel")}</Label>
          <Select defaultValue={tone} onValueChange={setTone}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder={t("write.settings.tonePlaceholder")} />
            </SelectTrigger>
            <SelectContent position="popper" side="bottom">
              <SelectGroup>
                <SelectLabel>{t("write.settings.toneGroup")}</SelectLabel>
                {Tones.map((tone) => (
                  <SelectItem key={tone} value={tone}>
                    {dict.write.settings.tones[toneKeys[tone]]}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="post-context">
            {t("write.settings.contextLabel")}
          </Label>

          <Textarea
            id="post-context"
            value={context}
            onChange={(event) => setContext(event.target.value)}
            placeholder={t("write.settings.contextPlaceholder")}
            className="min-h-24 resize-y"
          />
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}

export default GenerationSettings
