import Highlight from "@/components/layout/Highlight"
import { cn } from "cn"

const AboutHero = () => {
  return (
    <div className="relative flex min-h-[70svh] w-full flex-col items-start justify-end gap-10 p-8 md:py-16">
      <span className={cn(`text-xs font-medium tracking-widest uppercase`)}>
        ABOUT MAVE
      </span>

      <h1 className={`max-w-4xl text-5xl leading-none md:text-[5.5rem]`}>
        Ideas are personal.
        <br />{" "}
        <span className={`relative inline-block w-fit`}>
          <Highlight />
          Writing
        </span>{" "}
        should be too.
      </h1>
    </div>
  )
}

export default AboutHero
