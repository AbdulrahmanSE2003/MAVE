import Error from "@/app/error"
import { getCurrentSessionUser } from "@/lib/users/current-user"
import AppHeader from "@/features/app/components/AppHeader"
import GeneratePost from "@/features/app/components/GeneratePost"
import RecentWork from "@/features/app/components/RecentWork"
import { Suspense } from "react"
import RecentWorkSkeleton from "@/features/app/components/RecentWorkSkeleton"
import { getI18n } from "@/lib/i18n/server"

const App = async () => {
  const user = await getCurrentSessionUser()
  if (!user) return <Error />
  const firstName = user.name.split(" ")[0]
  const { t } = await getI18n()

  return (
    <div
      className={`relative flex h-full scrollbar-thin flex-col gap-8 overflow-y-auto p-4 sm:p-10 sm:py-7`}
    >
      {/* Header */}
      <AppHeader name={firstName} />

      {/* Intro Text */}
      <h1 className={`max-w-xl text-3xl md:text-5xl`}>
        {t("app.dashboard.title")}
      </h1>

      {/* Generate Box */}
      <GeneratePost />

      {/* Recent Work */}
      <Suspense fallback={<RecentWorkSkeleton />}>
        <RecentWork />
      </Suspense>
    </div>
  )
}

export default App
