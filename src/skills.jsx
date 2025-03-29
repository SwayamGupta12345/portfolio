"use client"

import { useState, useEffect } from "react"
import "./skills.css"
import { FaCode, FaDatabase, FaServer, FaTools, FaMobileAlt } from "react-icons/fa"
import { motion } from "framer-motion"
import SkillCategory from "./components/SkillCategory"
import "../src/styles/SkillCategory.css"
const Skills = () => {
  const [isVisible, setIsVisible] = useState(false)

  const skillCategories = [
    {
      category: "Programming",
      icon: <FaCode className="category-icon" />,
      skills: [
        { name: "C / C++", level: 90 },
        { name: "Python", level: 85 },
        { name: "Go lang", level: 70 },
        { name: "Php", level: 85 },
      ],
    },{
      category: "Frontend Development",
      icon: <FaCode className="category-icon" />,
      skills: [
        { name: "HTML/CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React.js", level: 80 },
        { name: "Next.js", level: 75 },
        { name: "Tailwind CSS", level: 85 },
      ],
    },
    {
      category: "Backend Development",
      icon: <FaServer className="category-icon" />,
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express.js", level: 75 },
        { name: "FastAPI", level: 70 },
        { name: "Flask", level: 65 },
        { name: "REST API Design", level: 85 },
      ],
    },
    {
      category: "Databases",
      icon: <FaDatabase className="category-icon" />,
      skills: [
        { name: "MongoDB", level: 80 },
        { name: "MySQL", level: 75 },
        { name: "PostgreSQL", level: 65 },
        { name: "Firebase", level: 70 },
      ],
    },
    {
      category: "Tools & Technologies",
      icon: <FaTools className="category-icon" />,
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "Docker", level: 65 },
        { name: "AWS", level: 60 },
        { name: "CI/CD", level: 70 },
        { name: "Vercel/Netlify", level: 85 },
      ],
    },
    {
      category: "Mobile Development",
      icon: <FaMobileAlt className="category-icon" />,
      skills: [
        { name: "React Native", level: 70 },
        { name: "Flutter", level: 60 },
        { name: "Responsive Design", level: 85 },
      ],
    },
  ]

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300)
  }, [])

  return (
    <div className={`portfolio-container skills-container ${isVisible ? "show" : ""}`} id="skills">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Skills & Expertise
      </motion.h2>

      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <SkillCategory key={index} category={category.category} icon={category.icon} skills={category.skills} />
        ))}
      </div>
    </div>
  )
}

export default Skills

