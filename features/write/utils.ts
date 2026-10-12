import { Editor } from "@tiptap/react"
import { toast } from "sonner"
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

export async function copyPostAsPlainText(editor: Editor) {
  try {
    await copyPlainTextContent(editor.getText({ blockSeparator: "\n\n" }))
    toast.success("Post copied successfully.")
  } catch {
    toast.error("Failed to copy post.")
  }
}

export async function copyPostAsFormatted(editor: Editor) {
  try {
    await copyFormattedContent(
      editor.getHTML(),
      editor.getText({ blockSeparator: "\n\n" })
    )
    toast.success("Formatted post copied successfully.")
  } catch {
    toast.error("Failed to copy post.")
  }
}

export function buildMenus(
  editor: Editor,
  editorState: EditorState
): Record<string, MenuEntry[]> {
  return {
    Edit: [
      {
        type: "item",
        action: {
          label: "Undo",
          shortcut: "Ctrl+Z",
          onSelect: () => editor.chain().focus().undo().run(),
          isDisabled: () => !editorState?.canUndo,
        },
      },
      {
        type: "item",
        action: {
          label: "Redo",
          shortcut: "Ctrl+Y",
          onSelect: () => editor.chain().focus().redo().run(),
          isDisabled: () => !editorState?.canRedo,
        },
      },
      { type: "separator" },
      {
        type: "item",
        action: {
          label: "Bold",
          shortcut: "Ctrl+B",
          onSelect: () => editor.chain().focus().toggleBold().run(),
          isActive: () => editor.isActive("bold"),
        },
      },
      {
        type: "item",
        action: {
          label: "Italic",
          shortcut: "Ctrl+I",
          onSelect: () => editor.chain().focus().toggleItalic().run(),
          isActive: () => editor.isActive("italic"),
        },
      },
      {
        type: "item",
        action: {
          label: "Strikethrough",
          shortcut: "Ctrl+Shift+X",
          onSelect: () => editor.chain().focus().toggleStrike().run(),
          isActive: () => editor.isActive("strike"),
        },
      },
    ],

    Format: [
      {
        type: "item",
        action: {
          label: "Paragraph",
          shortcut: "Ctrl+Alt+0",
          onSelect: () => editor.chain().focus().setParagraph().run(),
          isActive: () => editor.isActive("paragraph"),
        },
      },
      { type: "separator" },
      ...[1, 2, 3].map((level): MenuEntry => ({
        type: "item",
        action: {
          label: `Heading ${level}`,
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
          label: "Inline code",
          onSelect: () => editor.chain().focus().toggleCode().run(),
          isActive: () => editor.isActive("code"),
        },
      },
    ],

    Lists: [
      {
        type: "item",
        action: {
          label: "Bullet list",
          shortcut: "Ctrl+Shift+8",
          onSelect: () => editor.chain().focus().toggleBulletList().run(),
          isActive: () => editor.isActive("bulletList"),
        },
      },
      {
        type: "item",
        action: {
          label: "Numbered list",
          shortcut: "Ctrl+Shift+7",
          onSelect: () => editor.chain().focus().toggleOrderedList().run(),
          isActive: () => editor.isActive("orderedList"),
        },
      },
      { type: "separator" },
      {
        type: "item",
        action: {
          label: "Blockquote",
          onSelect: () => editor.chain().focus().toggleBlockquote().run(),
          isActive: () => editor.isActive("blockquote"),
        },
      },
    ],

    Insert: [
      {
        type: "item",
        action: {
          label: "Horizontal divider",
          onSelect: () => editor.chain().focus().setHorizontalRule().run(),
        },
      },
      {
        type: "item",
        action: {
          label: "Line break",
          onSelect: () => editor.chain().focus().setHardBreak().run(),
        },
      },
    ],
    Actions: [
      {
        type: "item",
        action: {
          label: "Copy as plain text",
          shortcut: "Ctrl+Shift+Y",
          onSelect: () => copyPostAsPlainText(editor),
        },
      },
      {
        type: "item",
        action: {
          label: "Copy as HTML",
          shortcut: "Ctrl+Alt+C",
          onSelect: () => copyPostAsFormatted(editor),
        },
      },
    ],
  }
}
