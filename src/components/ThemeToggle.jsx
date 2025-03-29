"use client"

import { useEffect, useState } from "react"
import { FiSun, FiMoon } from "react-icons/fi"
import "../styles/ThemeToggle.css"

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check local storage for saved preference, default to dark mode
    const savedTheme = localStorage.getItem("theme")
    return savedTheme ? savedTheme === "dark" : true
  })

  useEffect(() => {
    // Apply theme class to document body
    if (isDarkMode) {
      document.body.classList.add("dark-theme")
      document.body.classList.remove("light-theme")
      localStorage.setItem("theme", "dark")
    } else {
      document.body.classList.add("light-theme")
      document.body.classList.remove("dark-theme")
      localStorage.setItem("theme", "light")
    }
  }, [isDarkMode])

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      <div className={`toggle-track ${isDarkMode ? "dark" : "light"}`}>
        <div className="toggle-thumb">
          {isDarkMode ? <FiMoon className="moon-icon" /> : <FiSun className="sun-icon" />}
        </div>
      </div>
    </button>
  )
}

export default ThemeToggle

