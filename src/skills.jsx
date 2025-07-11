"use client";

import { useState, useEffect } from "react";
import "./skills.css";
import {
  FaCode,
  FaDatabase,
  FaServer,
  FaTools,
  FaMobileAlt,
  FaBrain
} from "react-icons/fa";
// import { FaReact, FaNodeJs, FaPython, FaDocker,FaPhp,
//   FaGitAlt,
//   FaGithub,
//   FaJs,
//   FaHtml5,
//   FaCss3Alt, } from "react-icons/fa";
// import { SiNextdotjs, SiMongodb, SiMysql, SiTailwindcss, SiFastapi,SiTypescript,
  
//   SiExpress,
//   SiHtml5,
//   SiCss3,
//   SiVercel,
//   SiPinecone,
//   SiRender,
//   SiOpenai,
//   SiGooglecolab, } from "react-icons/si";
import { motion } from "framer-motion";
import SkillCategory from "./components/SkillCategory";
import "../src/styles/SkillCategory.css";
const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  // const skillCategories = [
  //   {
  //     category: "Programming",
  //     icon: <FaCode className="category-icon" />,
  //     skills: [
  //       { name: "C / C++", level: 90 },
  //       { name: "Python", level: 85 },
  //       // { name: "Go lang", level: 50 },
  //       { name: "Php", level: 85 },
  //       { name: "JavaScript", level: 85 },
  //       { name: "TypeScript", level: 75 },
  //     ],
  //   },
  //   {
  //     category: "Frontend Development",
  //     icon: <FaCode className="category-icon" />,
  //     skills: [
  //       { name: "HTML/CSS", level: 90 },
  //       { name: "JavaScript", level: 85 },
  //       { name: "TypeScript", level: 65 },
  //       { name: "React.js", level: 75 },
  //       { name: "Next.js", level: 75 },
  //       { name: "Tailwind CSS", level: 75 },
  //     ],
  //   },
  //   {
  //     category: "Backend Development",
  //     icon: <FaServer className="category-icon" />,
  //     skills: [
  //       { name: "Node.js", level: 85 },
  //       { name: "Express.js", level: 75 },
  //       { name: "FastAPI", level: 65 },
  //       { name: "REST API Design", level: 85 },
  //       { name: "Authentication (JWT/OAuth)", level: 75 },
  //       { name: "CrewAI & LLM APIs", level: 60 }, // For AI assistant & chatbot work
  //     ],
  //   },
  //   {
  //     category: "Databases",
  //     icon: <FaDatabase className="category-icon" />,
  //     skills: [
  //       { name: "MongoDB", level: 80 },
  //       { name: "MySQL", level: 85 },
  //       { name: "Pinecone", level: 70 }, // For vector databases
  //       // { name: "Redis", level: 60 },
  //       // { name: "PostgreSQL", level: 60 },
  //       // { name: "Firebase", level: 50 },
  //     ],
  //   },
  //   {
  //     category: "Tools & Technologies",
  //     icon: <FaTools className="category-icon" />,
  //     skills: [
  //       { name: "Git & GitHub", level: 80 },
  //       { name: "Docker", level: 65 },
  //       { name: "Render", level: 65 },
  //       // { name: "AWS", level: 60 },
  //       // { name: "CI/CD", level: 70 },
  //       { name: "Vercel", level: 85 },
  //     ],
  //   },
  //   {
  //     category: "Mobile Development",
  //     icon: <FaMobileAlt className="category-icon" />,
  //     skills: [
  //       // { name: "React Native", level: 70 },
  //       // { name: "Flutter", level: 60 },
  //       { name: "Responsive Design", level: 85 },
  //     ],
  //   },
  //   {
  //     category: "AI & Data",
  //     icon: <FaBrain className="category-icon" />,
  //     skills: [
  //       { name: "Prompt Engineering", level: 85 },
  //       { name: "Generative AI (Gemini)", level: 75 },
  //       { name: "AI Agents (CrewAI)", level: 70 },
  //       { name: "RAG Pipelines", level: 65 },
  //       // { name: "CSV Processing & Automation", level: 80 },
  //       // { name: "Matplotlib & Seaborn", level: 65 },
  //     ],
  //   },
  // ];
  // const skillCategories = [
  //   {
  //     category: "Programming",
  //     icon: <FaCode className="category-icon" />,
  //     skills: ["C / C++", "Python", "PHP", "JavaScript", "TypeScript"],
  //   },
  //   {
  //     category: "Frontend Development",
  //     icon: <FaCode className="category-icon" />,
  //     skills: ["HTML/CSS", "React.js", "Next.js", "Tailwind CSS", "TypeScript"],
  //   },
  //   {
  //     category: "Backend Development",
  //     icon: <FaServer className="category-icon" />,
  //     skills: [
  //       "Node.js",
  //       "Express.js",
  //       "FastAPI",
  //       "REST API Design",
  //       "JWT/OAuth",
  //       "CrewAI & LLM APIs",
  //     ],
  //   },
  //   {
  //     category: "Databases",
  //     icon: <FaDatabase className="category-icon" />,
  //     skills: ["MongoDB", "MySQL", "Pinecone"],
  //   },
  //   {
  //     category: "Tools & Technologies",
  //     icon: <FaTools className="category-icon" />,
  //     skills: ["Git & GitHub", "Docker", "Render", "Vercel"],
  //   },
  //   {
  //     category: "Mobile Development",
  //     icon: <FaMobileAlt className="category-icon" />,
  //     skills: ["Responsive Design"],
  //   },
  //   {
  //     category: "AI & Data",
  //     icon: <FaBrain className="category-icon" />,
  //     skills: [
  //       "Prompt Engineering",
  //       "Generative AI (OpenAI/Gemini)",
  //       "AI Agents (CrewAI)",
  //       "RAG Pipelines",
  //       // "CSV Automation",
  //       // "Matplotlib",
  //     ],
  //   },
  // ];
  // src/skills.jsx
const skillCategories = [
  {
    category: "Programming",
    icon: "FaCode",
    skills: [
      { name: "C / C++" , icon: "SiCplusplus" },
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
      { name: "CrewAI & LLM APIs", icon: "SiOpenai" },
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
      { name: "Prompt Engineering", icon: "SiOpenai" },
      { name: "Generative AI (OpenAI/Gemini)", icon: "SiGoogle" },
      { name: "AI Agents (CrewAI)", icon: "SiOpenai" },
      { name: "RAG Pipelines", icon: "SiOpenai" },
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
