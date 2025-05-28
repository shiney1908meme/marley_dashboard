"use client"

import { motion } from "framer-motion"
import LogoAnimations from "@/components/logo-animations"

interface LoadingAnimationProps {
  isLoading: boolean
}

export default function LoadingAnimation({ isLoading }: LoadingAnimationProps) {
  if (!isLoading) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#1C2526]"
    >
      <div className="relative">
        {/* Enhanced loading animation with special events */}
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
            scale: { duration: 2, repeat: Number.POSITIVE_INFINITY },
          }}
          className="relative z-10"
        >
          <LogoAnimations width={120} height={40} enableSpecialEvents={true} className="brightness-110" />
        </motion.div>

        {/* Additional loading rings */}
        <motion.div
          animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.1, 0.3] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
          className="absolute inset-0 rounded-xl border border-[#3B82F6] opacity-20"
        />
      </div>

      {/* Loading text */}
      <motion.p
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
        className="absolute bottom-1/3 text-[#22C55E] text-sm font-medium"
      >
        Loading MARLEY Dashboard...
      </motion.p>
    </motion.div>
  )
}
