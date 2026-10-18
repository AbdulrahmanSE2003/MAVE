"use client"

import { useState, type FormEvent } from "react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { authClient } from "@/lib/auth/client"
import { formatUserName } from "@/lib/utils"
import { useT } from "@/lib/i18n"
import { Field, inputClass } from "./SettingsPrimitives"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

type AccountFormProps = {
  name: string
  email: string
}

export default function AccountForm({ name, email }: AccountFormProps) {
  const t = useT()
  const router = useRouter()
  const [displayName, setDisplayName] = useState(name)
  const [isSaving, setIsSaving] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const nextName = displayName.trim()

    if (!nextName) {
      toast.error(t("settings.account.saveFailed"))
      return
    }

    if (nextName === name) return

    setIsSaving(true)

    try {
      const result = await authClient.updateUser({
        name: nextName,
      })

      if (result.error) {
        toast.error(t("settings.account.saveFailed"))
        return
      }

      toast.success(t("settings.account.saveSuccess"))
      router.refresh()
    } catch {
      toast.error(t("settings.account.saveFailed"))
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <>
      <div className="rounded-xl border p-5 sm:p-6">
        <div className="flex items-center gap-4">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-muted text-base font-semibold uppercase">
            {formatUserName(displayName)}
          </div>

          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium">{displayName}</p>
            <p className="truncate text-sm text-muted-foreground">
              {t("settings.account.profileSubtitle")}
            </p>
          </div>
        </div>

        <Separator className="my-5" />

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field
              label={t("settings.account.displayName.label")}
              htmlFor="display-name"
            >
              <Input
                id="display-name"
                className={inputClass}
                value={displayName}
                onChange={(event) => setDisplayName(event.target.value)}
                placeholder={t("settings.account.displayName.placeholder")}
                maxLength={100}
                autoComplete="name"
                required
              />
            </Field>

            <Field
              label={t("settings.account.email.label")}
              htmlFor="account-email"
            >
              <Input
                id="account-email"
                className={inputClass}
                type="email"
                value={email}
                placeholder={t("settings.account.email.placeholder")}
                disabled
                readOnly
              />
            </Field>
          </div>

          <p className="text-xs leading-5 text-muted-foreground">
            {t("settings.account.note")}
          </p>

          <div className="flex justify-end">
            <Button
              type="submit"
              disabled={isSaving || displayName.trim() === name}
            >
              {isSaving
                ? t("settings.account.saving")
                : t("settings.account.save")}
            </Button>
          </div>
        </form>
      </div>

      
    </>
  )
}
