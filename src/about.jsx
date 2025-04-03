"use client"

import { useState, useEffect } from "react"
import "./about.css"
import SkillsOrbit2 from "./SkillsOrbit2"
import { motion } from "framer-motion"

const About = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300)
  }, [])

  return (
    <div className={`portfolio-container  about-section  ${isVisible ? "show" : ""}`} id="about">
      <div className="about-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="about-text"
        >
          <h2 className="section-title">About Me</h2>
          <p className="slogan">
            <strong>Building seamless experiences, one line of code at a time.</strong>
          </p>
          <p className="about-description">
            I'm <span className="highlight">Swayam Gupta</span>, a passionate
            <strong> Web Developer, Software Engineer, and AI Enthusiast</strong>.
          </p>
          <p className="about-description">
            I specialize in crafting high-performance applications with a focus on simplicity and efficiency. My
            expertise spans <strong>MERN stack, FastAPI and AI integration.</strong>
          </p>
          <p className="about-description">
            Beyond coding, I actively contribute to the <strong>AI / ML community</strong> and work on tools that
            enhance productivity.
          </p>
          <p className="about-tagline">
            <span>🚀 Always exploring new tech and open to collaborations!</span>
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="skills-orbit-container"
        >
          <SkillsOrbit2 />
        </motion.div>
       
        
      </div>
      
    </div>
  )
}

export default About

