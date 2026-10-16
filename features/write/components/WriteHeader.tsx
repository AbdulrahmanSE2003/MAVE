import { useT } from "@/lib/i18n"

const WriteHeader = () => {
  const t = useT()

  return (
    <header className="space-y-2">
      <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
        {t("write.header.breadcrumb")}
      </p>

      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        {t("write.header.title")}
      </h1>

      <p className="max-w-lg text-sm leading-6 text-muted-foreground">
        {t("write.header.subtitle")}
      </p>
    </header>
  )
}

export default WriteHeader
