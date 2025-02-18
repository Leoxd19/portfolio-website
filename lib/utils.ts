import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Formats a Date object into a string with hours, minutes, and seconds.
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
 * Utilizes clsx and tailwind-merge for efficient class merging.
 * @param inputs - Class names or conditional class objects
 * @returns A merged class name string
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

