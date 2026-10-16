"use client"

import { useRef, useState } from "react"
import { Editor } from "@tiptap/core"
import { toast } from "sonner"
import RichTextEditor from "./RichTextEditor"
import { updatePost } from "@/features/generation/actions"
import { Button } from "@/components/ui/button"
import { HugeiconsIcon } from "@hugeicons/react"
import { Sparkles } from "@hugeicons/core-free-icons"
import { postContentToHtml } from "@/features/app/utils"
import { Post } from "@/lib/generated/prisma/client"
import { useI18n, useT } from "@/lib/i18n"

type WriteWorkspaceProps = {
  initContent: string
  post: Post
}

const WriteWorkspace = ({ post, initContent }: WriteWorkspaceProps) => {
  const t = useT()
  const { dict, tm } = useI18n()
  const [isSaving, setIsSaving] = useState(false)
  const [lastSavedAt, setLastSavedAt] = useState<Date | null>(post.updatedAt)

  // Only this flag needs to trigger a re-render — the raw HTML itself
  // (draftContentRef) still doesn't need to re-render anything on every
  // keystroke. isDirty just answers "is there anything to Save/Cancel?"
  const [isDirty, setIsDirty] = useState(false)

  const draftContentRef = useRef(initContent)
  const savedContentRef = useRef(initContent)
  const editorRef = useRef<Editor | null>(null)

  const handleSave = async () => {
    if (!isDirty || isSaving) return

    setIsSaving(true)
    try {
      const result = await updatePost({
        postId: post.id,
        content: draftContentRef.current,
      })

      if (!result.success) {
        toast.error(tm(result.error))
        return
      }

      savedContentRef.current = draftContentRef.current
      setLastSavedAt(new Date())
      setIsDirty(false)
      toast.success(t("write.toasts.changesSaved"))
    } catch {
      toast.error(t("write.toasts.saveFailed"))
    } finally {
      setIsSaving(false)
    }
  }

  const handleCancel = () => {
    const savedContent = savedContentRef.current
    draftContentRef.current = savedContent
    editorRef.current?.commands.setContent(savedContent)
    setIsDirty(false)
  }

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <span className="text-xs font-semibold uppercase">
          {dict.common.contentTypes[post.contentType]}
        </span>
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={handleCancel}
            disabled={!isDirty || isSaving}
          >
            {t("common.actions.cancel")}
          </Button>
          <Button onClick={handleSave} disabled={!isDirty || isSaving}>
            {isSaving
              ? t("common.status.saving")
              : t("write.workspace.saveChanges")}
          </Button>
        </div>
      </div>

      <RichTextEditor
        initContent={postContentToHtml(post.content)}
        onChange={(html) => {
          draftContentRef.current = html
          // Compare against the last *saved* version, not initContent —
          // typing, then typing back to the saved state, should re-disable
          // the buttons rather than leaving them stuck "dirty".
          setIsDirty(html !== savedContentRef.current)
        }}
        onSave={handleSave}
        onEditorReady={(editor) => {
          editorRef.current = editor
        }}
      />

      {/* Footer meta */}
      <div className="flex w-full flex-row-reverse items-center justify-between gap-6 text-xs">
        <Button
          size="lg"
          className="text-md mt-2 w-full flex-1 py-6 font-medium"
        >
          {t("write.workspace.generateImage")}
          <HugeiconsIcon icon={Sparkles} />
        </Button>
        <span className="flex flex-col gap-1 text-xs opacity-50">
          {lastSavedAt
            ? t("write.workspace.lastSaved", {
                time: lastSavedAt.toLocaleTimeString(),
              })
            : t("write.workspace.notSavedYet")}
          <span>{t("write.workspace.saveShortcut")}</span>
        </span>
      </div>
    </div>
  )
}

export default WriteWorkspace
