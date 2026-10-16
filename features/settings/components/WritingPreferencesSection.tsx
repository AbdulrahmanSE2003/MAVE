import Link from "next/link"
import { ArrowUpRight, PenLine } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { Field, selectClass, SectionHeading } from "./SettingsPrimitives"
import { getI18n } from "@/lib/i18n/server"

export default async function WritingPreferencesSection() {
  const { t } = await getI18n()

  return (
    <section id="writing" className="scroll-mt-8 space-y-5">
      <SectionHeading
        title={t("settings.writing.title")}
        description={t("settings.writing.description")}
      />

      <div className="rounded-xl border p-5 sm:p-6">
        <div className="space-y-5">
          <Field
            label={t("settings.writing.language.label")}
            htmlFor="writing-language"
            hint={t("settings.writing.language.hint")}
          >
            <select
              id="writing-language"
              className={selectClass}
              defaultValue="en"
            >
              <option value="en">
                {t("settings.writing.language.options.en")}
              </option>
              <option value="ar">
                {t("settings.writing.language.options.ar")}
              </option>
              <option value="es">
                {t("settings.writing.language.options.es")}
              </option>
            </select>
          </Field>

          <Field
            label={t("settings.writing.platform.label")}
            htmlFor="writing-platform"
            hint={t("settings.writing.platform.hint")}
          >
            <select
              id="writing-platform"
              className={selectClass}
              defaultValue="linkedin"
            >
              <option value="linkedin">LinkedIn</option>
              <option value="instagram">Instagram</option>
            </select>
          </Field>
        </div>

        <div className="my-5 border-t" />

        <Link
          href="/app/write"
          className="group flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-muted/60"
        >
          <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted">
            <HugeiconsIcon icon={PenLine} />
          </div>

          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium">
              {t("settings.writing.styleReferences.title")}
            </p>
            <p className="mt-1 text-xs leading-5 text-muted-foreground">
              {t("settings.writing.styleReferences.description")}
            </p>
          </div>

          <HugeiconsIcon
            icon={ArrowUpRight}
            className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>
      </div>
    </section>
  )
}
