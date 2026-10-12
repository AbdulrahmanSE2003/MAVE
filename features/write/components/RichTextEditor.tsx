"use client"

import { useEffect, useMemo, useRef } from "react"
import { Extension } from "@tiptap/core"
import StarterKit from "@tiptap/starter-kit"
import { useEditor, EditorContent } from "@tiptap/react"
import EditorBar from "./EditorBar"
import { copyPostAsFormatted, copyPostAsPlainText } from "../utils"
type RichTextEditorProps = {
  initContent: string
  onChange?: (html: string) => void
  onSave?: () => void | Promise<void>
}

export default function RichTextEditor({
  initContent,
  onChange,
  onSave,
}: RichTextEditorProps) {
  const onSaveRef = useRef(onSave)

  useEffect(() => {
    onSaveRef.current = onSave
  }, [onSave])

  const extensions = useMemo(
    () => [
      StarterKit,
      Extension.create({
        name: "maveKeyboardShortcuts",

        addKeyboardShortcuts() {
          return {
            "Mod-s": () => {
              const save = onSaveRef.current

              if (!save) return false

              void save()
              return true
            },

            "Mod-Alt-1": () =>
              this.editor.chain().focus().toggleHeading({ level: 1 }).run(),

            "Mod-Alt-2": () =>
              this.editor.chain().focus().toggleHeading({ level: 2 }).run(),

            "Mod-Alt-3": () =>
              this.editor.chain().focus().toggleHeading({ level: 3 }).run(),

            "Mod-Alt-0": () => this.editor.chain().focus().setParagraph().run(),

            "Mod-Shift-8": () =>
              this.editor.chain().focus().toggleBulletList().run(),

            "Mod-Shift-7": () =>
              this.editor.chain().focus().toggleOrderedList().run(),

            "Mod-c": () => {
              if (!this.editor.state.selection.empty) return false

              void copyPostAsPlainText(this.editor)
              return true
            },

            "Mod-Shift-y": () => {
              void copyPostAsPlainText(this.editor)
              return true
            },

            "Mod-Alt-c": () => {
              void copyPostAsFormatted(this.editor)
              return true
            },
          }
        },
      }),
    ],
    []
  )

  const editor = useEditor({
    extensions,
    content: initContent,
    immediatelyRender: false,

    onUpdate: ({ editor }) => {
      onChange?.(editor.getHTML())
    },
  })

  if (!editor) return null

  return (
    <div className="mb-3 h-[90%] overflow-hidden rounded-lg border border-border bg-background">
      <EditorBar editor={editor} />

      <EditorContent
        editor={editor}
        className="min-h-64 cursor-text [&_.tiptap]:min-h-64 [&_.tiptap]:px-4 [&_.tiptap]:py-4 [&_.tiptap]:text-sm [&_.tiptap]:leading-7 [&_.tiptap]:outline-none [&_.tiptap_blockquote]:my-3 [&_.tiptap_blockquote]:border-l-2 [&_.tiptap_blockquote]:border-primary [&_.tiptap_blockquote]:pl-4 [&_.tiptap_blockquote]:text-muted-foreground [&_.tiptap_code]:rounded [&_.tiptap_code]:bg-muted [&_.tiptap_code]:px-1 [&_.tiptap_code]:py-0.5 [&_.tiptap_h1]:mt-5 [&_.tiptap_h1]:mb-3 [&_.tiptap_h1]:text-2xl [&_.tiptap_h1]:font-bold [&_.tiptap_h2]:mt-4 [&_.tiptap_h2]:mb-2 [&_.tiptap_h2]:text-xl [&_.tiptap_h2]:font-semibold [&_.tiptap_h3]:mt-3 [&_.tiptap_h3]:mb-2 [&_.tiptap_h3]:text-lg [&_.tiptap_h3]:font-semibold [&_.tiptap_hr]:my-4 [&_.tiptap_hr]:border-border [&_.tiptap_ol]:my-3 [&_.tiptap_ol]:list-decimal [&_.tiptap_ol]:pl-6 [&_.tiptap_p]:my-2 [&_.tiptap_ul]:my-3 [&_.tiptap_ul]:list-disc [&_.tiptap_ul]:pl-6"
      />
    </div>
  )
}
