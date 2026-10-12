import Error from "@/app/error"
import { getCurrentSessionUser } from "@/lib/users/current-user"
import AppHeader from "@/features/app/components/AppHeader"
import GeneratePost from "@/features/app/components/GeneratePost"
import RecentWork from "@/features/app/components/RecentWork"

const App = async () => {
  const user = await getCurrentSessionUser()
  if (!user) return <Error />
  const firstName = user.name.split(" ")[0]

  return (
    <div
      className={`relative flex h-full scrollbar-thin flex-col gap-8 overflow-y-auto p-4 sm:p-10 sm:py-7`}
    >
      {/* Header */}
      <AppHeader name={firstName} />

      {/* Intro Text */}
      <h1 className={`max-w-xl text-3xl md:text-5xl`}>
        What are you creating today?
      </h1>

      {/* Generate Box */}
      <GeneratePost />

      {/* Recent Work */}
      <RecentWork />
    </div>
  )
}

export default App
