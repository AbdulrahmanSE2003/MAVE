import { goals } from "../../constants"
import { Goal } from "../../types"
import { useI18n } from "@/lib/i18n"

type GoalChipsProps = {
  goal: Goal["value"]
  setGoal: (g: Goal["value"]) => void
}

const GoalChips = ({ goal, setGoal }: GoalChipsProps) => {
  const { dict } = useI18n()

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
          {dict.write.settings.goals[item.value]}
        </button>
      ))}
    </div>
  )
}

export default GoalChips
