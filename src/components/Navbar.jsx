"use client"

import { useState, useEffect, useContext } from "react"
import { IoHome, IoPerson } from "react-icons/io5"
import { FaGraduationCap, FaMicrochip, FaBarsProgress } from "react-icons/fa6"
import { MdEmail, MdClose } from "react-icons/md"
import { RiMenu4Line } from "react-icons/ri"
import ThemeToggle from "./ThemeToggle"
import "../styles/Navbar.css"

const navItems = [
  { id: "home", icon: <IoHome />, label: "Home" },
  { id: "about", icon: <IoPerson />, label: "About" },
  { id: "education", icon: <FaGraduationCap />, label: "Education" },
  { id: "skills", icon: <FaMicrochip />, label: "Skills" },
  { id: "projects", icon: <FaBarsProgress />, label: "Projects" },
  { id: "contact", icon: <MdEmail />, label: "Contact" },
]

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300)

    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setScrolled(scrollPosition > 50)

      // Determine active section based on scroll position
      const sections = navItems.map((item) => item.id)
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else if (id === "contact") {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  return (
    <>
      <nav className={`navbar ${isVisible ? "visible" : ""} ${scrolled ? "scrolled" : ""}`}>
        <div className="logo">
          <span>Swayam Gupta</span>
        </div>

        <div className={`nav-links ${mobileMenuOpen ? "active" : ""}`}>
          {navItems.map(({ id, icon, label }) => (
            <div
              key={id}
              className={`nav-item ${activeSection === id ? "active" : ""}`}
              onClick={() => scrollToSection(id)}
            >
              <span className="nav-icon">{icon}</span>
              <span className="nav-label">{label}</span>
            </div>
          ))}
          <div className="nav-theme-toggle">
            <ThemeToggle />
          </div>
        </div>

        <div className="mobile-nav-controls">
          <ThemeToggle />
          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <MdClose /> : <RiMenu4Line />}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`mobile-menu-overlay ${mobileMenuOpen ? "active" : ""}`}
        onClick={() => setMobileMenuOpen(false)}
      ></div>
    </>
  )
}

export default Navbar

