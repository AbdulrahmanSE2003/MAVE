import { Label } from "@/components/ui/label"
import { generatePostRowIcon } from "@/features/app/utils"
import { ContentType } from "@/lib/generated/prisma/enums"
import { useI18n, useT } from "@/lib/i18n"

type PlatformSelectorProps = {
  contentType: ContentType
  setContentType: (c: ContentType) => void
}

const PlatformSelector = ({
  contentType,
  setContentType,
}: PlatformSelectorProps) => {
  const t = useT()
  const { dict } = useI18n()

  return (
    <div className="mt-7 space-y-3">
      <Label className="text-sm font-semibold">
        {t("write.platform.label")}
      </Label>

      <div className="grid gap-3 sm:grid-cols-3">
        {Object.values(ContentType).map((c, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setContentType(c)}
            aria-pressed={contentType === c}
            className={`flex items-start gap-3 rounded-xl border p-4 text-left transition-colors ${
              contentType === c
                ? "border-primary bg-primary/5 ring-1 ring-primary/20"
                : "border-border hover:bg-muted/50"
            }`}
          >
            {generatePostRowIcon(c)}

            <span className="space-y-1">
              <span className="block text-sm font-semibold capitalize">
                {dict.common.contentTypes[c]}
              </span>
              <span className="block text-xs text-muted-foreground">
                {t("write.platform.description")}
              </span>
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default PlatformSelector
