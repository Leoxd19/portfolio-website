import { ConstantsVariablesGame } from "@/components/constants-variables-game"
import { ResponsiveContainer } from "@/components/responsive-container"

export default function Playground() {
  return (
    <ResponsiveContainer className="bg-white dark:bg-black transition-colors duration-300">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-8 text-black dark:text-white font-mono">Playground</h1>
        <ConstantsVariablesGame />
      </div>
    </ResponsiveContainer>
  )
}

