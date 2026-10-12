"use client"

import { Editor } from "@tiptap/react"
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { buildMenus } from "../utils"
type EditorBarProps = {
  editor: Editor | null
}

const EditorBar = ({ editor }: EditorBarProps) => {
  if (!editor) return null

  const menus = buildMenus(editor)

  return (
    <div className={`flex-between items-center`}>
      <Menubar className="h-auto w-full justify-start rounded-none border-0 border-b bg-muted/30 p-1">
        {Object.entries(menus).map(([menuLabel, entries]) => (
          <MenubarMenu key={menuLabel}>
            <MenubarTrigger>{menuLabel}</MenubarTrigger>
            <MenubarContent>
              {entries.map((entry, i) =>
                entry.type === "separator" ? (
                  <MenubarSeparator key={`sep-${i}`} />
                ) : (
                  <MenubarItem
                    key={entry.action.label}
                    disabled={entry.action.isDisabled?.()}
                    data-active={entry.action.isActive?.() || undefined}
                    onSelect={entry.action.onSelect}
                  >
                    {entry.action.label}
                    {entry.action.shortcut && (
                      <MenubarShortcut>{entry.action.shortcut}</MenubarShortcut>
                    )}
                  </MenubarItem>
                )
              )}
            </MenubarContent>
          </MenubarMenu>
        ))}
      </Menubar>
    </div>
  )
}

export default EditorBar
