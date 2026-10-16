import { Label } from "@/components/ui/label"
import { generatePostRowIcon } from "@/features/app/utils"
import { ContentType } from "@/lib/generated/prisma/enums"
import { formatTypeName } from "@/lib/utils"

type PlatformSelectorProps = {
  contentType: ContentType
  setContentType: (c: ContentType) => void
}

const PlatformSelector = ({
  contentType,
  setContentType,
}: PlatformSelectorProps) => {
  return (
    <div className="mt-7 space-y-3">
      <Label className="text-sm font-semibold">Create for</Label>

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
                {formatTypeName(c)}
              </span>
              <span className="block text-xs text-muted-foreground">
                Social content
              </span>
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default PlatformSelector
