import { Editor } from "@tiptap/react"
import { toast } from "sonner"
import type { Translator } from "@/lib/i18n"
import { copyFormattedContent, copyPlainTextContent } from "../app/utils"
import { EditorState } from "./types"

type MenuAction = {
  label: string
  shortcut?: string
  onSelect: () => void
  isActive?: () => boolean
  isDisabled?: () => boolean
}

type MenuEntry = { type: "item"; action: MenuAction } | { type: "separator" }

export async function copyPostAsPlainText(editor: Editor, t: Translator) {
  try {
    await copyPlainTextContent(editor.getText({ blockSeparator: "\n\n" }))
    toast.success(t("write.editor.copySuccess"))
  } catch {
    toast.error(t("write.editor.copyFailed"))
  }
}

export async function copyPostAsFormatted(editor: Editor, t: Translator) {
  try {
    await copyFormattedContent(
      editor.getHTML(),
      editor.getText({ blockSeparator: "\n\n" })
    )
    toast.success(t("write.editor.copyFormattedSuccess"))
  } catch {
    toast.error(t("write.editor.copyFailed"))
  }
}

export function buildMenus(
  editor: Editor,
  editorState: EditorState,
  t: Translator
): Record<string, MenuEntry[]> {
  return {
    [t("write.editor.menus.edit")]: [
      {
        type: "item",
        action: {
          label: t("write.editor.undo"),
          shortcut: "Ctrl+Z",
          onSelect: () => editor.chain().focus().undo().run(),
          isDisabled: () => !editorState?.canUndo,
        },
      },
      {
        type: "item",
        action: {
          label: t("write.editor.redo"),
          shortcut: "Ctrl+Y",
          onSelect: () => editor.chain().focus().redo().run(),
          isDisabled: () => !editorState?.canRedo,
        },
      },
      { type: "separator" },
      {
        type: "item",
        action: {
          label: t("write.editor.bold"),
          shortcut: "Ctrl+B",
          onSelect: () => editor.chain().focus().toggleBold().run(),
          isActive: () => editor.isActive("bold"),
        },
      },
      {
        type: "item",
        action: {
          label: t("write.editor.italic"),
          shortcut: "Ctrl+I",
          onSelect: () => editor.chain().focus().toggleItalic().run(),
          isActive: () => editor.isActive("italic"),
        },
      },
      {
        type: "item",
        action: {
          label: t("write.editor.strikethrough"),
          shortcut: "Ctrl+Shift+X",
          onSelect: () => editor.chain().focus().toggleStrike().run(),
          isActive: () => editor.isActive("strike"),
        },
      },
    ],

    [t("write.editor.menus.format")]: [
      {
        type: "item",
        action: {
          label: t("write.editor.paragraph"),
          shortcut: "Ctrl+Alt+0",
          onSelect: () => editor.chain().focus().setParagraph().run(),
          isActive: () => editor.isActive("paragraph"),
        },
      },
      { type: "separator" },
      ...[1, 2, 3].map((level): MenuEntry => ({
        type: "item",
        action: {
          label: t("write.editor.heading", { level }),
          shortcut: `Ctrl+Alt+${level}`,
          onSelect: () =>
            editor
              .chain()
              .focus()
              .toggleHeading({ level: level as 1 | 2 | 3 })
              .run(),
          isActive: () => editor.isActive("heading", { level }),
        },
      })),
      { type: "separator" },
      {
        type: "item",
        action: {
          label: t("write.editor.inlineCode"),
          onSelect: () => editor.chain().focus().toggleCode().run(),
          isActive: () => editor.isActive("code"),
        },
      },
    ],

    [t("write.editor.menus.lists")]: [
      {
        type: "item",
        action: {
          label: t("write.editor.bulletList"),
          shortcut: "Ctrl+Shift+8",
          onSelect: () => editor.chain().focus().toggleBulletList().run(),
          isActive: () => editor.isActive("bulletList"),
        },
      },
      {
        type: "item",
        action: {
          label: t("write.editor.orderedList"),
          shortcut: "Ctrl+Shift+7",
          onSelect: () => editor.chain().focus().toggleOrderedList().run(),
          isActive: () => editor.isActive("orderedList"),
        },
      },
      { type: "separator" },
      {
        type: "item",
        action: {
          label: t("write.editor.blockquote"),
          onSelect: () => editor.chain().focus().toggleBlockquote().run(),
          isActive: () => editor.isActive("blockquote"),
        },
      },
    ],

    [t("write.editor.menus.insert")]: [
      {
        type: "item",
        action: {
          label: t("write.editor.horizontalDivider"),
          onSelect: () => editor.chain().focus().setHorizontalRule().run(),
        },
      },
      {
        type: "item",
        action: {
          label: t("write.editor.lineBreak"),
          onSelect: () => editor.chain().focus().setHardBreak().run(),
        },
      },
    ],
    [t("write.editor.menus.actions")]: [
      {
        type: "item",
        action: {
          label: t("write.editor.copyPlainText"),
          shortcut: "Ctrl+Shift+Y",
          onSelect: () => copyPostAsPlainText(editor, t),
        },
      },
      {
        type: "item",
        action: {
          label: t("write.editor.copyHtml"),
          shortcut: "Ctrl+Alt+C",
          onSelect: () => copyPostAsFormatted(editor, t),
        },
      },
    ],
  }
}
