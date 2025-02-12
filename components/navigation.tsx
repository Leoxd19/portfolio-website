"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"

export function Navigation() {
  const pathname = usePathname()

  const links = [
    { href: "/", label: "Home" },
    { href: "/resume", label: "Resume" },
    { href: "/playground", label: "Playground" },
  ]

  return (
    <nav className="fixed top-5 right-5 flex gap-8 z-10">
      {links.map(({ href, label }) => (
        <Link key={href} href={href} className="group relative">
          <span className="text-sm font-mono opacity-80 hover:opacity-100 transition-opacity">{label}</span>
          {pathname === href && (
            <motion.div
              layoutId="underline"
              className="absolute left-0 top-full h-px w-full bg-white"
              initial={false}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 30,
              }}
            />
          )}
        </Link>
      ))}
    </nav>
  )
}

