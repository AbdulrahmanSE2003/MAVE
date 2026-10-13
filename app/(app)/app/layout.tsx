import Error from "@/app/error"
import { getCurrentSessionUser } from "@/lib/users/current-user"
import { ReactNode } from "react"
import Sidebar from "@/components/layout/Sidebar"
import { requireOnboardingComplete } from "@/lib/users/routing"
import { SidebarProvider } from "@/components/SidebarProvider"
import { CommandMenu } from "@/components/command-menu"

export default async function Layout({ children }: { children: ReactNode }) {
  await requireOnboardingComplete()

  const user = await getCurrentSessionUser()
  if (!user) return <Error />

  return (
    <SidebarProvider>
      <div className="flex h-screen bg-muted">
        <Sidebar user={user} />

        <div className="my-2 me-2 mb-0 h-auto w-full scrollbar-thin overflow-auto rounded-xl rounded-b-none border border-border bg-background">
          <CommandMenu />
          {children}
        </div>
      </div>
    </SidebarProvider>
  )
}
