import { BackdropBlur } from "@/components/ui/backdrop-blur"

const GMAIL_COLORS = ["#4285F4", "#EA4335", "#FBBC05", "#34A853"]

interface StyledEmailProps {
  email: string
}

export function StyledEmail({ email }: StyledEmailProps) {
  return (
    <BackdropBlur className="inline-flex items-center">
      <div className="font-bold tracking-normal">
        {email.split("").map((char, index) => (
          <span key={index} style={{ color: GMAIL_COLORS[index % GMAIL_COLORS.length] }}>
            {char}
          </span>
        ))}
      </div>
    </BackdropBlur>
  )
}

