import Link from "next/link"
import Logo from "./Logo"
import { getI18n } from "@/lib/i18n/server"

const links = [
  { labelKey: "marketing.footer.home", href: "/" },
  { labelKey: "marketing.footer.about", href: "/about" },
  { labelKey: "marketing.footer.changelog", href: "/changelog" },
  { labelKey: "marketing.footer.signin", href: "/signin" },
] as const

const Footer = async () => {
  const { t } = await getI18n()

  return (
    <div
      className={`flex-between flex flex-col items-start p-6 px-10 max-md:gap-12 md:min-h-64`}
    >
      {/*Logo & Links*/}
      <div
        className={`flex-between w-full max-md:flex-col max-md:items-start max-md:gap-6`}
      >
        <div className={`flex flex-col gap-2`}>
          <Logo showSlogan />
        </div>
        <ul
          className={`flex gap-3 max-md:flex-col max-md:items-start md:gap-8`}
        >
          {links.map((l) => (
            <li className={`text-sm font-light`} key={l.labelKey}>
              <Link href={l.href}>{t(l.labelKey)}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/*Authorship*/}
      <p className={`text-sm text-muted-foreground`}>
        {t("marketing.footer.builtBy")}{" "}
        <Link
          className={`glow-primary`}
          target="_blank"
          href="https://mnmlst-dev.vercel.app"
        >
          Abdulrahman
        </Link>
      </p>
    </div>
  )
}

export default Footer
