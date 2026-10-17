import { HistoryCardData } from "../types"
import HistoryItemCard from "./HistoryItemCard"

const HistoryList = ({ items }: { items: HistoryCardData[] }) => {
  return (
    <section className="space-y-4">
      {items.map((item) => (
        <HistoryItemCard key={item.id} item={item} />
      ))}
    </section>
  )
}

export default HistoryList
