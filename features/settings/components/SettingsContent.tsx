import SettingsSidebar from "./SettingsSidebar"
import AccountSection from "./AccountSection"
import AIProviderSection from "./AIProviderSection"
import WritingPreferencesSection from "./WritingPreferencesSection"
import AppearanceSection from "./AppearanceSection"
import SettingsHelp from "./SettingsHelp"

const SettingsContent = () => {
  return (
    <div className="flex flex-col gap-6 lg:grid lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-10">
      <SettingsSidebar />

      <div className="min-w-0 space-y-8 lg:space-y-12">
        <AccountSection />
        <AIProviderSection />
        <WritingPreferencesSection />
        <AppearanceSection />
        <SettingsHelp />
      </div>
    </div>
  )
}

export default SettingsContent
