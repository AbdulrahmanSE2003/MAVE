"use client"

import Link from "next/link"
import { Button } from "../ui/button"
import { HugeiconsIcon } from "@hugeicons/react"
import ArrowRight02Icon from "@hugeicons/core-free-icons/ArrowRight02Icon"

const links = [
  { label: "about", href: "/about" },
  { label: "changelog", href: "/changelog" },
]

const Navbar = () => {
  return (
    <nav className={`fixed top-0 right-0 left-0 flex-between p-4`}>
      {/* Logo  */}
      <span className={`font-black`}>
        MAVE <span className={`text-2xl text-primary`}>.</span>
      </span>

      <div className={`flex items-center gap-4`}>
        <div className={`flex items-center gap-6`}>
          {links.map((link) => (
            <Link className={`capitalize`} key={link.label} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
        {/* Start Button  */}
        <Button className={`capitalize`}>
          <span>Start Creating</span>
          <HugeiconsIcon icon={ArrowRight02Icon} />
        </Button>
      </div>
    </nav>
  )
}

export default Navbar
