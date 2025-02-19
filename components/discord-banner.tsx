import Image from "next/image"

interface DiscordBannerProps {
  username: string
  userId: string
}

export function DiscordBanner({ username, userId }: DiscordBannerProps) {
  return (
    <div className="flex items-center space-x-3 bg-white dark:bg-gray-800 p-2 rounded-lg shadow-sm">
      <Image
        src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png"
        alt="Discord Logo"
        width={24}
        height={24}
      />
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
        Discord: <span className="font-bold text-[#5865F2]">Leoxd</span>
      </span>
    </div>
  )
}

