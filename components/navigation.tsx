"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { NAVIGATION_LINKS } from "@/lib/constants"
import { BackdropBlur } from "@/components/ui/backdrop-blur"

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-5 right-5 z-10">
      <BackdropBlur>
        <div className="flex gap-4">
          {NAVIGATION_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-mono font-bold transition-opacity ${
                pathname === href
                  ? "text-black dark:text-white opacity-100"
                  : "text-black/80 dark:text-white/80 hover:opacity-100"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </BackdropBlur>
    </nav>
  )
}

