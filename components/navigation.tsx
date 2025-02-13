"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { NAVIGATION_LINKS } from "@/lib/constants"

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-5 right-5 flex gap-8 z-10">
      {NAVIGATION_LINKS.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={`text-sm font-mono font-bold transition-opacity ${
            pathname === href ? "opacity-100" : "opacity-80 hover:opacity-100"
          }`}
        >
          {label}
        </Link>
      ))}
    </nav>
  )
}

