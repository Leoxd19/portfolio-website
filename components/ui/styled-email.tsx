const GMAIL_COLORS = ["#4285F4", "#EA4335", "#FBBC05", "#34A853"]

interface StyledEmailProps {
  email: string
}

export function StyledEmail({ email }: StyledEmailProps) {
  return (
    <span className="inline-flex items-center font-bold tracking-normal backdrop-blur-md rounded-2xl px-2 py-1">
      {email.split("").map((char, index) => (
        <span key={index} style={{ color: GMAIL_COLORS[index % GMAIL_COLORS.length] }}>
          {char}
        </span>
      ))}
    </span>
  )
}

