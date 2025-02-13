"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const FLIP_DURATION = 1.5
const HISTORY_LIMIT = 5

type CoinSide = "H" | "T"

interface FlipHistory {
  result: CoinSide
  id: number
}

export function ConstantsVariablesGame() {
  const [flipping, setFlipping] = useState(false)
  const [result, setResult] = useState<CoinSide | null>(null)
  const [history, setHistory] = useState<FlipHistory[]>([])
  const [flipCount, setFlipCount] = useState(0)

  const flipCoin = () => {
    if (flipping) return

    setFlipping(true)
    setTimeout(() => {
      const newResult: CoinSide = Math.random() < 0.5 ? "H" : "T"
      setResult(newResult)
      setHistory((prev) => [...prev, { result: newResult, id: flipCount }].slice(-HISTORY_LIMIT))
      setFlipCount((prev) => prev + 1)
      setFlipping(false)
    }, FLIP_DURATION * 1000)
  }

  return (
    <div className="w-80 bg-white dark:bg-black bg-opacity-80 dark:bg-opacity-80 backdrop-blur-md p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <h2 className="text-2xl font-bold mb-6 text-center text-black dark:text-white font-mono">
        Constants and Variables
      </h2>

      <div className="flex justify-between items-center mb-6">
        <div className="relative w-24 h-24">
          <motion.div
            className="w-24 h-24 rounded-full absolute top-0 left-0 bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-4xl font-bold text-black dark:text-white transition-colors duration-300"
            animate={{
              rotateY: flipping ? 1800 : 0,
              scale: flipping ? 1.2 : 1,
            }}
            transition={{ duration: FLIP_DURATION, ease: "easeInOut" }}
          >
            {flipping ? "" : result}
          </motion.div>
        </div>

        <button
          onClick={flipCoin}
          disabled={flipping}
          className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:bg-opacity-80 dark:hover:bg-opacity-80 transition-all duration-300 text-sm font-mono disabled:opacity-50"
        >
          Flip Coin
        </button>
      </div>

      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner w-full overflow-hidden border border-gray-200 dark:border-gray-700 transition-colors duration-300">
        <h3 className="text-sm font-bold mb-3 text-center text-black dark:text-white font-mono">Flip History</h3>
        <div className="flex justify-center gap-2">
          <AnimatePresence>
            {history.map(({ result, id }) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.5, y: -20 }}
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                  result === "H" ? "bg-blue-500 text-white" : "bg-red-500 text-white"
                } transition-colors duration-300`}
              >
                {result}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

