"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Menu, Moon, Sun, X } from "lucide-react"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"

import { Button } from "@/components/ui/button"
import { useSwipe } from "@/hooks/use-swipe"
import LogoAnimations from "@/components/logo-animations"

export default function EnhancedHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const { theme, setTheme } = useTheme()
  const menuRef = useRef<HTMLDivElement>(null)

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ]

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Swipe handlers for mobile menu
  const swipeHandlers = useSwipe({
    onSwipeRight: () => {
      if (isMobile && !isOpen) {
        setIsOpen(true)
      }
    },
    onSwipeLeft: () => {
      if (isMobile && isOpen) {
        setIsOpen(false)
      }
    },
    threshold: 50,
  })

  // Add touch event listeners for edge swipe
  useEffect(() => {
    if (!isMobile) return

    const handleEdgeSwipe = (e: TouchEvent) => {
      const touch = e.touches[0]
      if (touch.clientX < 20 && !isOpen) {
        swipeHandlers.onTouchStart(e)
      }
    }

    document.addEventListener("touchstart", handleEdgeSwipe, { passive: true })
    document.addEventListener("touchmove", swipeHandlers.onTouchMove, { passive: true })
    document.addEventListener("touchend", swipeHandlers.onTouchEnd, { passive: true })

    return () => {
      document.removeEventListener("touchstart", handleEdgeSwipe)
      document.removeEventListener("touchmove", swipeHandlers.onTouchMove)
      document.removeEventListener("touchend", swipeHandlers.onTouchEnd)
    }
  }, [swipeHandlers, isMobile, isOpen])

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-purple-900/20 bg-[#1C2526]/95 backdrop-blur-md">
        <div className="container mx-auto flex h-16 sm:h-18 lg:h-20 items-center justify-between px-3 sm:px-4 lg:px-6">
          {/* MARLEY Logo with Animations */}
          <Link href="/" className="flex items-center group">
            <LogoAnimations
              width={150}
              height={50}
              enableSpecialEvents={true}
              className="transition-all duration-300 group-hover:brightness-110"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:items-center lg:space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <motion.div key={link.name} whileHover={{ scale: 1.05 }}>
                <Link
                  href={link.href}
                  className="text-sm xl:text-base text-white transition-all duration-300 hover:text-[#3B82F6] hover:drop-shadow-lg relative group"
                >
                  {link.name}
                  <motion.div
                    className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#3B82F6] to-[#22C55E] origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            ))}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                className="bg-[#6B21A8] text-white hover:bg-[#F97316] transition-all duration-300 text-sm xl:text-base px-4 xl:px-6 shadow-lg hover:shadow-xl"
                size="sm"
              >
                Login
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="text-[#22C55E] hover:bg-[#22C55E]/10 hover:text-[#22C55E] transition-all duration-300"
              >
                <motion.div animate={{ rotate: theme === "dark" ? 0 : 180 }} transition={{ duration: 0.5 }}>
                  {theme === "dark" ? (
                    <Sun className="h-4 w-4 xl:h-5 xl:w-5" />
                  ) : (
                    <Moon className="h-4 w-4 xl:h-5 xl:w-5" />
                  )}
                </motion.div>
                <span className="sr-only">Toggle theme</span>
              </Button>
            </motion.div>
          </nav>

          {/* Mobile Navigation Controls */}
          <div className="flex items-center lg:hidden">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="mr-2 text-[#22C55E] hover:bg-[#22C55E]/10"
              >
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                <span className="sr-only">Toggle theme</span>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:bg-white/10"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Mobile swipe hint */}
        {isMobile && !isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2, duration: 0.5 }}
            className="absolute top-full left-0 p-2 text-xs text-[#22C55E]"
          >
            <motion.div animate={{ x: [0, 5, 0] }} transition={{ repeat: 2, duration: 1 }}>
              Swipe from edge →
            </motion.div>
          </motion.div>
        )}
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && isMobile && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Slide-out Menu */}
            <motion.div
              ref={menuRef}
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed left-0 top-0 z-50 h-full w-[300px] bg-gradient-to-b from-[#1C2526] to-[#1C2526]/95 shadow-2xl lg:hidden border-r border-[#6B21A8]/20"
              style={{ touchAction: "pan-y" }}
            >
              <div className="flex h-full flex-col">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-purple-900/20 p-4">
                  <LogoAnimations width={120} height={40} enableSpecialEvents={true} />
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:bg-white/10"
                  >
                    <X className="h-5 w-5" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </div>

                {/* Navigation Links */}
                <nav className="flex flex-col p-4 space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        className="block py-3 px-4 text-lg font-medium text-white transition-all duration-300 hover:text-[#3B82F6] hover:bg-gradient-to-r hover:from-[#3B82F6]/10 hover:to-transparent rounded-lg border border-transparent hover:border-[#3B82F6]/20"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navLinks.length * 0.1 }}
                    className="pt-4"
                  >
                    <Button
                      className="w-full bg-gradient-to-r from-[#6B21A8] to-[#F97316] text-white hover:from-[#F97316] hover:to-[#6B21A8] transition-all duration-300 shadow-lg"
                      onClick={() => setIsOpen(false)}
                    >
                      Login
                    </Button>
                  </motion.div>
                </nav>

                {/* Swipe indicator */}
                <div className="mt-auto p-4 text-center">
                  <p className="text-xs text-[#22C55E]">← Swipe left to close</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
