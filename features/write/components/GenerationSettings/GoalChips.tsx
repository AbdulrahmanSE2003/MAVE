import { goals } from "../../constants"
import { Goal } from "../../types"

type GoalChipsProps = {
  goal: Goal["value"]
  setGoal: (g: Goal["value"]) => void
}

const GoalChips = ({ goal, setGoal }: GoalChipsProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {goals.map((item) => (
        <button
          key={item.value}
          type="button"
          onClick={() => setGoal(item.value)}
          aria-pressed={goal === item.value}
          className={`rounded-full border px-3 py-2 text-xs font-medium transition-colors ${
            goal === item.value
              ? "border-primary bg-primary/10"
              : "border-border text-muted-foreground hover:bg-muted"
          }`}
        >
          {item.label}
        </button>
      ))}
    </div>
  )
}

export default GoalChips
