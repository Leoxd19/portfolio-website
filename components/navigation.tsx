"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { NAVIGATION_LINKS } from "@/lib/constants"
import { BackdropBlur } from "@/components/ui/backdrop-blur"

// Navigation component displays the main navigation links
export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-5 right-5 z-10">
      <BackdropBlur className="bg-white/30 dark:bg-black/30">
        <div className="flex gap-4">
          {NAVIGATION_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-mono font-bold transition-all duration-200 ease-in-out drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)] dark:drop-shadow-none hover:scale-110 ${
                pathname === href
                  ? "text-gray-800 dark:text-white opacity-100"
                  : "text-gray-700 dark:text-white/80 hover:opacity-100"
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

