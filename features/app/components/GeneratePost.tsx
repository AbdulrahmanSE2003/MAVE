"use client"

import { Button } from "@/components/ui/button"
import { Kbd, KbdGroup } from "@/components/ui/kbd"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { generateContent, updatePost } from "@/features/generation/actions"
import type { GenerateContentResult } from "@/features/generation/types"
import { ArrowRight02Icon, Loading03Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { ChangeEvent, useCallback, useEffect, useRef, useState } from "react"
import { toast } from "sonner"
import { MAX_LENGTH, MAX_TEXTAREA_HEIGHT } from "../constants"
import SelectContentType from "./SelectContentType"
import { ContentType } from "@/lib/generated/prisma/enums"

type Draft = Extract<GenerateContentResult, { success: true }>["data"]

const GeneratePost = () => {
  const [idea, setIdea] = useState("")
  const [contentType, setContentType] = useState<ContentType>(
    ContentType.LINKEDIN_POST
  )
  const [draft, setDraft] = useState<Draft | null>(null)
  const [editable, setEditable] = useState("")
  const [isDirty, setIsDirty] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const canGenerate = idea.trim().length > 0 && !isGenerating
  const canSave = draft !== null && isDirty && !isSaving

  const resize = useCallback((textarea: HTMLTextAreaElement) => {
    // Reset height before measuring the new content.
    textarea.style.height = "auto"

    const nextHeight = Math.min(textarea.scrollHeight, MAX_TEXTAREA_HEIGHT)

    textarea.style.height = `${nextHeight}px`

    // Scroll internally once the maximum height is reached.
    textarea.style.overflowY =
      textarea.scrollHeight > MAX_TEXTAREA_HEIGHT ? "auto" : "hidden"
  }, [])

  // The textarea switches between the idea and the generated draft; remeasure
  // whenever it starts showing a different record.
  useEffect(() => {
    const textarea = textareaRef.current
    if (textarea) resize(textarea)
  }, [draft, resize])

  const handleGenerate = useCallback(async () => {
    if (!canGenerate) return

    setIsGenerating(true)

    try {
      const result = await generateContent({ idea: idea.trim(), contentType })

      if (!result.success) {
        toast.error(result.error)
        return
      }

      setDraft(result.data)
      setEditable(result.data.content)
      setIsDirty(false)
      toast.success("Draft generated and saved to your workspace.")
    } catch (err) {
      console.error("Generate failed:", err)
      toast.error("Something went wrong. Please try again.")
    } finally {
      setIsGenerating(false)
    }
  }, [canGenerate, idea, contentType])

  const handleSave = useCallback(async () => {
    if (!draft || !isDirty || isSaving) return

    setIsSaving(true)

    try {
      const result = await updatePost({
        postId: draft.postId,
        content: editable,
      })

      if (!result.success) {
        toast.error(result.error)
        return
      }

      setIsDirty(false)
      toast.success("Changes saved.")
    } catch {
      toast.error("Something went wrong. Please try again.")
    } finally {
      setIsSaving(false)
    }
  }, [draft, isDirty, isSaving, editable])

  const handleDiscardDraft = useCallback(() => {
    if (isSaving) return

    setDraft(null)
    setEditable("")
    setIsDirty(false)
  }, [isSaving])

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (
        event.key !== "Enter" ||
        !(event.metaKey || event.ctrlKey) ||
        event.shiftKey ||
        event.altKey
      ) {
        return
      }

      event.preventDefault()

      if (draft) {
        if (isDirty) void handleSave()
        return
      }

      if (!canGenerate) {
        toast.warning("Please enter your idea first.")
        return
      }

      void handleGenerate()
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [draft, isDirty, handleSave, canGenerate, handleGenerate])

  const handleTextareaChange = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>) => {
      const textarea = event.currentTarget

      if (draft) {
        setEditable(textarea.value)
        setIsDirty(true)
      } else {
        setIdea(textarea.value.slice(0, MAX_LENGTH))
      }

      resize(textarea)
    },
    [draft, resize]
  )

  return (
    <div className="mt-4 flex min-h-72 w-full min-w-0 flex-col overflow-x-hidden rounded-xl border border-border shadow-lg max-sm:w-72">
      <Textarea
        ref={textareaRef}
        name={draft ? "content" : "idea"}
        id={draft ? "generated-content" : "idea"}
        onChange={handleTextareaChange}
        value={draft ? editable : idea}
        maxLength={draft ? undefined : MAX_LENGTH}
        aria-label={draft ? "Generated content" : "Your post idea"}
        className="max-sm:placeholder:text-md box-border block w-full max-w-full min-w-0 flex-1 resize-none overflow-x-hidden rounded-t-xl rounded-b-none border-none bg-transparent p-4 text-base leading-7 shadow-none placeholder:text-lg placeholder:text-muted-foreground/65 focus-visible:ring-0 focus-visible:ring-offset-0 sm:p-8 sm:text-lg dark:bg-transparent"
        placeholder={
          draft
            ? "Write something new…"
            : "Start with an idea, a thought, or question..."
        }
      />
      <Separator />
      <div className={`flex-between p-4 max-sm:flex-col max-sm:gap-3`}>
        {draft ? (
          <div className="flex items-center gap-3">
            <span className="rounded-full border border-border px-2.5 py-1 text-xs font-medium">
              {draft.contentType}
            </span>
            {isDirty && (
              <span className="text-xs text-muted-foreground">
                Unsaved changes
              </span>
            )}
          </div>
        ) : (
          <SelectContentType value={contentType} onChange={setContentType} />
        )}

        <div
          className={`flex items-center justify-end gap-3 max-sm:w-full max-sm:flex-col-reverse`}
        >
          {draft ? (
            <>
              <Button
                type="button"
                size={"lg"}
                variant={"outline"}
                onClick={handleDiscardDraft}
                disabled={isSaving}
              >
                New idea
              </Button>
              <Button
                type="button"
                size={"lg"}
                onClick={handleSave}
                disabled={!canSave}
                className={`px-3.5 font-semibold`}
              >
                {isSaving ? "Saving..." : "Save changes"}
                {isSaving && (
                  <HugeiconsIcon
                    icon={Loading03Icon}
                    className={`size-4 animate-spin`}
                  />
                )}
              </Button>
            </>
          ) : (
            <>
              <KbdGroup className={`max-sm:hidden`}>
                <Kbd>⌘</Kbd>
                <span>+</span>
                <Kbd>↵ Enter</Kbd>
              </KbdGroup>
              <Button
                type="button"
                onClick={handleGenerate}
                size={"lg"}
                disabled={!canGenerate}
                className={`px-3.5 font-semibold max-sm:w-full`}
              >
                {isGenerating ? "Generating..." : "Generate"}
                {isGenerating ? (
                  <HugeiconsIcon
                    icon={Loading03Icon}
                    className={`size-4 animate-spin`}
                  />
                ) : (
                  <HugeiconsIcon icon={ArrowRight02Icon} className={`size-4`} />
                )}
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default GeneratePost
