"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Menu, Moon, Sun, X } from "lucide-react"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"

import { Button } from "@/components/ui/button"
import { useSwipe } from "@/hooks/use-swipe"

export default function SwipeableHeader() {
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
      // Detect swipe from left edge (within 20px)
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
      <header className="sticky top-0 z-50 w-full border-b border-purple-900/20 bg-[#1C2526]/90 backdrop-blur-sm">
        <div className="container mx-auto flex h-14 sm:h-16 lg:h-18 items-center justify-between px-3 sm:px-4 lg:px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <h1
              className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-extrabold text-[#F97316] transition-all duration-300 hover:scale-105"
              style={{ textShadow: "0 0 10px rgba(34, 197, 94, 0.5)" }}
            >
              MARLEY
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:items-center lg:space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm xl:text-base text-white transition-all duration-300 hover:text-[#3B82F6] hover:scale-105"
              >
                {link.name}
              </Link>
            ))}
            <Button
              className="bg-[#6B21A8] text-white hover:bg-[#F97316] transition-all duration-300 text-sm xl:text-base px-4 xl:px-6"
              size="sm"
            >
              Login
            </Button>
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="text-[#22C55E] hover:bg-[#22C55E]/10">
              {theme === "dark" ? (
                <Sun className="h-4 w-4 xl:h-5 xl:w-5" />
              ) : (
                <Moon className="h-4 w-4 xl:h-5 xl:w-5" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
          </nav>

          {/* Mobile Navigation Controls */}
          <div className="flex items-center lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="mr-2 text-[#22C55E] hover:bg-[#22C55E]/10"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              <span className="sr-only">Toggle theme</span>
            </Button>

            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="text-white">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>

        {/* Mobile swipe hint */}
        {isMobile && !isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.5 }}
            className="absolute top-full left-0 p-2 text-xs text-gray-400"
          >
            <motion.div animate={{ x: [0, 5, 0] }} transition={{ repeat: 2, duration: 1 }}>
              Swipe from left edge →
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
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Slide-out Menu */}
            <motion.div
              ref={menuRef}
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed left-0 top-0 z-50 h-full w-[280px] bg-[#1C2526] shadow-xl lg:hidden"
              style={{ touchAction: "pan-y" }}
            >
              <div className="flex h-full flex-col">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-purple-900/20 p-4">
                  <h2 className="text-xl font-bold text-[#F97316]">MARLEY</h2>
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
                        className="block py-3 px-2 text-lg font-medium text-white transition-all duration-300 hover:text-[#3B82F6] hover:bg-white/5 rounded-lg"
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
                      className="w-full bg-[#6B21A8] text-white hover:bg-[#F97316] transition-all duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      Login
                    </Button>
                  </motion.div>
                </nav>

                {/* Swipe indicator */}
                <div className="mt-auto p-4 text-center">
                  <p className="text-xs text-gray-400">Swipe left to close</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
