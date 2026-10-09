import { Kbd, KbdGroup } from "@/components/ui/kbd"

export default function ShortcutRow({
  label,
  keys,
}: {
  label: string
  keys: string[]
}) {
  return (
    <div className="group flex items-center justify-between rounded-lg px-3 py-2 transition-colors duration-300 hover:bg-muted dark:hover:bg-muted/50">
      <span className="text-sm font-medium text-foreground/75 duration-300 group-hover:text-foreground">
        {label}
      </span>
      <KbdGroup>
        {keys.map((key) => (
          <Kbd key={key} className="shadow-xs">
            {key}
          </Kbd>
        ))}
      </KbdGroup>
    </div>
  )
}
