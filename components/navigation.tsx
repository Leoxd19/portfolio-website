"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
  { href: "/", label: "Home" },
  { href: "/resume", label: "Resume" },
  { href: "/playground", label: "Playground" },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-5 right-5 flex gap-8 z-20">
      {links.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={`text-sm font-mono transition-opacity ${
            pathname === href ? "opacity-100" : "opacity-80 hover:opacity-100"
          }`}
        >
          {label}
        </Link>
      ))}
    </nav>
  )
}

