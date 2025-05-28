"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Github, Instagram, Linkedin, Twitter, Heart } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"

export default function EnhancedFooter() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: "Twitter", icon: Twitter, href: "#", color: "hover:text-blue-400" },
    { name: "Facebook", icon: Facebook, href: "#", color: "hover:text-blue-600" },
    { name: "Instagram", icon: Instagram, href: "#", color: "hover:text-pink-500" },
    { name: "LinkedIn", icon: Linkedin, href: "#", color: "hover:text-blue-500" },
    { name: "GitHub", icon: Github, href: "#", color: "hover:text-gray-300" },
  ]

  const footerLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Support", href: "#" },
    { name: "Documentation", href: "#" },
  ]

  return (
    <footer className="relative border-t border-purple-900/20 bg-gradient-to-b from-[#1C2526] to-[#0F1419] py-8 sm:py-12 lg:py-16 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#6B21A8] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#3B82F6] rounded-full blur-3xl" />
      </div>

      <div className="container relative mx-auto px-3 sm:px-4 lg:px-6">
        <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center lg:items-start text-center lg:text-left"
            >
              <div className="mb-4">
                <Image
                  src="/marley-logo.png"
                  alt="MARLEY Dashboard"
                  width={180}
                  height={60}
                  className="brightness-110 drop-shadow-lg"
                />
              </div>
              <p className="text-base sm:text-lg text-gray-300 max-w-md leading-relaxed mb-6">
                Empowering creativity through innovative technology. Building the future of digital tools with
                retro-futuristic style.
              </p>

              {/* Newsletter Signup */}
              <div className="w-full max-w-sm">
                <p className="text-sm text-[#22C55E] mb-3 font-medium">Stay updated with MARLEY</p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-3 py-2 bg-[#1C2526] border border-[#6B21A8]/30 rounded-lg text-white text-sm focus:border-[#22C55E] focus:outline-none"
                  />
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-[#22C55E] to-[#3B82F6] hover:from-[#3B82F6] hover:to-[#22C55E] text-white"
                  >
                    Subscribe
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center lg:text-left"
          >
            <h3 className="text-lg font-semibold text-[#F97316] mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[#22C55E] transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <h3 className="text-lg font-semibold text-[#F97316] mb-4">Connect With Us</h3>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-3 mb-6">
              {socialLinks.map((link) => (
                <motion.div key={link.name} whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.9 }}>
                  <Link
                    href={link.href}
                    className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#22C55E]/20 to-[#3B82F6]/20 text-[#22C55E] transition-all duration-300 hover:from-[#22C55E] hover:to-[#3B82F6] hover:text-white border border-[#22C55E]/20 hover:border-transparent ${link.color}`}
                  >
                    <link.icon className="h-4 w-4" />
                    <span className="sr-only">{link.name}</span>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Feedback Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-gradient-to-r from-[#F97316] to-[#F97316] hover:from-[#F97316] hover:to-[#6B21A8] text-white transition-all duration-500 shadow-lg text-sm px-6">
                Send Feedback
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-[#6B21A8]/20"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>© {currentYear} MARLEY Dashboard. Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
              >
                <Heart className="h-4 w-4 text-[#F97316] fill-current" />
              </motion.div>
              <span>for creators worldwide.</span>
            </div>

            <div className="flex items-center gap-4 text-xs text-gray-500">
              <span>Powered by Next.js & Tailwind CSS</span>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-[#22C55E] rounded-full animate-pulse" />
                <span>All systems operational</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
