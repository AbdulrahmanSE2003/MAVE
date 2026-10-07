"use client"

import Link from "next/link"
import { Button } from "../ui/button"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowRight02Icon,
  Cancel01Icon,
  Menu01Icon,
} from "@hugeicons/core-free-icons"
import { useState } from "react"
import { ThemeToggle } from "../ui/theme-toggle"
import Logo from "./Logo"

const links = [
  { label: "home", href: "/" },
  { label: "about", href: "/about" },
  { label: "changelog", href: "/changelog" },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen((v) => !v)

  return (
    <nav className="fixed inset-x-0 top-0 z-50 flex-between bg-background p-4">
      {/* Logo */}
      <Logo />
      {/* Desktop menu */}
      <div className="flex items-center gap-4 max-md:hidden">
        <div className="flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="capitalize transition-opacity duration-150 hover:opacity-75"
            >
              {link.label}
            </Link>
          ))}
        </div>
        {/*Theme Toggle*/}
        <ThemeToggle />
        <Button asChild className="capitalize">
          <Link href="/signup">
            <span>Start Creating</span>
            <HugeiconsIcon icon={ArrowRight02Icon} />
          </Link>
        </Button>
      </div>

      {/* Mobile toggle */}
      <Button
        variant="ghost"
        size="icon"
        onClick={toggle}
        aria-label="Toggle menu"
        aria-expanded={open}
        className="md:hidden"
      >
        <HugeiconsIcon icon={open ? Cancel01Icon : Menu01Icon} size={24} />
      </Button>

      {/* Mobile menu */}
      {open && (
        <div className="absolute inset-x-0 top-full flex flex-col gap-2 border-b bg-background p-4 shadow-md md:hidden">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-2 capitalize hover:bg-accent"
            >
              {link.label}
            </Link>
          ))}
          <Button size={"lg"} asChild className="mt-2 w-full capitalize">
            <Link href="/signup" onClick={() => setOpen(false)}>
              <span>Start Creating</span>
              <HugeiconsIcon icon={ArrowRight02Icon} />
            </Link>
          </Button>
        </div>
      )}
    </nav>
  )
}

export default Navbar
