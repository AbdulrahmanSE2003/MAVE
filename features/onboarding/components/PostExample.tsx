import { Button } from "@/components/ui/button"
import { Field, FieldLabel } from "@/components/ui/field"
import { Textarea } from "@/components/ui/textarea"
import { Trash2 } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

const PostExample = ({
  num,
  value,
  onChange,
  onDelete,
  isDisabled,
}: {
  num: number
  value: string
  onChange: (value: string) => void
  onDelete: (index: number) => void
  isDisabled: boolean
}) => {
  return (
    <Field>
      <div className={`mb-2 flex-between`}>
        <FieldLabel htmlFor="textarea-message">Example {num}</FieldLabel>
        <Button
          size={"icon"}
          variant={"destructive"}
          type="button"
          aria-label="Delete item"
          title="Delete item"
          disabled={isDisabled}
          onClick={() => onDelete(num - 1)}
        >
          <HugeiconsIcon icon={Trash2} size={16} aria-hidden="true" />
        </Button>
      </div>
      <Textarea
        id="textarea-message"
        value={value}
        onChange={(e) => onChange(e.target.value)}

        placeholder="Post something you've written..."
      />
    </Field>
  )
}

export default PostExample
