import { HistoryCardData } from "../types"
import HistoryItemCard from "./HistoryItemCard"

type Props = {
  items: HistoryCardData[]
  onDelete: (item: HistoryCardData) => void
}

const HistoryList = ({ items, onDelete }: Props) => {
  return (
    <section className="w-full space-y-4">
      {items.map((item) => (
        <HistoryItemCard
          key={`${item.historyType}:${item.id}`}
          item={item}
          onDelete={onDelete}
        />
      ))}
    </section>
  )
}

export default HistoryList
