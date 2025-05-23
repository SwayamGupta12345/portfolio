"use client"

import { useState, useEffect } from "react"
import { FiArrowUp } from "react-icons/fi";
import "../styles/BackToTop.css"

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (

    <button className={`back-to-top ${isVisible ? "visible" : ""}`} onClick={scrollToTop} aria-label="Back to top">
  <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
    <FiArrowUp size={24} style={{ color: "white" }} />
    
  </span>
</button>


  )
}

export default BackToTop

