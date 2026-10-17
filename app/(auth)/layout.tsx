import Logo from "@/components/layout/Logo"
import AuthErrorHandler from "./AuthErrorHandler"
import { ReactNode } from "react"
import { getI18n } from "@/lib/i18n/server"

export default async function Layout({ children }: { children: ReactNode }) {
  const { t } = await getI18n()

  return (
    <main className={`flex justify-start`}>
      <AuthErrorHandler />

      <div
        className={`relative flex-between min-h-screen w-1/2 flex-col items-start overflow-hidden bg-foreground p-12 text-background max-md:hidden dark:bg-background dark:text-foreground`}
      >
        {/*Logo*/}
        <Logo />

        {/*Intro Text*/}
        <div className={`relative z-10 leading-relaxed`}>
          <h2 className={`text-6xl`}>{t("auth.layout.taglineLine1")}</h2>
          <h2 className={`text-6xl text-primary`}>
            {t("auth.layout.taglineLine2")}
          </h2>
          <p
            className={`mt-6 paragraph text-sm font-normal not-dark:text-background/70`}
          >
            {t("auth.layout.intro")}
          </p>
        </div>

        <p className={`paragraph text-xs not-dark:text-background/70`}>
          {t("auth.layout.copyright", { year: new Date().getFullYear() })}
        </p>

        {/*Circle*/}
        <div
          className={`absolute inset-e-12 -bottom-16 h-72 w-72 rounded-full bg-transparent ring-124 ring-primary`}
        />
      </div>
      <div
        className={`flex min-h-screen w-1/2 flex-col justify-center bg-muted p-8 px-28`}
      >
        {children}
      </div>
    </main>
  )
}
