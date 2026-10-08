import { redirect } from "next/navigation"
import { getCurrentUser } from "@/lib/users/current-user"
import { getOnboardingState } from "@/lib/users/onboarding"

export async function requireOnboardingComplete() {
  const user = await getCurrentUser()

  if (!user) {
    redirect("/signin")
  }

  const state = await getOnboardingState(user.id)

  if (!state.isCompleted) {
    redirect("/onboarding")
  }

  return user
}

export async function requireOnboarding() {
  const user = await getCurrentUser()

  if (!user) {
    redirect("/signin")
  }

  const state = await getOnboardingState(user.id)

  if (state.isCompleted) {
    redirect("/app")
  }

  return {
    user,
    state,
  }
}
