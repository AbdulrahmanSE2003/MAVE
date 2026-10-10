import AppHeader from "@/features/app/components/AppHeader"
import GeneratePost from "@/features/app/components/GeneratePost"
import RecentWork from "@/features/app/components/RecentWork"

const App = async () => {
  return (
    <div
      className={`relative flex h-full scrollbar-none flex-col gap-8 overflow-y-auto [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden`}
    >
      {/* Header */}
      <AppHeader name="Abdulrahman" />

      {/* Intro Text */}
      <h1 className={`max-w-xl text-5xl`}>What are you creating today?</h1>

      {/* Generate Box */}
      <GeneratePost />

      {/* Recent Work */}
      <RecentWork />
    </div>
  )
}

export default App
