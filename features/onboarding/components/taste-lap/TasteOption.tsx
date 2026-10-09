import { cn } from "cn"
import { ReactNode } from "react"

const TasteOption = <T extends string>({
  isActive,
  value,
  children,
  onChange,
}: {
  children: ReactNode
  isActive: boolean
  value: T
  onChange: (value: T) => void
}) => {
  return (
    <div
      aria-pressed={isActive}
      onClick={() => onChange(value)}
      className={cn(
        `cursor-pointer rounded-lg border bg-background p-4 text-left text-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-background/50`,
        isActive ? `border-b-4 border-b-primary ring` : ``
      )}
    >
      {children}
    </div>
  )
}

export default TasteOption
