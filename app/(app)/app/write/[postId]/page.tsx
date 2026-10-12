import Error from "@/app/error"
import { getPost } from "@/features/app/actions"
import { plainTextToHtml } from "@/features/app/utils"
import PostEditor from "@/features/write/components/PostEditor"
import TopBar from "@/features/write/components/TopBar"
const App = async ({ params }: { params: Promise<{ postId: string }> }) => {
  const { postId } = await params
  const postRes = await getPost(postId)
  if (!postRes.success) return <Error />
  const post = postRes.data

  return (
    <div className="flex h-full w-full scrollbar-thin flex-col gap-6 overflow-auto p-4 sm:p-10 sm:py-7">
      {/* Top Navigation & Actions Bar */}
      <TopBar type={post.contentType} />

      <PostEditor
        initContent={plainTextToHtml(post.content)}
        onChange={() => {}}
      />
    </div>
  )
}

export default App
