import SettingsSidebar from "./SettingsSidebar"
import AccountSection from "./AccountSection"
import AIProviderSection from "./AIProviderSection"
import WritingPreferencesSection from "./WritingPreferencesSection"
import AppearanceSection from "./AppearanceSection"
import SettingsHelp from "./SettingsHelp"
import AccountDanger from "./AccountDanger"
import { Separator } from "@/components/ui/separator"
import { Suspense } from "react"
import { Skeleton } from "@/components/ui/skeleton"

const SettingsContent = () => {
  return (
    <div className="flex flex-col gap-1 lg:grid lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-10">
      <SettingsSidebar />

      <div className="min-w-0 space-y-8 lg:space-y-12 [&_section]:mb-6">
        <Suspense
          fallback={
            <Skeleton className={`h-64 rounded-xl border border-border`} />
          }
        >
          <AccountSection />
        </Suspense>
        <Separator className={`my-6`} />
        {/* STUB */}
        {/* <AIProviderSection /> */}
        {/* <WritingPreferencesSection /> */}
        <AppearanceSection />
        <Separator className={`my-6`} />
        <AccountDanger />
        <Separator className={`my-6`} />
        <SettingsHelp />
      </div>
    </div>
  )
}

export default SettingsContent
