import Hero from "@/features/landing/components/Hero"
import HowItWorks from "@/features/landing/components/HowitWorks"
import MiniWorkspace from "@/features/landing/components/MiniWorkspace"
import Outro from "@/features/landing/components/Outro"
import CTA from "@/features/landing/components/CTA"

export default function Page() {
  return (
    <section>
      <Hero />
      <MiniWorkspace />
      <HowItWorks />
      <Outro />
      <CTA />
    </section>
  )
}
