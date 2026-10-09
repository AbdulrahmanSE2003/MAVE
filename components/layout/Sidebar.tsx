"use client"

import { cn } from "cn"
import { useSidebar } from "../SidebarProvider"
import SidebarLinks from "./sidebar/SidebarLinks"
import SidebarHeader from "./sidebar/SidebarHeader"
import SidebarFooter from "./sidebar/SidebarFooter"

const Sidebar = () => {
  const { toggleSidebar, isOpen, openShortcuts } = useSidebar()

  return (
    <aside
      className={cn(
        "flex h-screen flex-col justify-between py-4 transition-all duration-300 ease-in-out",
        isOpen ? "w-64 p-4" : "w-14 px-2"
      )}
    >
      {/* Header */}
      <SidebarHeader isOpen={isOpen} toggleSidebar={toggleSidebar} />

      {/* Sidebar Links */}
      <SidebarLinks isOpen={isOpen} />

      {/* Sidebar Footer */}

      <SidebarFooter isOpen={isOpen} openShortcuts={openShortcuts} />
    </aside>
  )
}

export default Sidebar
