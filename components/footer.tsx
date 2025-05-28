import Link from "next/link"
import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "GitHub", icon: Github, href: "#" },
  ]

  return (
    <footer className="border-t border-purple-900/20 bg-[#1C2526] py-6 sm:py-8 lg:py-12">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:gap-8 lg:flex-row lg:gap-6">
          {/* Brand Section */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h2 className="mb-2 text-xl sm:text-2xl lg:text-3xl font-bold text-[#F97316]">MARLEY</h2>
            <p className="text-xs sm:text-sm lg:text-base text-gray-400 max-w-xs lg:max-w-none">
              Empowering creativity through technology
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-3">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="flex h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 items-center justify-center rounded-full bg-[#1C2526] text-[#22C55E] transition-all duration-300 hover:bg-[#22C55E] hover:text-[#1C2526] hover:scale-110 border border-[#22C55E]/20 hover:border-[#22C55E]"
              >
                <link.icon className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5" />
                <span className="sr-only">{link.name}</span>
              </Link>
            ))}
          </div>

          {/* Feedback Button */}
          <Button className="bg-[#F97316] text-white transition-all duration-300 hover:bg-[#F97316]/90 hover:scale-105 text-xs sm:text-sm lg:text-base px-4 sm:px-6 lg:px-8 py-2 sm:py-3">
            Send Feedback
          </Button>
        </div>

        {/* Copyright */}
        <div className="mt-6 sm:mt-8 lg:mt-12 text-center text-xs sm:text-sm lg:text-base text-gray-400">
          <p>© {currentYear} MARLEY Dashboard. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
