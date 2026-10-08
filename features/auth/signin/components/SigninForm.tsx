"use client"

import { useState } from "react"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowRight02Icon, GoogleIcon } from "@hugeicons/core-free-icons"

import { Button } from "@/components/ui/button"
import { Marker, MarkerContent } from "@/components/ui/marker"
import { FieldSet } from "@/components/ui/field"

import GroupField from "./FieldsGroup"

import { signInWithEmail } from "../actions"
import { signinSchema, type SigninFormValues } from "../schema"

export default function SigninForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const { handleSubmit, control } = useForm<SigninFormValues>({
    resolver: zodResolver(signinSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  async function onSubmit(data: SigninFormValues) {
    setIsSubmitting(true)

    try {
      const result = await signInWithEmail(data)

      if (result?.error) {
        toast.error(result.error)
      }
    } catch {
      toast.error("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex w-full flex-col justify-center">
      <div className="mb-8 flex flex-col gap-3">
        <span className={`text-xs font-medium uppercase`}>welcome back</span>
        <h5 className="text-3xl">Sign in to MAVE.</h5>

        <p className="paragraph text-sm text-muted-foreground">
          Pick up where you left off.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <FieldSet>
          <GroupField isSubmitting={isSubmitting} control={control} />
        </FieldSet>

        {/*<div className="flex justify-end">
          <Link
            href="/forgot-password"
            className="text-xs font-medium text-primary hover:underline"
          >
            Forgot password?
          </Link>
        </div>*/}

        <div className="flex flex-col items-center gap-3">
          <Button
            size="lg"
            className="w-full py-4"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Signing in..." : "Sign in"}

            <HugeiconsIcon icon={ArrowRight02Icon} />
          </Button>

          <Marker variant="separator">
            <MarkerContent>OR</MarkerContent>
          </Marker>

          <Button
            variant="outline"
            size="lg"
            className="flex w-full items-center justify-center gap-3"
            type="button"
            disabled={isSubmitting}
          >
            <HugeiconsIcon size={20} icon={GoogleIcon} />
            Continue with Google
          </Button>
        </div>
      </form>

      <p className="mt-2 text-center text-sm text-muted-foreground">
        Don&apos;t have an account?
        <Button variant="link" asChild className="px-1">
          <Link href="/signup">Create account</Link>
        </Button>
      </p>
    </div>
  )
}
