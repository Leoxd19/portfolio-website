import { redirect } from "next/navigation"

/**
 * Playground page is temporarily hidden
 * This component redirects users to the home page if they try to access it directly
 */
export default function PlaygroundPage() {
  // Redirect to home page
  redirect("/")

  // This code is unreachable but kept for TypeScript
  return null
}
