import Hero from "@/features/landing/components/Hero"
import HowItWorks from "@/features/landing/components/HowitWorks"
import MiniWorkspace from "@/features/landing/components/MiniWorkspace"

export default function Page() {
  return (
    <section>
      <Hero />
      <MiniWorkspace />
      <HowItWorks />
    </section>
  )
}
