import { requireOnboardingComplete } from "@/lib/users/routing"
import { ReactNode } from "react"

export default async function Layout({ children }: { children: ReactNode }) {
  await requireOnboardingComplete()
  return <div>{children}</div>
}
