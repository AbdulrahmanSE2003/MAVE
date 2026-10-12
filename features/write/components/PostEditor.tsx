import RichTextEditor from "./RichTextEditor"

import { Button } from "@/components/ui/button"
import { HugeiconsIcon } from "@hugeicons/react"
import { Sparkles } from "@hugeicons/core-free-icons"

type PostEditorProps = {
  initContent: string
  onChange?: (html: string) => void
  onSave?: () => void | Promise<void>
}

const PostEditor = ({ initContent, onChange, onSave }: PostEditorProps) => {
  return (
    <div>
      <RichTextEditor initContent={initContent} />

      <Button size={"lg"} className={`text-md mt-2 w-full py-6`}>
        Generate Image for this post
        <HugeiconsIcon icon={Sparkles} />
      </Button>
    </div>
  )
}

export default PostEditor
