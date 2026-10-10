import { cn } from "cn"

const Logo = ({
  showSlogan = false,
  className,
}: {
  showSlogan?: boolean
  className?: string
}) => {
  return (
    <div className={cn(`flex flex-col gap-2`, className)}>
      <span className="font-black">
        MAVE <span className="text-2xl text-primary">.</span>
      </span>
      {showSlogan && (
        <p className={`text-sm text-muted-foreground`}>
          Your ideas, your voice.
        </p>
      )}
    </div>
  )
}

export default Logo
