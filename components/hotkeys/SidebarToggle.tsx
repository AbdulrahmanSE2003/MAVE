"use client"

import { useEffect } from "react"
import { useSidebar } from "@/components/SidebarProvider"

function isBackslashKey(event: KeyboardEvent) {
  return (
    event.code === "Backslash" ||
    event.code === "IntlBackslash" ||
    event.key === "\\"
  )
}

export default function SidebarToggle() {
  const { toggleSidebar } = useSidebar()

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.defaultPrevented || event.repeat) return
      if (!(event.ctrlKey || event.metaKey)) return
      if (event.altKey || event.shiftKey) return
      if (!isBackslashKey(event)) return

      event.preventDefault()
      event.stopPropagation()
      toggleSidebar()
    }

    window.addEventListener("keydown", handleKeyDown, true)

    return () => {
      window.removeEventListener("keydown", handleKeyDown, true)
    }
  }, [toggleSidebar])

  return null
}
