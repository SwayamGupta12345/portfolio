"use client"

import { useState, useEffect } from "react"
import "./education.css"
import { motion } from "framer-motion"

const Education = () => {
  const [isVisible, setIsVisible] = useState(false)

  const educationData = [
    {
      year: "2023 - Present",
      title: "Bachelor's in Computer Science",
      institution: "Jaypee Institute of Information Technology",
      description: "Exploring web development, AI, and scalable architectures while contributing to tech communities.",
    },
    {
      year: "2022",
      title: "XII th",
      institution: "Gulab Rai Montessori, Nainital Road, Bareilly",
      description:
        "Focused on mathematics, programming, and analytical problem-solving, fueling my interest in software development.",
    },
    {
      year: "2020",
      title: "X th",
      institution: "B.B.L Public School",
      description: "Developed a strong foundation in logic, critical thinking, and technology-driven problem-solving.",
    },
  ]

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300)
  }, [])

  return (
    <div className={`portfolio-container education-container ${isVisible ? "show" : ""}`} id="education">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Education Journey
      </motion.h2>

      <div className="timeline">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className="timeline-card"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="timeline-header">
              <span className="timeline-year">{edu.year}</span>
              <h3 className="degree">{edu.title}</h3>
            </div>
            <h3 className="institution">{edu.institution}</h3>
            <p className="description">{edu.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Education

