import Logo from "@/components/layout/Logo"
import { Badge } from "@/components/ui/badge"
import PostCard from "@/components/layout/PostCard"
import { instagramPost, linkedinPost } from "@/lib/constants"
import { Button } from "@/components/ui/button"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowRight02Icon, Picture } from "@hugeicons/core-free-icons"

const FakeContentArea = () => {
  return (
    <div
      className={`flex h-full w-full flex-col gap-5 rounded-lg border border-border bg-white p-4 shadow-xl max-md:flex-1 md:p-10`}
    >
      {/*Header*/}
      <div className={`flex-between border-b border-border pb-5`}>
        <span className={`font-semibold`}>Writing workspace</span>
        <Badge variant={"outline"} className={`p-3`}>
          <span
            className={`h-2 w-2 animate-pulse rounded-full bg-primary shadow-primary`}
          ></span>
          Generated
        </Badge>
      </div>

      {/*Content Area*/}
      <div className={`grid w-full gap-4 xl:grid-cols-2`}>
        <PostCard isCommercial platform={"LinkedIn"} content={linkedinPost} />
        <PostCard
          isCommercial
          className={`max-xl:hidden`}
          platform={"Instagram"}
          content={instagramPost}
        />
      </div>
      <Button
        disabled
        className={`flex items-center justify-between p-6 px-4 disabled:opacity-100`}
      >
        <div className={`flex-center gap-2 text-xs font-light`}>
          <HugeiconsIcon icon={Picture} />
          <span>Turn this post into a visual</span>
        </div>
        <div className={`flex-center gap-2`}>
          <span>Continue</span>
          <HugeiconsIcon icon={ArrowRight02Icon} />
        </div>
      </Button>
    </div>
  )
}

const FakeWorkSpace = () => {
  return (
    <div
      className={`flex h-full w-full items-center justify-start gap-4 rounded-lg bg-muted md:p-2`}
    >
      {/*Fake Sidebar*/}
      <div
        className={`mb-auto flex h-full min-w-36 flex-col justify-start gap-4 px-3 py-1.5 max-md:hidden`}
      >
        {/*Fake Logo*/}
        <Logo />
        {/*Fake Tabs*/}
        <div className={`mt-12 flex flex-col gap-6`}>
          <span
            className={`h-2 w-full animate-pulse rounded-full bg-primary`}
          />
          <span className={`h-2 w-full animate-pulse rounded-full bg-ring`} />
          <span className={`h-2 w-full animate-pulse rounded-full bg-ring`} />
        </div>
      </div>
      <FakeContentArea />
    </div>
  )
}

export default FakeWorkSpace
