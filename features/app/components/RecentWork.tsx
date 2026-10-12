import Link from "next/link"
import { getUserPosts } from "../actions"
import Error from "@/app/error"
import { Post } from "@/lib/generated/prisma/client"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import EmptyPostsState from "./EmptyPostsState"
import RecentPost from "./RecentPost"

const RecentWork = async () => {
  const postsRes = await getUserPosts()
  if (!postsRes.success) return <Error />

  const posts: Post[] = postsRes.data

  return (
    <div className={`flex min-h-64 w-full flex-col gap-3`}>
      {/* Header */}
      <div className={`flex-between`}>
        <span className={`text-2xl tracking-tighter`}>Recent Work</span>
        <Button
          className={`font-semibold`}
          size={"lg"}
          asChild
          variant={"invisible"}
        >
          <Link href={"/write"}>View all</Link>
        </Button>
      </div>

      <Separator />

      {!posts.length ? (
        <EmptyPostsState />
      ) : (
        posts.map((postRow) => (
          <RecentPost postRow={postRow} key={postRow.id} />
        ))
      )}
    </div>
  )
}

export default RecentWork
