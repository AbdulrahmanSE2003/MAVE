"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { HugeiconsIcon } from "@hugeicons/react"
import { navigationItems } from "@/features/app/constants"

export function CommandMenu() {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      const isShortcut =
        (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k"

      if (!isShortcut) return

      event.preventDefault()
      setOpen((current) => !current)
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  function navigateTo(href: string) {
    setOpen(false)
    router.push(href)
  }

  return (
    <CommandDialog
      open={open}
      onOpenChange={setOpen}
      title="Command Menu"
      className={`rounded-md`}
      description="Search and navigate around MAVE."
    >
      <Command>
        <CommandInput placeholder="Where do you want to go?" />

        <CommandList>
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>

            <CommandGroup heading="Navigation">
              {navigationItems.map((item) => {
                return (
                  <CommandItem
                    key={item.href}
                    value={`${item.label} ${item.keywords}`}
                    onSelect={() => navigateTo(item.href)}
                  >
                    <HugeiconsIcon icon={item.icon} className="mr-2 size-4" />
                    <span>{item.label}</span>
                  </CommandItem>
                )
              })}
            </CommandGroup>
          </CommandList>
        </CommandList>
      </Command>
    </CommandDialog>
  )
}
