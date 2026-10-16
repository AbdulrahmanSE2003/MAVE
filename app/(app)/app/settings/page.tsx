import SettingsContent from "@/features/settings/components/SettingsContent"
import SettingsHeader from "@/features/settings/components/SettingsHeader"

export default function SettingsPage() {
  return (
    <main className="w-full scrollbar-thin space-y-8 p-5 md:p-8">
      <SettingsHeader />

      <SettingsContent />
    </main>
  )
}
