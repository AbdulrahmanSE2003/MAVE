import { Badge } from "@/components/ui/badge"
import { getGreetingMessage } from "../utils"

const AppHeader = ({ name = "" }: { name: string }) => {
  return (
    <div className={`flex-between w-full`}>
      <span className={`text-xs`}>
        {getGreetingMessage()},{"  "}
        <span className={`text-sm font-semibold text-sidebar-primary`}>
          {name}
        </span>
      </span>
      <Badge className={`text-xs uppercase`}>Your voice is ready!</Badge>
    </div>
  )
}

export default AppHeader
