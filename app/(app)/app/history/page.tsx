import HistoryContent from "@/features/history/components/HistoryContent"
import HistoryFooter from "@/features/history/components/HistoryFooter"
import HistoryHeader from "@/features/history/components/HistoryHeader"

export default function HistoryPage() {
  return (
    <main className="mx-auto w-full max-w-7xl space-y-8 px-5 py-8 sm:px-8 lg:px-10">
      <HistoryHeader />

      <HistoryContent />

      <HistoryFooter />
    </main>
  )
}
