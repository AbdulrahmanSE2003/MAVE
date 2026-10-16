import { Badge } from "@/components/ui/badge"
import { getI18n } from "@/lib/i18n/server"
import { getGreetingMessage } from "../utils"

const AppHeader = async ({ name = "" }: { name: string }) => {
  const { dict } = await getI18n()

  return (
    <header className={`flex-between w-full`}>
      <span className={`text-sm`}>
        {getGreetingMessage(dict.app.greetings)},{"  "}
        <span className={`font-semibold text-sidebar-primary`}>{name}</span>
      </span>
      <Badge className={`text-xs uppercase max-sm:hidden`}>
        {dict.app.dashboard.badge}
      </Badge>
    </header>
  )
}

export default AppHeader
