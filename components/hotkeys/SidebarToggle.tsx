"use client"

import { useEffect } from "react"
import { useSidebar } from "@/components/SidebarProvider"

export default function SidebarToggle() {
  const { toggleSidebar } = useSidebar()

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.defaultPrevented || event.repeat) return
      if (!(event.ctrlKey || event.metaKey)) return
      if (event.altKey || event.shiftKey) return
      if (event.key.toLowerCase() !== "b") return

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
