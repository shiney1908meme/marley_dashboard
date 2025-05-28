"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/router"
import { useDebounce } from "@/hooks/useDebounce"
import { SearchIcon, XMarkIcon } from "@heroicons/react/20/solid"

interface EnhancedSearchBarProps {
  initialSearchTerm?: string
  onSearch?: (searchTerm: string) => void
  placeholder?: string
}

const EnhancedSearchBar: React.FC<EnhancedSearchBarProps> = ({
  initialSearchTerm = "",
  onSearch,
  placeholder = "Search...",
}) => {
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm)
  const [isFocused, setIsFocused] = useState(false)
  const debouncedSearchTerm = useDebounce(searchTerm, 300)
  const router = useRouter()
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    setSearchTerm(initialSearchTerm)
  }, [initialSearchTerm])

  useEffect(() => {
    if (onSearch) {
      onSearch(debouncedSearchTerm)
    } else {
      // Default search behavior using Next.js router
      if (debouncedSearchTerm) {
        router.push(`/?search=${debouncedSearchTerm}`)
      } else {
        router.push(`/`) // Navigate to the base route if search term is empty
      }
    }
  }, [debouncedSearchTerm, onSearch, router])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const handleClear = () => {
    setSearchTerm("")
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleBlur = () => {
    setIsFocused(false)
  }

  return (
    <div className="relative rounded-md shadow-sm flex items-center">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
      </div>
      <input
        type="text"
        name="search"
        id="search"
        className="block w-full rounded-md border-0 py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder={placeholder}
        value={searchTerm}
        onChange={handleInputChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        ref={inputRef}
      />
      {searchTerm && (
        <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-3" onClick={handleClear}>
          <XMarkIcon className="h-5 w-5 text-gray-400 hover:text-gray-500" aria-hidden="true" />
        </button>
      )}
    </div>
  )
}

export default EnhancedSearchBar
