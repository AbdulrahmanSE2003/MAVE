import Image from "next/image"
import { Provider } from "../types"

const ProviderCard = ({
  provider,
  selected,
  onClick,
}: {
  provider: Provider
  selected: boolean
  onClick: (value: Provider["value"]) => void
}) => {
  return (
    <button
      type="button"
      onClick={() => onClick(provider.value)}
      aria-pressed={selected}
      className={`flex items-center justify-start gap-4 rounded-lg border p-4 text-left transition-colors duration-200 ${
        selected
          ? "border-primary"
          : "border-border bg-background hover:border-primary/50"
      }`}
    >
      {provider.image ? (
        <div className="h-10 w-10 shrink-0 rounded-md">
          <Image
            src={provider.image}
            alt={provider.provider}
            className="object-cover"
          />
        </div>
      ) : (
        <div className="h-10 w-10 shrink-0 rounded-md bg-foreground" />
      )}

      <div className="flex flex-col gap-0">
        <h6 className="font-medium">{provider.provider}</h6>
        <p className="paragraph text-sm">Bring your own API key</p>
      </div>
    </button>
  )
}

export default ProviderCard
