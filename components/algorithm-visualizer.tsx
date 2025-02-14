"use client"

import type React from "react"
import { useState, useCallback, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { BackdropBlur } from "@/components/ui/backdrop-blur"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Types
type Algorithm = "bubbleSort" | "quickSort" | "mergeSort"
type Speed = "Normal" | "Fast" | "Mach 1"

interface ArrayItem {
  value: number
  isSorted: boolean
  isComparing: boolean
}

// Constants
const ARRAY_SIZE = 20
const MIN_VALUE = 5
const MAX_VALUE = 100

// Helper functions
const generateRandomArray = (): ArrayItem[] => {
  return Array.from({ length: ARRAY_SIZE }, () => ({
    value: Math.floor(Math.random() * (MAX_VALUE - MIN_VALUE + 1)) + MIN_VALUE,
    isSorted: false,
    isComparing: false,
  }))
}

const sleep = (ms: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, ms))

const AlgorithmVisualizer: React.FC = () => {
  const [array, setArray] = useState<ArrayItem[]>(generateRandomArray())
  const [algorithm, setAlgorithm] = useState<Algorithm>("bubbleSort")
  const [isSorting, setIsSorting] = useState(false)
  const [speed, setSpeed] = useState<Speed>("Normal")

  useEffect(() => {
    resetArray()
  }, [])

  const resetArray = useCallback(() => {
    setArray(generateRandomArray())
  }, [])

  const getSpeedDelay = useCallback(() => {
    switch (speed) {
      case "Normal":
        return 50
      case "Fast":
        return 25
      case "Mach 1":
        return 5
      default:
        return 50
    }
  }, [speed])

  const updateArray = useCallback(
    async (newArray: ArrayItem[]) => {
      setArray([...newArray])
      await sleep(getSpeedDelay())
    },
    [getSpeedDelay],
  )

  const bubbleSort = async () => {
    const arr = [...array]
    const n = arr.length
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        arr[j].isComparing = true
        arr[j + 1].isComparing = true
        await updateArray(arr)

        if (arr[j].value > arr[j + 1].value) {
          ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
          await updateArray(arr)
        }

        arr[j].isComparing = false
        arr[j + 1].isComparing = false
      }
      arr[n - i - 1].isSorted = true
      await updateArray(arr)
    }
    arr[0].isSorted = true
    await updateArray(arr)
  }

  const partition = async (arr: ArrayItem[], low: number, high: number): Promise<number> => {
    const pivot = arr[high].value
    let i = low - 1

    for (let j = low; j < high; j++) {
      arr[j].isComparing = true
      arr[high].isComparing = true
      await updateArray(arr)

      if (arr[j].value < pivot) {
        i++
        ;[arr[i], arr[j]] = [arr[j], arr[i]]
        await updateArray(arr)
      }

      arr[j].isComparing = false
      arr[high].isComparing = false
    }
    ;[arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]
    await updateArray(arr)

    return i + 1
  }

  const quickSortHelper = async (arr: ArrayItem[], low: number, high: number) => {
    if (low < high) {
      const pi = await partition(arr, low, high)
      await quickSortHelper(arr, low, pi - 1)
      await quickSortHelper(arr, pi + 1, high)
    }

    if (low === high) {
      arr[low].isSorted = true
      await updateArray(arr)
    }
  }

  const quickSort = async () => {
    const arr = [...array]
    await quickSortHelper(arr, 0, arr.length - 1)
    // Mark all elements as sorted after quicksort is done
    for (let i = 0; i < arr.length; i++) {
      arr[i].isSorted = true
      await updateArray(arr)
    }
  }

  const merge = async (arr: ArrayItem[], l: number, m: number, r: number) => {
    const n1 = m - l + 1
    const n2 = r - m
    const L = arr.slice(l, m + 1)
    const R = arr.slice(m + 1, r + 1)

    let i = 0,
      j = 0,
      k = l

    while (i < n1 && j < n2) {
      arr[k].isComparing = true
      await updateArray(arr)

      if (L[i].value <= R[j].value) {
        arr[k] = { ...L[i], isComparing: false }
        i++
      } else {
        arr[k] = { ...R[j], isComparing: false }
        j++
      }
      k++
      await updateArray(arr)
    }

    while (i < n1) {
      arr[k] = { ...L[i], isComparing: false }
      i++
      k++
      await updateArray(arr)
    }

    while (j < n2) {
      arr[k] = { ...R[j], isComparing: false }
      j++
      k++
      await updateArray(arr)
    }

    for (let idx = l; idx <= r; idx++) {
      arr[idx].isSorted = true
      await updateArray(arr)
    }
  }

  const mergeSortHelper = async (arr: ArrayItem[], l: number, r: number) => {
    if (l < r) {
      const m = Math.floor((l + r) / 2)
      await mergeSortHelper(arr, l, m)
      await mergeSortHelper(arr, m + 1, r)
      await merge(arr, l, m, r)
    }
  }

  const mergeSort = async () => {
    const arr = [...array]
    await mergeSortHelper(arr, 0, arr.length - 1)
  }

  const startSorting = async () => {
    setIsSorting(true)
    switch (algorithm) {
      case "bubbleSort":
        await bubbleSort()
        break
      case "quickSort":
        await quickSort()
        break
      case "mergeSort":
        await mergeSort()
        break
    }
    setIsSorting(false)
  }

  return (
    <BackdropBlur className="p-6 w-full">
      <h3 className="text-xl font-bold mb-4 text-center">Algorithm Visualizer</h3>
      <div className="flex flex-col gap-4 mb-4">
        <div className="flex justify-between items-center">
          <Select value={algorithm} onValueChange={(value: Algorithm) => setAlgorithm(value)} disabled={isSorting}>
            <SelectTrigger className="w-[160px] bg-background text-foreground">
              <SelectValue placeholder="Select algorithm" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="bubbleSort">Bubble Sort</SelectItem>
              <SelectItem value="quickSort">Quick Sort</SelectItem>
              <SelectItem value="mergeSort">Merge Sort</SelectItem>
            </SelectContent>
          </Select>
          <div className="flex gap-2">
            <Button onClick={startSorting} disabled={isSorting} size="sm">
              {isSorting ? "Sorting..." : "Start"}
            </Button>
            <Button onClick={resetArray} disabled={isSorting} size="sm">
              Reset
            </Button>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4 border border-gray-300 dark:border-gray-700 rounded-lg">
          <span className="text-sm font-medium text-black dark:text-white whitespace-nowrap">Speed:</span>
          <div className="flex gap-2">
            {["Normal", "Fast", "Mach 1"].map((option) => (
              <Button
                key={option}
                onClick={() => setSpeed(option as Speed)}
                disabled={isSorting}
                size="sm"
                variant={speed === option ? "default" : "outline"}
                className={`${
                  speed === option
                    ? "bg-primary text-primary-foreground"
                    : "bg-background text-foreground hover:bg-accent hover:text-accent-foreground"
                } transition-colors duration-200`}
              >
                {option}
              </Button>
            ))}
          </div>
        </div>
      </div>
      <div className="h-48 flex items-end justify-between">
        <AnimatePresence>
          {array.map((item, index) => (
            <motion.div
              key={index}
              initial={{ height: 0 }}
              animate={{
                height: `${(item.value / MAX_VALUE) * 100}%`,
                backgroundColor: item.isSorted
                  ? "rgb(34, 197, 94)" // green-500
                  : item.isComparing
                    ? "rgb(249, 115, 22)" // orange-500
                    : "rgb(59, 130, 246)", // blue-500
              }}
              exit={{ height: 0 }}
              transition={{ duration: 0.3 }}
              className="w-3 rounded-t-sm"
            />
          ))}
        </AnimatePresence>
      </div>
    </BackdropBlur>
  )
}

export default AlgorithmVisualizer

