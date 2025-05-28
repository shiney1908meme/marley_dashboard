"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Github, Instagram, Linkedin, Twitter, Heart, Mail } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"

export default function RefinedFooter() {
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
    <footer className="relative bg-gradient-to-b from-[#1C2526] to-[#0F1419] py-12 lg:py-16 overflow-hidden border-t border-[#4C1D95]/20">
      {/* Animated Background Elements - Updated with refined purple */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#4C1D95] rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#3B82F6] rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#F97316] rounded-full blur-2xl opacity-20" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              {/* MARLEY Logo */}
              <div className="flex items-center justify-center lg:justify-start mb-6">
                <div className="relative">
                  <Image
                    src="/marley-logo-512.png"
                    alt="MARLEY Enterprises"
                    width={80}
                    height={80}
                    className="brightness-110 drop-shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#F97316] to-[#4C1D95] opacity-20 rounded-full blur-xl" />
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-[#F97316] to-[#4C1D95] bg-clip-text text-transparent">
                    MARLEY
                  </h3>
                  <p className="text-sm text-gray-400">Enterprises</p>
                </div>
              </div>

              <p className="text-base sm:text-lg text-gray-300 max-w-md leading-relaxed mb-6">
                Empowering creativity through innovative technology. Building the future of digital tools with
                retro-futuristic style and cutting-edge innovation.
              </p>

              {/* Newsletter Signup */}
              <div className="w-full max-w-sm mx-auto lg:mx-0">
                <p className="text-sm text-[#22C55E] mb-3 font-medium flex items-center justify-center lg:justify-start">
                  <Mail className="w-4 h-4 mr-2" />
                  Stay updated with MARLEY
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-3 py-2 bg-[#1C2526] border border-[#4C1D95]/30 rounded-lg text-white text-sm focus:border-[#22C55E] focus:outline-none focus:ring-2 focus:ring-[#22C55E]/20 transition-all"
                  />
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-[#22C55E] to-[#3B82F6] hover:from-[#3B82F6] hover:to-[#22C55E] text-white font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
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
            <h4 className="text-lg font-semibold text-[#F97316] mb-6 flex items-center justify-center lg:justify-start">
              <div className="w-2 h-2 bg-[#F97316] rounded-full mr-2 animate-pulse" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[#22C55E] transition-all duration-300 text-sm hover:translate-x-1 inline-block"
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
            <h4 className="text-lg font-semibold text-[#F97316] mb-6 flex items-center justify-center lg:justify-start">
              <div className="w-2 h-2 bg-[#22C55E] rounded-full mr-2 animate-pulse" />
              Connect With Us
            </h4>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-3 mb-6">
              {socialLinks.map((link) => (
                <motion.div key={link.name} whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.9 }}>
                  <Link
                    href={link.href}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#22C55E]/20 to-[#3B82F6]/20 text-[#22C55E] transition-all duration-300 hover:from-[#22C55E] hover:to-[#3B82F6] hover:text-white border border-[#22C55E]/20 hover:border-transparent hover:shadow-lg hover:shadow-[#22C55E]/25"
                  >
                    <link.icon className="h-4 w-4" />
                    <span className="sr-only">{link.name}</span>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Feedback Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-gradient-to-r from-[#F97316] to-[#4C1D95] hover:from-[#4C1D95] hover:to-[#F97316] text-white transition-all duration-500 shadow-lg hover:shadow-xl text-sm px-6 font-medium">
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
          className="mt-12 pt-8 border-t border-[#4C1D95]/20"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>© {currentYear} MARLEY Enterprises. All rights reserved.</span>
              <span className="hidden md:inline">•</span>
              <span className="flex items-center gap-1">
                Made with
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                >
                  <Heart className="h-4 w-4 text-[#F97316] fill-current" />
                </motion.div>
                for creators worldwide
              </span>
            </div>

            {/* Status & Tech */}
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <span>Powered by Next.js & Tailwind CSS</span>
              <div className="flex items-center gap-1">
                <motion.div
                  className="w-2 h-2 bg-[#22C55E] rounded-full"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
                <span>All systems operational</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
