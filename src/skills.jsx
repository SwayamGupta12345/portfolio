import { useState, useEffect } from "react";
import "./skills.css";
import {
  FaCode,
  FaDatabase,
  FaServer,
  FaTools,
  FaMobileAlt,
  FaBrain,
} from "react-icons/fa";
import { RiOpenaiFill, RiGeminiFill } from "react-icons/ri";
import { motion } from "framer-motion";
import SkillCategory from "./components/SkillCategory";
import "../src/styles/SkillCategory.css";
const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillCategories = [
    {
      category: "Programming",
      icon: "FaCode",
      skills: [
        { name: "C / C++", icon: "SiCplusplus" },
        { name: "Python", icon: "FaPython" },
        { name: "PHP", icon: "FaPhp" },
        { name: "JavaScript", icon: "FaJs" },
        { name: "TypeScript", icon: "SiTypescript" },
      ],
    },
    {
      category: "Frontend Development",
      icon: "FaCode",
      skills: [
        { name: "HTML/CSS", icon: "SiHtml5" },
        { name: "React.js", icon: "FaReact" },
        { name: "Next.js", icon: "SiNextdotjs" },
        { name: "Tailwind CSS", icon: "SiTailwindcss" },
        { name: "TypeScript", icon: "SiTypescript" },
      ],
    },
    {
      category: "Backend Development",
      icon: "FaServer",
      skills: [
        { name: "Node.js", icon: "FaNodeJs" },
        { name: "Express.js", icon: "SiExpress" },
        { name: "FastAPI", icon: "SiFastapi" },
        { name: "REST API Design" },
        { name: "JWT/OAuth", icon: "FaKey" },
        { name: "CrewAI & LLM APIs", icon: "RiOpenaiFill " },
      ],
    },
    {
      category: "Databases",
      icon: "FaDatabase",
      skills: [
        { name: "MongoDB", icon: "SiMongodb" },
        { name: "MySQL", icon: "GrMysql" },
        { name: "Pinecone", icon: "SiPinecone" },
      ],
    },
    {
      category: "Tools & Technologies",
      icon: "FaTools",
      skills: [
        { name: "Git & GitHub", icon: "FaGithub" },
        { name: "Docker", icon: "FaDocker" },
        { name: "Render", icon: "SiRender" },
        { name: "Vercel", icon: "SiVercel" },
      ],
    },
    {
      category: "Mobile Development",
      icon: "FaMobileAlt",
      skills: [{ name: "Responsive Design", icon: "MdPhoneIphone" }],
    },
    {
      category: "AI & Data",
      icon: "FaBrain",
      skills: [
        { name: "Prompt Engineering", icon: "RiOpenaiFill" },
        { name: "Generative AI (OpenAI/Gemini)", icon: "RiGeminiFill" },
        { name: "AI Agents (CrewAI)", icon: "RiOpenaiFill" },
        { name: "RAG Pipelines", icon: "RiOpenaiFill" },
      ],
    },
  ];

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300);
  }, []);

  return (
    <div
      className={`portfolio-container skills-container ${
        isVisible ? "show" : ""
      }`}
      id="skills"
    >
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
          <SkillCategory
            key={index}
            category={category.category}
            icon={category.icon}
            skills={category.skills}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
