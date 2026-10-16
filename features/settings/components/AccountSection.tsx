import { getI18n } from "@/lib/i18n/server"
import { Field, inputClass, SectionHeading } from "./SettingsPrimitives"

export default async function AccountSection() {
  const { t } = await getI18n()

  return (
    <section id="account" className="scroll-mt-8 space-y-5">
      <SectionHeading
        title={t("settings.account.title")}
        description={t("settings.account.description")}
      />

      <div className="rounded-xl border p-5 sm:p-6">
        <div className="flex items-center gap-4">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-muted text-base font-semibold">
            M
          </div>

          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium">
              {t("settings.account.profileName")}
            </p>
            <p className="truncate text-sm text-muted-foreground">
              {t("settings.account.profileSubtitle")}
            </p>
          </div>

          <span className="rounded-md border px-2 py-1 text-xs text-muted-foreground">
            {t("settings.account.previewBadge")}
          </span>
        </div>

        <div className="my-5 border-t" />

        <div className="grid gap-5 sm:grid-cols-2">
          <Field
            label={t("settings.account.displayName.label")}
            htmlFor="display-name"
          >
            <input
              id="display-name"
              className={inputClass}
              defaultValue={t("settings.account.profileName")}
              placeholder={t("settings.account.displayName.placeholder")}
            />
          </Field>

          <Field
            label={t("settings.account.email.label")}
            htmlFor="account-email"
          >
            <input
              id="account-email"
              className={inputClass}
              type="email"
              placeholder={t("settings.account.email.placeholder")}
              disabled
            />
          </Field>
        </div>

        <p className="mt-4 text-xs leading-5 text-muted-foreground">
          {t("settings.account.note")}
        </p>
      </div>
    </section>
  )
}
