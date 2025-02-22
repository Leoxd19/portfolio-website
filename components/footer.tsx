"use client"

import Link from "next/link"
import { Mail, Github } from "lucide-react"
import { BackdropBlur } from "@/components/ui/backdrop-blur"
import { ThemeToggle } from "@/components/theme-toggle"

export function Footer() {
  return (
    <BackdropBlur className="w-full py-4 mt-auto border-t border-gray-200/20 dark:border-gray-800/20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start space-y-4 sm:space-y-0">
          <div className="text-center sm:text-left w-full sm:w-auto order-2 sm:order-1">
            <p className="text-sm font-mono text-gray-800 dark:text-gray-200">
              Built and maintained by{" "}
              <Link
                href="https://github.com/Leoxd19"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Leo Gardberg
              </Link>{" "}
              © {new Date().getFullYear()}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center sm:items-end space-y-2 sm:space-y-0 sm:space-x-6 w-full sm:w-auto order-1 sm:order-2">
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              <a
                href="mailto:leo.gardberg@gmail.com"
                className="text-sm font-mono text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                leo.gardberg@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Github className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              <Link
                href="https://github.com/Leoxd19"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-mono text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Leo Gardberg
              </Link>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </BackdropBlur>
  )
}

