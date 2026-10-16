import SettingsSidebar from "./SettingsSidebar"
import AccountSection from "./AccountSection"
import AIProviderSection from "./AIProviderSection"
import WritingPreferencesSection from "./WritingPreferencesSection"
import AppearanceSection from "./AppearanceSection"
import SettingsHelp from "./SettingsHelp"

const SettingsContent = () => {
  return (
    <div className="grid gap-8 lg:grid-cols-[190px_minmax(0,1fr)] lg:gap-12">
      <SettingsSidebar />

      <div className="min-w-0 space-y-10">
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
