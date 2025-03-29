"use client"

import { useContext } from "react"
import { ThemeContext } from "../utils/ThemeContext"
import { FiSun, FiMoon } from "react-icons/fi"
import "../styles/ThemeToggle.css"

const ThemeToggle = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext)

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={isDarkTheme ? "Switch to light mode" : "Switch to dark mode"}
    >
      <div className={`toggle-track ${isDarkTheme ? "dark" : "light"}`}>
        <div className="toggle-thumb">
          {isDarkTheme ? <FiMoon className="moon-icon" /> : <FiSun className="sun-icon" />}
        </div>
      </div>
    </button>
  )
}

export default ThemeToggle

