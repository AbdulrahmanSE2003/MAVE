import Link from "next/link"

const link = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Signin", href: "/signin" },
]
const Footer = () => {
  return (
    <div className={`flex-between flex flex-col`}>
      <div className={`flex-between`}>
        <div className={``}>ss</div>
        <ul>
          {link.map((l) => (
            <li key={l.name}>
              <Link href={l.href}>{l.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <p className={`text-sm text-muted-foreground`}>
        Built & designed by{" "}
        <Link href="/mnmlst-dev.vercel.app">Abdulrahman</Link>
      </p>
    </div>
  )
}

export default Footer
