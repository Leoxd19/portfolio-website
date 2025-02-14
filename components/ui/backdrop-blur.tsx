import type { ReactNode } from "react"

interface BackdropBlurProps {
  children: ReactNode
  className?: string
}

export function BackdropBlur({ children, className = "" }: BackdropBlurProps) {
  return <div className={`backdrop-blur-sm rounded-lg px-3 py-1 ${className}`}>{children}</div>
}

