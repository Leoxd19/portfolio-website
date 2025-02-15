import Image from "next/image"
import Link from "next/link"
import { StyledEmail } from "@/components/ui/styled-email"
import { EMAIL_ADDRESS, BACKGROUND_IMAGE_URL } from "@/lib/constants"
import { ResponsiveContainer } from "@/components/responsive-container"
import { BackdropBlur } from "@/components/ui/backdrop-blur"

export default function Home() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={BACKGROUND_IMAGE_URL || "/placeholder.svg"}
          alt="Background image"
          fill
          priority
          sizes="100vw"
          quality={100}
          className="object-cover"
          style={{
            objectPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-black/20 dark:bg-black/40 transition-colors duration-300" />
      </div>

      <ResponsiveContainer>
        <div className="relative z-10 text-center max-w-lg">
          <h1 className="text-4xl font-bold mb-4 text-white">Hi there, I'm Leo.</h1>
          <p className="text-2xl mb-4 text-white">Let's build together!</p>
          <Link href={`mailto:${EMAIL_ADDRESS}`} className="inline-block">
            <StyledEmail email={EMAIL_ADDRESS} />
          </Link>
        </div>
      </ResponsiveContainer>

      <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 z-10">
        <BackdropBlur>
          <p className="text-sm font-mono text-black dark:text-white px-3 py-1">
            Built and Maintained by{" "}
            <Link
              href="https://github.com/Leoxd19"
              className="underline hover:text-blue-500 dark:hover:text-blue-300 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Leo Gardberg
            </Link>
          </p>
        </BackdropBlur>
      </div>
    </div>
  )
}

