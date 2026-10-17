import { notFound } from "next/navigation"
import { getHistory } from "../actions"
import HistoryContent from "./HistoryContent"

const HistoryContentWrapper = async () => {
  const historyRes = await getHistory()

  if (!historyRes.success) {
    notFound()
  }

  return (
    <div className={`flex flex-col items-start gap-3`}>
      <HistoryContent history={historyRes.data} hasMore={historyRes.hasMore}/>
    </div>
  )
}

export default HistoryContentWrapper
