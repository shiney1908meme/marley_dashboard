"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, Moon, Sun, X } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ]

  return (
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
            {theme === "dark" ? <Sun className="h-4 w-4 xl:h-5 xl:w-5" /> : <Moon className="h-4 w-4 xl:h-5 xl:w-5" />}
            <span className="sr-only">Toggle theme</span>
          </Button>
        </nav>

        {/* Tablet Navigation */}
        <nav className="hidden md:flex lg:hidden md:items-center md:space-x-4">
          <Button
            className="bg-[#6B21A8] text-white hover:bg-[#F97316] transition-all duration-300 text-sm px-3"
            size="sm"
          >
            Login
          </Button>
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="text-[#22C55E] hover:bg-[#22C55E]/10">
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-[#1C2526] p-0">
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between border-b border-purple-900/20 p-4">
                  <h2 className="text-xl font-bold text-[#F97316]">MARLEY</h2>
                  <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                    <X className="h-5 w-5" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </div>
                <nav className="flex flex-col p-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="py-3 text-lg font-medium text-white transition-all duration-300 hover:text-[#3B82F6]"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </nav>

        {/* Mobile Navigation */}
        <div className="flex items-center md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="mr-2 text-[#22C55E] hover:bg-[#22C55E]/10"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            <span className="sr-only">Toggle theme</span>
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] bg-[#1C2526] p-0">
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between border-b border-purple-900/20 p-4">
                  <h2 className="text-lg font-bold text-[#F97316]">MARLEY</h2>
                  <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                    <X className="h-4 w-4" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </div>
                <nav className="flex flex-col p-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="py-3 text-base font-medium text-white transition-all duration-300 hover:text-[#3B82F6]"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                  <Button className="mt-4 bg-[#6B21A8] text-white hover:bg-[#F97316] transition-all duration-300">
                    Login
                  </Button>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
