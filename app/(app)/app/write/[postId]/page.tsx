import NotFound from "@/app/not-found"
import { getPost } from "@/features/app/actions"
import { plainTextToHtml } from "@/features/app/utils"
import TopBar from "@/features/write/components/TopBar"
import WriteWorkspace from "@/features/write/components/WriteWorkspace"
import { getI18n } from "@/lib/i18n/server"
const App = async ({ params }: { params: Promise<{ postId: string }> }) => {
  const { postId } = await params
  const postRes = await getPost(postId)
  if (!postRes.success) {
    const { t } = await getI18n()
    return (
      <NotFound
        title={t("write.notFound.title")}
        description={t("write.notFound.description")}
        homeLabel={t("write.notFound.backToPosts")}
        homeHref="/app/write"
      />
    )
  }
  const post = postRes.data

  return (
    <div className="flex h-full w-full scrollbar-thin flex-col gap-3 overflow-auto p-4 sm:p-10 sm:py-7">
      {/* Top Navigation & Actions Bar */}
      <TopBar type={post.contentType} />
      {/* Draft Area */}
      <WriteWorkspace
        post={post}
        initContent={plainTextToHtml(post.content)}
      />{" "}
    </div>
  )
}

export default App
