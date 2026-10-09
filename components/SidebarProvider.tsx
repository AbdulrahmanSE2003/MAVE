"use client"

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react"
import KeyboardShortcutsDialog from "./hotkeys/KeyboardShortcutsDialog"
import SidebarToggle from "./hotkeys/SidebarToggle"

type SidebarContextValue = {
  isOpen: boolean
  toggleSidebar: () => void
  openSidebar: () => void
  closeSidebar: () => void
  shortcutsOpen: boolean
  openShortcuts: () => void
  closeShortcuts: () => void
}

const SidebarContext = createContext<SidebarContextValue | null>(null)

export function SidebarProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [shortcutsOpen, setShortcutsOpen] = useState(false)

  const toggleSidebar = useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])

  const openSidebar = useCallback(() => setIsOpen(true), [])
  const closeSidebar = useCallback(() => setIsOpen(false), [])

  const openShortcuts = useCallback(() => setShortcutsOpen(true), [])
  const closeShortcuts = useCallback(() => setShortcutsOpen(false), [])

  const value = useMemo(
    () => ({
      isOpen,
      toggleSidebar,
      openSidebar,
      closeSidebar,
      shortcutsOpen,
      openShortcuts,
      closeShortcuts,
    }),
    [
      isOpen,
      toggleSidebar,
      openSidebar,
      closeSidebar,
      shortcutsOpen,
      openShortcuts,
      closeShortcuts,
    ]
  )

  return (
    <SidebarContext.Provider value={value}>
      <KeyboardShortcutsDialog />
      <SidebarToggle />
      {children}
    </SidebarContext.Provider>
  )
}

export function useSidebar() {
  const context = useContext(SidebarContext)

  if (!context) {
    throw new Error("useSidebar must be used within SidebarProvider")
  }

  return context
}
