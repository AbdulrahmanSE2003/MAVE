import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight02Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import Link from "next/link"

const Outro = () => {
  return (
    <div
      id="visualStudio"
      className={`grid px-7 py-12 max-md:gap-5 md:grid-cols-2 md:px-14 md:py-24`}
    >
      {/*left column*/}
      <div className={`flex flex-col gap-4`}>
        <Badge variant="outline" className={`p-3 uppercase`}>
          Visual studio
        </Badge>
        <h5 className={`max-w-xs text-6xl`}>
          One idea.
          <br /> A complete story.
        </h5>
        <p className={`mt-3 max-w-xs text-muted-foreground`}>
          When the words feel right, turn them into a distinctive visual without
          leaving your creative flow.
        </p>

        <Button asChild variant={"link"} className={`group w-fit ps-0`}>
          <Link href={"/signup"}>
            Explore visual creation
            <HugeiconsIcon
              icon={ArrowRight02Icon}
              className={`size-5 transition-transform duration-300 group-hover:translate-x-1`}
            />
          </Link>
        </Button>
      </div>

      {/*Right Columns*/}
      <div className={`flex w-full items-center justify-end max-md:flex-col`}>
        {/*Small Sqaure*/}
        <div
          className={`relative flex-between h-48 w-48 flex-col items-start bg-accent p-8 py-6 shadow-lg max-md:top-4 max-md:right-16 md:left-4`}
        >
          <span className={`caption font-normal`}>From your post</span>
          <div className={`flex flex-col text-lg leading-[1.2]`}>
            <span>Good ideas</span>
            <span>rarely arrive</span>
            <span>fully formed.</span>
          </div>
        </div>

        {/*Big Square*/}
        <div className="flex-between h-full w-4/5 flex-col items-start bg-linear-to-b from-primary/93 to-primary p-6 md:w-3/5">
          <span className={`caption`}>mave / 001</span>
          <div
            className={`flex flex-col items-start gap-1 text-[2.4rem] leading-[0.75] font-extrabold tracking-tight uppercase`}
          >
            <span>MAKE</span>
            <span>SPACE</span>
            <span>FOR THE</span>
            <span className={`font-normal lowercase`}>unfinished.</span>
          </div>
          <p>Your ideas, your voice.</p>
        </div>
      </div>
    </div>
  )
}

export default Outro
