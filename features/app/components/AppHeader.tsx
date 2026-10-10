import { Badge } from "@/components/ui/badge"
import { getGreetingMessage } from "../utils"

const AppHeader = ({ name = "" }: { name: string }) => {
  return (
    <div className={`flex-between w-full`}>
      <span className={`text-xs font-bold`}>
        {getGreetingMessage()}, {name}
      </span>
      <Badge className={`text-xs uppercase`}>Your voice is ready!</Badge>
    </div>
  )
}

export default AppHeader
