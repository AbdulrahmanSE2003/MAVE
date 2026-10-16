import { HistoryItem } from "../types"
import HistoryItemCard from "./HistoryItemCard"

const HistoryList = ({ items }: { items: HistoryItem[] }) => {
  return (
    <section className="space-y-3">
      {items.map((item) => (
        <HistoryItemCard key={item.id} item={item} />
      ))}
    </section>
  )
}

export default HistoryList
