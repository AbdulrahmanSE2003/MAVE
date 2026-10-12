import { Badge } from "@/components/ui/badge"
import { getGreetingMessage } from "../utils"

const AppHeader = ({ name = "" }: { name: string }) => {
  return (
    <header className={`flex-between w-full`}>
      <span className={`text-sm`}>
        {getGreetingMessage()},{"  "}
        <span className={`font-semibold text-sidebar-primary`}>{name}</span>
      </span>
      <Badge className={`text-xs uppercase max-sm:hidden`}>
        Your voice is ready!
      </Badge>
    </header>
  )
}

export default AppHeader
