import ChangelogHero from "@/features/changelog/ChangelogHero"
import ChangelogTimeline from "@/features/changelog/ChangelogArea"

const Changelog = () => {
  return (
    <section className="relative min-h-screen w-full bg-background px-8 py-16 font-sans text-foreground">
      <ChangelogHero />

      {/* Main Content Area */}
      <ChangelogTimeline />
    </section>
  )
}

export default Changelog
