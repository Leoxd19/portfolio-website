import Image from "next/image"
import Link from "next/link"
import { StyledEmail } from "@/components/ui/styled-email"
import { EMAIL_ADDRESS, BACKGROUND_IMAGE_URL } from "@/lib/constants"
import { ResponsiveContainer } from "@/components/responsive-container"

export default function Home() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={BACKGROUND_IMAGE_URL || "/placeholder.svg"}
          alt="Red Panda relaxing on a tree branch"
          fill
          priority
          sizes="100vw"
          quality={100}
          className="object-cover"
          style={{
            objectPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-black/40 dark:bg-black/60 transition-colors duration-300" />
      </div>

      <ResponsiveContainer>
        <div className="relative z-10 text-center max-w-lg">
          <h1 className="text-4xl font-bold mb-4 text-white">Hi there, I'm Leo.</h1>
          <p className="text-2xl mb-2 text-white">Let's build together!</p>
          <Link
            href={`mailto:${EMAIL_ADDRESS}`}
            className="text-lg font-sans bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-white/20 transition-colors duration-300"
          >
            <StyledEmail email={EMAIL_ADDRESS} />
          </Link>
        </div>
      </ResponsiveContainer>
    </div>
  )
}

