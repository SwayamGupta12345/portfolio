"use client"

import { createContext, useState, useEffect } from "react"

// Create a context for theme management
export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  // Check if localStorage is available (for SSR compatibility)
  const isBrowser = typeof window !== "undefined"

  // Initialize theme state from localStorage or default to dark
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    if (isBrowser) {
      const savedTheme = localStorage.getItem("theme")
      return savedTheme ? savedTheme === "dark" : true // Default to dark if not set
    }
    return true // Default to dark for initial SSR render
  })

  // Apply theme to document when theme changes
  useEffect(() => {
    if (isBrowser) {
      // Save theme preference to localStorage
      localStorage.setItem("theme", isDarkTheme ? "dark" : "light")

      // Apply theme class to document
      document.documentElement.classList.toggle("dark-theme", isDarkTheme)
      document.documentElement.classList.toggle("light-theme", !isDarkTheme)
    }
  }, [isDarkTheme, isBrowser])

  // Toggle theme function
  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev)
  }

  return <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>{children}</ThemeContext.Provider>
}

