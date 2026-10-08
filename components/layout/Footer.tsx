import Link from "next/link"
import Logo from "./Logo"

const link = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "changelog", href: "/changelog" },
  { name: "Signin", href: "/signin" },
]
const Footer = () => {
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
          {link.map((l) => (
            <li className={`text-sm font-light`} key={l.name}>
              <Link href={l.href}>{l.name}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/*Authorship*/}
      <p className={`text-sm text-muted-foreground`}>
        Built & designed by{" "}
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
