"use client"

import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface SwipeIndicatorProps {
  direction: "left" | "right" | "both"
  text?: string
  className?: string
}

export default function SwipeIndicator({ direction, text, className = "" }: SwipeIndicatorProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className={`flex items-center justify-center gap-2 text-sm text-[#22C55E] ${className}`}
    >
      {(direction === "left" || direction === "both") && (
        <motion.div animate={{ x: [-5, 0, -5] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}>
          <ChevronLeft className="h-4 w-4" />
        </motion.div>
      )}

      <span>{text || "Swipe to navigate"}</span>

      {(direction === "right" || direction === "both") && (
        <motion.div animate={{ x: [0, 5, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}>
          <ChevronRight className="h-4 w-4" />
        </motion.div>
      )}
    </motion.div>
  )
}
