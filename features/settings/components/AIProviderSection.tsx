import { HugeiconsIcon } from "@hugeicons/react"
import { ShieldCheck, WandSparkles } from "@hugeicons/core-free-icons"
import {
  Field,
  inputClass,
  SectionHeading,
  selectClass,
} from "./SettingsPrimitives"
import { getI18n } from "@/lib/i18n/server"

const AIProviderSection = async () => {
  const { t } = await getI18n()

  return (
    <section id="ai" className="scroll-mt-8 space-y-5">
      <SectionHeading
        title={t("settings.ai.title")}
        description={t("settings.ai.description")}
      />

      <div className="rounded-xl border p-5 sm:p-6">
        <div className="flex items-start gap-3">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted">
            <HugeiconsIcon icon={WandSparkles} />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-sm font-medium">OpenAI</h3>
              <span className="rounded-md bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                {t("settings.ai.plannedBadge")}
              </span>
            </div>

            <p className="mt-1 text-sm leading-5 text-muted-foreground">
              {t("settings.ai.openaiDescription")}
            </p>
          </div>
        </div>

        <div className="my-5 border-t" />

        <div className="space-y-5">
          <Field
            label={t("settings.ai.provider.label")}
            hint={t("settings.ai.provider.hint")}
          >
            <select className={selectClass} defaultValue="openai" disabled>
              <option value="openai">OpenAI</option>
            </select>
          </Field>

          <Field
            label={t("settings.ai.apiKey.label")}
            hint={t("settings.ai.apiKey.hint")}
          >
            <input
              className={inputClass}
              type="password"
              placeholder={t("settings.ai.apiKey.placeholder")}
              disabled
            />
          </Field>

          <div className="flex items-start gap-2 rounded-lg bg-muted/50 p-3">
            <HugeiconsIcon
              icon={ShieldCheck}
              className="mt-0.5 size-4 shrink-0 text-muted-foreground"
            />

            <p className="text-xs leading-5 text-muted-foreground">
              {t("settings.ai.securityNote")}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AIProviderSection
