"use server"

import { auth } from "@/lib/auth/server"
import { redirect } from "next/navigation"

export async function signInWithEmail(data: {
  email: string
  password: string
}) {
  const { error } = await auth.signIn.email({
    email: data.email,
    password: data.password,
  })

  if (error) {
    return {
      error: error.message || "Failed to create your account.",
    }
  }

  redirect("/app")
}
