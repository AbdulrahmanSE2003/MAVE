import Error from "@/app/error"
import { getCurrentSessionUser } from "@/lib/users/current-user"
import { ReactNode } from "react"
import Sidebar from "@/components/layout/Sidebar"
import { requireOnboardingComplete } from "@/lib/users/routing"
import { SidebarProvider } from "@/components/SidebarProvider"

export default async function Layout({ children }: { children: ReactNode }) {
  await requireOnboardingComplete()

  const user = await getCurrentSessionUser()
  if (!user) return <Error />

  return (
    <SidebarProvider>
      <div className="flex h-screen overflow-hidden bg-muted">
        <Sidebar user={user} />

        <div className="my-2 me-2 w-full rounded-xl border border-border bg-background">
          {children}
        </div>
      </div>
    </SidebarProvider>
  )
}
