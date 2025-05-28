"use client"

import { useState } from "react"
import { Search, Filter, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface RefinedSearchBarProps {
  onSearch: (query: string) => void
  onFilter: (category: string) => void
  categories: string[]
}

export default function RefinedSearchBar({ onSearch, onFilter, categories }: RefinedSearchBarProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [showFilters, setShowFilters] = useState(false)

  const handleSearch = (value: string) => {
    setSearchQuery(value)
    onSearch(value)
  }

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    onFilter(category)
    setShowFilters(false)
  }

  const clearSearch = () => {
    setSearchQuery("")
    onSearch("")
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-8 sm:py-12 bg-[#1C2526]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Search Input */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#6B21A8]/20 to-[#3B82F6]/20 rounded-xl blur-sm group-hover:blur-none transition-all duration-300" />
            <div className="relative bg-[#1C2526] border-2 border-[#6B21A8] rounded-xl p-1 transition-all duration-300 group-hover:border-[#6B21A8] group-focus-within:border-[#22C55E]">
              <div className="flex items-center">
                <div className="flex items-center pl-4">
                  <Search className="h-5 w-5 text-[#22C55E] transition-colors duration-300" />
                </div>

                <Input
                  type="text"
                  placeholder="Search projects by name or category..."
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="flex-1 bg-transparent border-0 text-white placeholder:text-gray-400 focus:ring-0 focus:outline-none text-base px-4 py-3"
                />

                <AnimatePresence>
                  {searchQuery && (
                    <motion.button
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      onClick={clearSearch}
                      className="p-2 text-gray-400 hover:text-[#F97316] transition-colors duration-200"
                    >
                      <X className="h-4 w-4" />
                    </motion.button>
                  )}
                </AnimatePresence>

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowFilters(!showFilters)}
                  className="mr-2 text-[#3B82F6] hover:text-[#22C55E] hover:bg-[#22C55E]/10 transition-all duration-300"
                >
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Filter Categories */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4 overflow-hidden"
              >
                <div className="bg-[#1C2526]/80 border border-[#6B21A8]/20 rounded-lg p-4 backdrop-blur-sm">
                  <p className="text-sm text-[#22C55E] mb-3 font-medium">Filter by category:</p>
                  <div className="flex flex-wrap gap-2">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleCategoryChange("all")}
                      className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                        selectedCategory === "all"
                          ? "bg-gradient-to-r from-[#22C55E] to-[#3B82F6] text-white shadow-lg"
                          : "bg-[#1C2526] text-gray-300 border border-gray-600 hover:border-[#22C55E] hover:text-[#22C55E]"
                      }`}
                    >
                      All Projects
                    </motion.button>
                    {categories.map((category) => (
                      <motion.button
                        key={category}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleCategoryChange(category)}
                        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 capitalize ${
                          selectedCategory === category
                            ? "bg-gradient-to-r from-[#F97316] to-[#6B21A8] text-white shadow-lg"
                            : "bg-[#1C2526] text-gray-300 border border-gray-600 hover:border-[#F97316] hover:text-[#F97316]"
                        }`}
                      >
                        {category}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Search Results Info */}
          <AnimatePresence>
            {searchQuery && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="mt-4 text-center"
              >
                <p className="text-sm text-gray-400">
                  Searching for: <span className="text-[#22C55E] font-medium">"{searchQuery}"</span>
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  )
}
