import HomeContent from "./home-content"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home | Leo Gardberg",
}

export default function Home() {
  return <HomeContent />
}

