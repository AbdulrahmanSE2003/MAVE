import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight02Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import Link from "next/link"

const Hero = () => {
  return (
    <div className="relative flex min-h-svh w-full items-center justify-start p-6">
      {/*Hero Intro*/}
      <div
        className={`flex-col gap-1 [&_h1]:text-6xl sm:[&_h1]:text-8xl [&_h2]:text-6xl sm:[&_h2]:text-8xl`}
      >
        <Badge className={`mb-2 uppercase`}>Personal content studio</Badge>
        <h1 className={`font-bold`}>Your ideas,</h1>
        <h2 className={`font-normal`}>your voice.</h2>
        <p className={`mt-3 text-muted-foreground sm:max-w-md`}>
          MAVE turns the thoughts in your head into polished social content that
          still sounds unmistakably like you.
        </p>

        {/*Hero Buttons*/}
        <div className={`mt-8 flex gap-4`}>
          <Button size={"lg"}>
            Start Creating
            <HugeiconsIcon icon={ArrowRight02Icon} />
          </Button>
          <Button asChild size={"lg"} variant="outline">
            <Link href="/">See how it works</Link>
          </Button>
        </div>
      </div>

      <div
        className={`absolute right-4 bottom-6 flex items-center gap-2 text-muted-foreground uppercase max-sm:text-xs`}
      >
        <span>Idea</span>
        <HugeiconsIcon size={18} icon={ArrowRight02Icon} />
        <span>Writing style</span>
        <HugeiconsIcon size={18} icon={ArrowRight02Icon} />
        <span>Content</span>
        <HugeiconsIcon size={18} icon={ArrowRight02Icon} />
        <span
          className={`rounded-full bg-primary p-3 py-1.5 font-semibold text-black`}
        >
          Visual
        </span>
      </div>
    </div>
  )
}

export default Hero
