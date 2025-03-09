import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Formats a Date object into a string with hours, minutes, and seconds.
 * Used for displaying the current time in the LocationTime component.
 *
 * @param date - The Date object to format
 * @returns A formatted time string (HH:MM:SS)
 */
export function formatTime(date: Date): string {
  return date.toLocaleTimeString("en-US", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  })
}

/**
 * Combines multiple class names into a single string, removing duplicates.
 * Utilizes clsx for conditional classes and tailwind-merge for deduplication.
 * This is particularly useful when combining Tailwind CSS classes.
 *
 * @param inputs - Class names or conditional class objects
 * @returns A merged class name string
 *
 * @example
 * // Returns "bg-red-500 p-4 rounded"
 * cn("bg-red-500", "p-4", "rounded")
 *
 * @example
 * // Returns "bg-blue-500 p-4" (conditional class)
 * cn("p-4", { "bg-blue-500": true, "bg-red-500": false })
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

