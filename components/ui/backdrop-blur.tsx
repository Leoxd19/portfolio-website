import type { ReactNode } from "react"

interface BackdropBlurProps {
  children: ReactNode
  className?: string
}

export function BackdropBlur({ children, className = "" }: BackdropBlurProps) {
  return (
    <div className={`bg-white/10 dark:bg-black/30 backdrop-blur-sm rounded-lg px-3 py-1 ${className}`}>{children}</div>
  )
}

