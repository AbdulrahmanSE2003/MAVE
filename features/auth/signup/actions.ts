"use server"

import { auth } from "@/lib/auth/server"
import { redirect } from "next/navigation"
import { getI18n } from "@/lib/i18n/server"

interface SignUpState {
  error?: string
}

export async function signUpWithEmail(data: {
  name: string
  email: string
  password: string
}): Promise<SignUpState> {
  const { error } = await auth.signUp.email({
    name: data.name,
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
