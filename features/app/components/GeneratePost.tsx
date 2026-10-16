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
import { useI18n, useT } from "@/lib/i18n"
import { useRouter } from "next/navigation"

type Draft = Extract<GenerateContentResult, { success: true }>["data"]

const GeneratePost = () => {
  const t = useT()
  const { dict } = useI18n()
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

  const router = useRouter()

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

      router.push(`/app/write/${result.data.postId}`)

      toast.success(t("app.dashboard.generate.toasts.draftGenerated"))
    } catch (err) {
      console.error("Generate failed:", err)
      toast.error(t("app.dashboard.generate.toasts.somethingWentWrong"))
    } finally {
      setIsGenerating(false)
    }
  }, [canGenerate, idea, contentType, router, t])

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
      toast.success(t("app.dashboard.generate.toasts.changesSaved"))
    } catch {
      toast.error(t("app.dashboard.generate.toasts.somethingWentWrong"))
    } finally {
      setIsSaving(false)
    }
  }, [draft, isDirty, isSaving, editable, t])

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
        toast.warning(t("app.dashboard.generate.toasts.enterIdeaFirst"))
        return
      }

      void handleGenerate()
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [draft, isDirty, handleSave, canGenerate, handleGenerate, t])

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
        aria-label={
          draft
            ? t("app.dashboard.generate.generatedAriaLabel")
            : t("app.dashboard.generate.ideaAriaLabel")
        }
        className="max-sm:placeholder:text-md box-border block w-full max-w-full min-w-0 flex-1 resize-none overflow-x-hidden rounded-t-xl rounded-b-none border-none bg-transparent p-4 text-base leading-7 shadow-none placeholder:text-lg placeholder:text-muted-foreground/65 focus-visible:ring-0 focus-visible:ring-offset-0 sm:p-8 sm:text-lg dark:bg-transparent"
        placeholder={
          draft
            ? t("app.dashboard.generate.generatedPlaceholder")
            : t("app.dashboard.generate.ideaPlaceholder")
        }
      />
      <Separator />
      <div className={`flex-between p-4 max-sm:flex-col max-sm:gap-3`}>
        {draft ? (
          <div className="flex items-center gap-3">
            <span className="rounded-full border border-border px-2.5 py-1 text-xs font-medium capitalize">
              {dict.common.contentTypes[draft.contentType]}
            </span>
            {isDirty && (
              <span className="text-xs text-muted-foreground">
                {t("app.dashboard.generate.unsavedChanges")}
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
                {t("app.dashboard.generate.newIdea")}
              </Button>
              <Button
                type="button"
                size={"lg"}
                onClick={handleSave}
                disabled={!canSave}
                className={`px-3.5 font-semibold`}
              >
                {isSaving
                  ? t("app.dashboard.generate.saving")
                  : t("app.dashboard.generate.saveChanges")}
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
                {isGenerating
                  ? t("app.dashboard.generate.generating")
                  : t("app.dashboard.generate.generate")}
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
