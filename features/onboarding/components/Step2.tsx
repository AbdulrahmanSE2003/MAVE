import { Separator } from "@/components/ui/separator"

const Step2 = () => {
  return (
    <div className={`flex w-full flex-col gap-8`}>
      <span className={`text-xs font-medium`}>01</span>

      <h2 className={`text-7xl font-medium`}>Connect your AI provider.</h2>
      <p className={`max-w-md paragraph`}>
        MAVE uses your own OpenAI account to generate content. Your API key is encrypted and securely stored.
      </p>
    </div>
  )
}

export default Step2
