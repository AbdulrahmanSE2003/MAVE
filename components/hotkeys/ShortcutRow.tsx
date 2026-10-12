import { Kbd, KbdGroup } from "@/components/ui/kbd"

type ShortcutRowProps = {
  label: string
  keys: string[]
  description?: string
}

export default function ShortcutRow({
  label,
  keys,
  description,
}: ShortcutRowProps) {
  return (
    <div className="group flex items-center justify-between rounded-xl px-3.5 py-2.5 transition-all duration-200 hover:bg-muted/60 dark:hover:bg-muted/40">
      <div className="flex flex-col gap-0.5">
        <span className="text-sm font-medium text-foreground/80 transition-colors group-hover:text-foreground">
          {label}
        </span>
        {description && (
          <span className="text-xs text-muted-foreground">{description}</span>
        )}
      </div>

      <KbdGroup className="gap-1">
        {keys.map((key, index) => (
          <Kbd
            key={index}
            className="h-6 min-w-6 px-1.5 text-xs font-semibold shadow-xs transition-transform duration-150 group-hover:scale-105"
          >
            {key}
          </Kbd>
        ))}
      </KbdGroup>
    </div>
  )
}
