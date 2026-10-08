import { ReactNode } from "react"

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={`flex min-h-screen flex-col bg-muted dark:bg-background`}>
      {children}
    </div>
  )
}

export default layout
