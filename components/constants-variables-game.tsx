"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function ConstantsVariablesGame() {
  const [flipping, setFlipping] = useState(false)
  const [result, setResult] = useState<"H" | "T" | null>(null)
  const [history, setHistory] = useState<Array<"H" | "T">>([])

  const flipCoin = () => {
    if (flipping) return
    setFlipping(true)
    setTimeout(() => {
      const newResult = Math.random() < 0.5 ? "H" : "T"
      setResult(newResult)
      setHistory((prev) => [...prev, newResult].slice(-5))
      setFlipping(false)
    }, 1500)
  }

  return (
    <div className="w-64 bg-gray-900 bg-opacity-80 backdrop-blur-md p-4 rounded-lg shadow-lg border border-gray-700">
      <h2 className="text-xl font-bold mb-4 text-center text-white">Constants and Variables</h2>
      <div className="flex justify-between items-center mb-4">
        <div className="relative w-20 h-20">
          <motion.div
            className="w-20 h-20 rounded-full absolute top-0 left-0 bg-gray-300 flex items-center justify-center text-3xl font-bold"
            animate={{
              rotateY: flipping ? 1800 : 0,
              scale: flipping ? 1.2 : 1,
            }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            {flipping ? "" : result}
          </motion.div>
        </div>
        <button
          onClick={flipCoin}
          className="px-3 py-1 bg-gray-700 text-white rounded hover:bg-gray-600 transition-colors text-sm"
          disabled={flipping}
        >
          Flip Coin
        </button>
      </div>
      <div className="bg-gray-800 text-white p-2 rounded-lg shadow-inner w-full h-24 overflow-hidden border border-gray-700">
        <h3 className="text-sm font-bold mb-2 text-center">Flip History</h3>
        <div className="flex justify-center gap-2">
          {history.map((flip, index) => (
            <AnimatePresence key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.5, y: -20 }}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                  flip === "H" ? "bg-gray-600" : "bg-gray-500"
                }`}
              >
                {flip}
              </motion.div>
            </AnimatePresence>
          ))}
        </div>
      </div>
    </div>
  )
}

