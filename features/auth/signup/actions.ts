"use server"

import { auth } from "@/lib/auth/server"
import { redirect } from "next/navigation"

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
    return {
      error: error.message || "Failed to create your account.",
    }
  }

  redirect("/app")
}
