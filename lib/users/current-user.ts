import { auth } from "@/lib/auth/server"
import { getOrCreateUser } from "./service"

export async function getCurrentUser() {
  const { data } = await auth.getSession()

  if (!data?.user) {
    return null
  }

  return getOrCreateUser(data.user.id)
}

/**
 * The signed-in identity as Neon Auth stores it (name, image, email, ...).
 *
 * This is a different object from `getCurrentUser()`, which returns the MAVE
 * `User` row from Postgres and has no display fields. Use this one only for
 * rendering the signed-in person; use `getCurrentUser()` for identity,
 * authorization and ownership checks.
 */
export async function getCurrentSessionUser() {
  const { data } = await auth.getSession()

  return data?.user ?? null
}
