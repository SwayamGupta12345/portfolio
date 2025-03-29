// import React, { useState, useEffect } from "react";
// // import { motion } from "framer-motion";
// // import { FaCode, FaDatabase, FaRobot, FaGlobe } from "react-icons/fa";
// import "./facecard.css";
// import "./projects.css";
// import "./skills.css";
// import SkillsOrbit2 from "./SkillsOrbit2";
// // const skills = [{
// //         category: "Web Development",
// //         icon: <FaGlobe className="skill-icon" />, 
// //         items: [
// //         "FastAPI", "Flask"
// //         ],
// //     },];
// const Skills = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   // const [expanded, setExpanded] = useState(null);
//   useEffect(() => {
//     setTimeout(() => setIsVisible(true), 300);
//   }, []);
//   // const toggleExpand = (index) => {
//   //   setExpanded(expanded === index ? null : index);
//   // };
//   return (
//     <div className={`portfolio-container ${isVisible ? "show" : ""}`} id="skills">
//       {/* <div className="pagetitle"> <FaMicrochip/> &nbsp;Skills </div> */}
//       {/* <SkillsOrbit1/> */}
//       <SkillsOrbit2 />
//       {/* <SkillsOrbit3/> */}
//       {/* <h2 className="skills-title"></h2>
//         <div className="skills-grid">
//           {skills.map((skill, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.2 }}
//               className="skill-card"
//               onClick={() => toggleExpand(index)}
//               whileHover={{ scale: 1.05 }}
//             >
//               <div className="skill-header">
//                 {skill.icon}
//                 <h3>{skill.category}</h3>
//               </div>
//               {expanded === index && (
//                 <motion.div
//                   initial={{ opacity: 0, height: 0 }}
//                   animate={{ opacity: 1, height: "auto" }}
//                   transition={{ duration: 0.3 }}
//                   className="skill-items"
//                 >
//                   {skill.items.map((item, i) => (
//                     <motion.span
//                       key={i}
//                       whileHover={{ scale: 1.1 }}
//                       transition={{ type: "spring", stiffness: 300 }}
//                       className="skill-item"
//                     >
//                       {item}
//                     </motion.span>
//                   ))}
//                 </motion.div>
//               )}
//             </motion.div>
//           ))}
//         </div> */}
//     </div>
//     // </div>
//   );
// };

// export default Skills;
"use client"

import { useState, useEffect } from "react"
import "./skills.css"
import { FaCode, FaDatabase, FaServer, FaTools, FaMobileAlt } from "react-icons/fa"
import { motion } from "framer-motion"
import SkillCategory from "./components/SkillCategory"

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false)

  const skillCategories = [
    {
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

