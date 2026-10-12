"use client"

import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  ArrowUp01Icon,
  ArrowDown01Icon,
  Attachment01Icon,
  Cancel01Icon,
} from "@hugeicons/core-free-icons"
import { useState } from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import { Button } from "@/components/ui/button"

const GenerationSettings = () => {
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [goal, setGoal] = useState("educate")
  const [tone, setTone] = useState("My usual voice")
  const [context, setContext] = useState("")
  const [references, setReferences] = useState<string[]>([])
  return (
    <Collapsible
      open={settingsOpen}
      onOpenChange={setSettingsOpen}
      className="mt-6 border-t pt-5"
    >
      <CollapsibleTrigger className="flex w-full items-center justify-between gap-3 rounded-lg text-left outline-none focus-visible:ring-2 focus-visible:ring-ring">
        <span className="space-y-1">
          <span className="block text-sm font-semibold">
            Generation settings
          </span>
          <span className="block text-xs text-muted-foreground">
            Customize the direction of your post (optional)
          </span>
        </span>

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
          <Label htmlFor="post-goal">What&apos;s the goal?</Label>

          <div className="flex flex-wrap gap-2">
            {[
              { value: "educate", label: "Educate" },
              { value: "experience", label: "Share experience" },
              { value: "story", label: "Tell a story" },
              { value: "discussion", label: "Start a discussion" },
            ].map((item) => (
              <button
                key={item.value}
                type="button"
                onClick={() => setGoal(item.value)}
                aria-pressed={goal === item.value}
                className={`rounded-full border px-3 py-2 text-xs font-medium transition-colors ${
                  goal === item.value
                    ? "border-primary bg-primary/10"
                    : "border-border text-muted-foreground hover:bg-muted"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="post-tone">Tone of voice</Label>

          <select
            id="post-tone"
            value={tone}
            onChange={(event) => setTone(event.target.value)}
            className="h-10 w-full rounded-lg border border-input bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <option>My usual voice</option>
            <option>Friendly and conversational</option>
            <option>Professional and clear</option>
            <option>Bold and opinionated</option>
            <option>Educational and practical</option>
          </select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="post-context">Additional context</Label>

          <Textarea
            id="post-context"
            value={context}
            onChange={(event) => setContext(event.target.value)}
            placeholder="Anything specific the post should mention or avoid..."
            className="min-h-24 resize-y"
          />
        </div>

        <div className="space-y-3">
          <div className="space-y-1">
            <Label>Style references</Label>
            <p className="text-xs leading-5 text-muted-foreground">
              Use up to 5 of your previous posts to guide the writing style.
            </p>
          </div>

          <div className="flex flex-col gap-3 rounded-xl border border-dashed p-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted">
                <HugeiconsIcon icon={Attachment01Icon} className="size-4" />
              </div>

              <div>
                <p className="text-sm font-medium">Choose past posts</p>
                <p className="text-xs text-muted-foreground">
                  {references.length} of 5 selected
                </p>
              </div>
            </div>

            <Button
              type="button"
              variant="outline"
              size="sm"
              disabled={references.length >= 5}
              onClick={() => {
                // Connect to the existing post picker later.
              }}
            >
              Select references
            </Button>
          </div>

          {references.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {references.map((reference) => (
                <span
                  key={reference}
                  className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1.5 text-xs"
                >
                  {reference}
                  <button
                    type="button"
                    aria-label={`Remove ${reference}`}
                    onClick={() =>
                      setReferences((current) =>
                        current.filter((item) => item !== reference)
                      )
                    }
                  >
                    <HugeiconsIcon icon={Cancel01Icon} className="size-3" />
                  </button>
                </span>
              ))}
            </div>
          )}
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}

export default GenerationSettings
