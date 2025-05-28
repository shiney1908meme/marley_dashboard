"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, Moon, Sun, X } from "lucide-react"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"

import { Button } from "@/components/ui/button"

export default function RefinedHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const { theme, setTheme } = useTheme()
  const menuRef = useRef<HTMLDivElement>(null)

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/#projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "#contact" },
  ]

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return (
    <>
      {/* Fixed Header with refined purple accents */}
      <header className="fixed top-0 left-0 right-0 z-50 w-full bg-[#1C2526] border-b border-[#4C1D95]/20 backdrop-blur-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-4 max-w-full">
          <div className="flex items-center justify-between h-20 sm:h-24 lg:h-28">
            {/* MARLEY Logo */}
            <div className="flex items-center justify-center sm:justify-start flex-1 sm:flex-none">
              <Link href="/" className="group relative block">
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                    filter: [
                      "drop-shadow(0 0 8px rgba(34, 197, 94, 0.4))",
                      "drop-shadow(0 0 16px rgba(34, 197, 94, 0.6))",
                      "drop-shadow(0 0 8px rgba(34, 197, 94, 0.4))",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="relative"
                >
                  <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 relative">
                    <Image
                      src="/marley-logo-512.png"
                      alt="MARLEY Dashboard"
                      fill
                      className="object-contain transition-all duration-300 group-hover:brightness-110"
                      style={{
                        filter: "drop-shadow(0 0 8px rgba(34, 197, 94, 0.4))",
                      }}
                      priority
                      sizes="(max-width: 640px) 80px, (max-width: 1024px) 96px, 112px"
                    />
                  </div>
                </motion.div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden sm:flex sm:items-center sm:space-x-4 md:space-x-6 lg:space-x-8">
              {navLinks.map((link) => (
                <motion.div key={link.name} whileHover={{ scale: 1.05 }}>
                  <Link
                    href={link.href}
                    className="text-sm md:text-base text-white transition-all duration-300 hover:text-[#3B82F6] hover:drop-shadow-lg relative group font-medium px-2"
                  >
                    {link.name}
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#3B82F6] to-[#22C55E] origin-left"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.div>
              ))}

              {/* Login Button - Updated with refined purple */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  className="bg-[#4C1D95] text-white hover:bg-[#F97316] transition-all duration-300 text-sm md:text-base px-4 md:px-6 shadow-lg hover:shadow-xl font-medium"
                  size="sm"
                >
                  Login
                </Button>
              </motion.div>

              {/* Theme Toggle */}
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleTheme}
                  className="text-[#22C55E] hover:bg-[#22C55E]/10 hover:text-[#22C55E] transition-all duration-300"
                >
                  <motion.div animate={{ rotate: theme === "dark" ? 0 : 180 }} transition={{ duration: 0.5 }}>
                    {theme === "dark" ? (
                      <Sun className="h-4 w-4 md:h-5 md:w-5" />
                    ) : (
                      <Moon className="h-4 w-4 md:h-5 md:w-5" />
                    )}
                  </motion.div>
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </motion.div>
            </nav>

            {/* Mobile Navigation Controls */}
            <div className="flex items-center sm:hidden absolute right-4">
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
                  aria-label="Toggle menu"
                  aria-expanded={isOpen}
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay - Updated with refined purple */}
      <AnimatePresence>
        {isOpen && isMobile && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm sm:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Slide-out Menu with refined purple gradient */}
            <motion.div
              ref={menuRef}
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed left-0 top-0 z-50 h-full w-[300px] bg-gradient-to-b from-[#4C1D95] to-[#312E81] shadow-2xl sm:hidden border-r border-[#4C1D95]/20"
              style={{ touchAction: "pan-y" }}
            >
              <div className="flex h-full flex-col">
                {/* Header with logo */}
                <div className="flex items-center justify-between border-b border-white/20 p-4 pt-6">
                  <div className="w-16 h-16 relative">
                    <Image
                      src="/marley-logo-512.png"
                      alt="MARLEY"
                      fill
                      className="object-contain brightness-110 drop-shadow-lg"
                      sizes="64px"
                    />
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:bg-white/10"
                    aria-label="Close menu"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                {/* Navigation Links */}
                <nav className="flex flex-col p-4 space-y-2" role="navigation">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        className="block py-3 px-4 text-lg font-medium text-white transition-all duration-300 hover:text-[#22C55E] hover:bg-white/10 rounded-lg border border-transparent hover:border-white/20"
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
                      className="w-full bg-[#F97316] text-white hover:bg-[#22C55E] transition-all duration-300 shadow-lg font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      Login
                    </Button>
                  </motion.div>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
