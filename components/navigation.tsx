"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { NAVIGATION_LINKS } from "@/lib/constants"
import { BackdropBlur } from "@/components/ui/backdrop-blur"

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="z-50 sm:fixed sm:top-5 sm:right-5">
      <BackdropBlur className="bg-white/80 dark:bg-black/80 border border-gray-200/50 dark:border-gray-800/50">
        <div className="flex gap-4 p-2">
          {NAVIGATION_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-mono font-bold transition-all duration-200 ease-in-out hover:scale-110 ${
                pathname === href
                  ? "text-black dark:text-white opacity-100"
                  : "text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
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

