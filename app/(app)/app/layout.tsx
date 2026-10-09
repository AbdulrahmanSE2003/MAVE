import { ReactNode } from "react"
import Sidebar from "@/components/layout/Sidebar"
import { requireOnboardingComplete } from "@/lib/users/routing"
import { SidebarProvider } from "@/components/SidebarProvider"

export default async function Layout({ children }: { children: ReactNode }) {
  await requireOnboardingComplete()

  return (
    <SidebarProvider>
      <div className="flex h-screen bg-muted">
        <Sidebar />

        <div className="my-2 me-2 w-full rounded-xl border border-border bg-background p-8">
          {children}
        </div>
      </div>
    </SidebarProvider>
  )
}
