// "use client"

// import { useState, useEffect } from "react"
// import { IoHome, IoPerson } from "react-icons/io5"
// import { FaGraduationCap, FaMicrochip, FaBarsProgress } from "react-icons/fa6"
// import { MdEmail, MdClose } from "react-icons/md"
// import { RiMenu4Line } from "react-icons/ri"
// import ThemeToggle from "./ThemeToggle"
// import "../styles/Navbar.css"

// const navItems = [
//   { id: "home", icon: <IoHome />, label: "Home" },
//   { id: "about", icon: <IoPerson />, label: "About" },
//   { id: "education", icon: <FaGraduationCap />, label: "Education" },
//   { id: "skills", icon: <FaMicrochip />, label: "Skills" },
//   { id: "projects", icon: <FaBarsProgress />, label: "Projects" },
//   { id: "contact", icon: <MdEmail />, label: "Contact" },
// ]

// const Navbar = () => {
//   const [isVisible, setIsVisible] = useState(false)
//   const [scrolled, setScrolled] = useState(false)
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
//   const [activeSection, setActiveSection] = useState("home")

//   useEffect(() => {
//     setTimeout(() => setIsVisible(true), 300)

//     const handleScroll = () => {
//       const scrollPosition = window.scrollY + window.innerHeight * 0.4; // Adjust threshold

//       let newActiveSection = "home"; // Default to home

//       navItems.forEach(({ id }) => {
//         const section = document.getElementById(id);
//         if (section) {
//           const sectionTop = section.offsetTop - 100; // Offset to detect earlier
//           const sectionHeight = section.offsetHeight;

//           if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
//             newActiveSection = id;
//           }
//         }
//       });

//       setActiveSection(newActiveSection);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []); // Run on mount

//   const scrollToSection = (id) => {
//     const section = document.getElementById(id);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth", block: "start" });
//     }
//     setMobileMenuOpen(false);
//   }

//   return (
//     <>
//       <nav className={`navbar ${isVisible ? "visible" : ""} ${scrolled ? "scrolled" : ""}`}>
//         <div className="logo">
//           <span>Swayam Gupta</span>
//         </div>

//         <div className={`nav-links ${mobileMenuOpen ? "active" : ""}`}>
//           {navItems.map(({ id, icon, label }) => (
//             <div
//               key={id}
//               className={`nav-item ${activeSection === id ? "active" : ""}`}
//               onClick={() => scrollToSection(id)}
//             >
//               <span className="nav-icon">{icon}</span>
//               <span className="nav-label">{label}</span>
//             </div>
//           ))}
//           <div className="nav-theme-toggle">
//             <ThemeToggle />
//           </div>
//         </div>

//         <div className="mobile-nav-controls">
//           <ThemeToggle />
//           <button
//             className="mobile-menu-toggle"
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
//           >
//             {mobileMenuOpen ? <MdClose /> : <RiMenu4Line />}
//           </button>
//         </div>
//       </nav>

//       {/* Mobile menu overlay */}
//       <div
//         className={`mobile-menu-overlay ${mobileMenuOpen ? "active" : ""}`}
//         onClick={() => setMobileMenuOpen(false)}
//       ></div>
//     </>
//   )
// }

// export default Navbar
"use client"

import { useState, useEffect, useRef } from "react"
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
  const navRef = useRef(null) // Ref to track navbar

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300)

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.4

      let newActiveSection = "home"
      navItems.forEach(({ id }) => {
        const section = document.getElementById(id)
        if (section) {
          const sectionTop = section.offsetTop - 100
          const sectionHeight = section.offsetHeight

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            newActiveSection = id
          }
        }
      })
      setActiveSection(newActiveSection)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMobileMenuOpen(false)
      }
    }

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    } else {
      document.removeEventListener("mousedown", handleClickOutside)
    }

    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [mobileMenuOpen])

  const scrollToSection = (id) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    setMobileMenuOpen(false)
  }

  return (
    <>
      <nav ref={navRef} className={`navbar ${isVisible ? "visible" : ""} ${scrolled ? "scrolled" : ""}`}>
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
