import Hero from "@/features/marketing/landing/components/Hero"
import HowItWorks from "@/features/marketing/landing/components/HowitWorks"
import MiniWorkspace from "@/features/marketing/landing/components/MiniWorkspace"
import Outro from "@/features/marketing/landing/components/Outro"
import CTA from "@/features/marketing/landing/components/CTA"

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
