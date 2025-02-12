import Image from "next/image"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen relative overflow-hidden">
      {/* Main Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-4xl font-bold mb-4">Hi there, I'm Leo.</h1>
        <p className="text-2xl">Let's build together!</p>
      </div>

      {/* Red Panda Image Container */}
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] pointer-events-none">
        <div className="relative w-full h-full">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-black z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black z-10" />

          {/* Image */}
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/panda.jpg-DGv3YWm5dsb6rGdS4g6l940dclM6MZ.jpeg"
            alt="Red Panda"
            fill
            className="object-cover object-left-bottom opacity-70"
            priority
          />
        </div>
      </div>
    </main>
  )
}

