"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowRight02Icon, Loading03Icon } from "@hugeicons/core-free-icons"

import { Button } from "@/components/ui/button"
import GroupField from "./FieldsGroup"
import { Marker, MarkerContent } from "@/components/ui/marker"

import { signUpWithEmail } from "../actions"
import { signupSchema, type SignupFormValues } from "../schema"
import { FieldSet } from "@/components/ui/field"
import GoogleButton from "../../GoogleButton"
import { useRouter } from "next/navigation"
import { authClient } from "@/lib/auth/client"

export default function SignupForm() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    authClient.getSession().then(({ data }) => {
      if (data?.session) {
        router.replace("/app")
      }
    })
  }, [router])
  const { handleSubmit, control } = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
  })

  async function onSubmit(data: SignupFormValues) {
    setIsSubmitting(true)

    try {
      const result = await signUpWithEmail({
        name: data.name,
        email: data.email,
        password: data.password,
      })

      if (result.error) {
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
      <div className={`mb-8 flex flex-col gap-3`}>
        <span className={`text-xs font-medium uppercase`}>
          CREATE YOUR ACCOUNT
        </span>
        <h5 className={`text-3xl`}>Start creating.</h5>
        <p className={`pargraph text-sm text-muted-foreground`}>
          Your first idea is closer than you think.
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <FieldSet>
          <GroupField isSubmitting={isSubmitting} control={control} />
        </FieldSet>

        <div className="flex flex-col items-center gap-3">
          <Button
            size="lg"
            className="w-full py-4"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Creating account..." : "Create account"}
            {isSubmitting ? (
              <HugeiconsIcon
                icon={Loading03Icon}
                className="size-5 animate-spin"
              />
            ) : (
              <HugeiconsIcon icon={ArrowRight02Icon} />
            )}
          </Button>

          <Marker variant="separator">
            <MarkerContent>OR</MarkerContent>
          </Marker>

          <GoogleButton />
        </div>
      </form>

      <p className="mt-2 text-center text-sm text-muted-foreground">
        Already have an account?
        <Button variant={"link"} asChild className={`px-1`}>
          <Link href="/signin">Sign In</Link>
        </Button>
      </p>
    </div>
  )
}
