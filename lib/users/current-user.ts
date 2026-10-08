import { auth } from "@/lib/auth/server"
import { getOrCreateUser } from "./service"

export async function getCurrentUser() {
  const { data } = await auth.getSession()

  if (!data?.user) {
    return null
  }

  return getOrCreateUser(data.user.id)
}
