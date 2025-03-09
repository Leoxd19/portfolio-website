/**
 * Navigation component.
 * Provides a responsive navigation menu for the application.
 */

"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { NAVIGATION_LINKS } from "@/lib/constants"
import { BackdropBlur } from "@/components/ui/backdrop-blur"

/**
 * Renders a navigation bar with links to different pages.
 * Highlights the current active page and applies hover effects.
 * Adapts to both mobile and desktop layouts.
 */
export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="z-50 sm:fixed sm:top-5 sm:right-5 w-full sm:w-auto">
      <BackdropBlur className="bg-white/80 dark:bg-black/80 border border-gray-200/50 dark:border-gray-800/50">
        {/* Navigation links container */}
        <div className="flex justify-center sm:justify-start gap-4 p-3">
          {NAVIGATION_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-mono font-bold transition-all duration-200 ease-in-out hover:scale-110 relative ${
                pathname === href
                  ? "text-black dark:text-white opacity-100"
                  : "text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
              }`}
              aria-current={pathname === href ? "page" : undefined}
            >
              {label}
              {/* Active page indicator */}
              {pathname === href && (
                <span
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-black dark:bg-white rounded-full"
                  aria-hidden="true"
                />
              )}
            </Link>
          ))}
        </div>
      </BackdropBlur>
    </nav>
  )
}

