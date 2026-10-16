"use server"

import { auth } from "@/lib/auth/server"
import { redirect } from "next/navigation"
import { getI18n } from "@/lib/i18n/server"

export async function signInWithEmail(data: {
  email: string
  password: string
}) {
  const { error } = await auth.signIn.email({
    email: data.email,
    password: data.password,
  })

  if (error) {
    const { t, tm } = await getI18n()

    return {
      error: error.message
        ? tm(error.message)
        : t("auth.errors.failedToCreateAccount"),
    }
  }

  redirect("/app")
}
