"use client"

import { Button } from "@/components/ui/button"
import { Kbd, KbdGroup } from "@/components/ui/kbd"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight02Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { useCallback, useEffect, useRef, useState } from "react"
import { toast } from "sonner"
import { MAX_LENGTH } from "../constants"

const GeneratePost = () => {
  const [idea, setIdea] = useState("")
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const canGenerate = idea.trim().length > 0
  const handleGenerate = useCallback(() => {
    if (!canGenerate) return

    // TODO: Connect to your generate-post action.
    console.log("Generate post:", idea.trim())
  }, [canGenerate, idea])

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (
        event.key !== "Enter" ||
        !(event.metaKey || event.ctrlKey) ||
        event.shiftKey ||
        event.altKey
      ) {
        return
      }

      if (!canGenerate) toast.warning("Please enter your idea first.")

      event.preventDefault()
      handleGenerate()
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [canGenerate, handleGenerate])

  return (
    <div
      className={`mt-4 flex min-h-72 w-full flex-col rounded-xl border border-border shadow-lg`}
    >
      <Textarea
        ref={textareaRef}
        onChange={(event) => setIdea(event.target.value.slice(0, MAX_LENGTH))}

        value={idea}
        maxLength={MAX_LENGTH}
        aria-label="Your post idea"
        className={`flex-1 resize-none rounded-t-xl rounded-b-none border-none bg-transparent p-8 text-base leading-7 shadow-none transition-all duration-1000 placeholder:text-lg placeholder:text-muted-foreground/65 focus-visible:ring-0 focus-visible:ring-offset-0 sm:min-h-40 sm:text-lg dark:bg-transparent`}
        placeholder="Start with an idea, a though, or question..."
      />
      <Separator />
      <div className={`flex items-center justify-end gap-3 p-4`}>
        <KbdGroup>
          <Kbd>⌘</Kbd>
          <span>+</span>
          <Kbd>↵ Enter</Kbd>
        </KbdGroup>
        <Button
          onClick={handleGenerate}
          size={"lg"}
          disabled={!canGenerate}
          className={`px-3.5 font-semibold`}
        >
          Generate
          <HugeiconsIcon icon={ArrowRight02Icon} className={`size-4`} />
        </Button>
      </div>
    </div>
  )
}

export default GeneratePost
//           <span className="text-xs">+</span>
//           <Kbd></Kbd>
//           <span className="ml-1 text-xs">to generate</span>
//         </KbdGroup>

//         <Button
//           size="lg"
//           disabled={!canGenerate}
//           onClick={handleGenerate}
//           className="ml-auto gap-2 px-4 font-medium"
//         >
//           Generate
//           <HugeiconsIcon icon={ArrowRight02Icon} className="size-4" />
//         </Button>
//       </div>
//     </section>
//   )
// }

// export default GeneratePost
