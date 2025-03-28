import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { FaCode, FaDatabase, FaRobot, FaGlobe } from "react-icons/fa";
import "./facecard.css";
import "./projects.css";
import "./skills.css";
import SkillsOrbit2 from "./SkillsOrbit2";
// const skills = [{
//         category: "Web Development",
//         icon: <FaGlobe className="skill-icon" />, 
//         items: [
//         "FastAPI", "Flask"
//         ],
//     },];
const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  // const [expanded, setExpanded] = useState(null);
  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300);
  }, []);
  // const toggleExpand = (index) => {
  //   setExpanded(expanded === index ? null : index);
  // };
  return (
    <div className={`portfolio-container ${isVisible ? "show" : ""}`} id="skills">
      {/* <div className="pagetitle"> <FaMicrochip/> &nbsp;Skills </div> */}
      {/* <SkillsOrbit1/> */}
      <SkillsOrbit2 />
      {/* <SkillsOrbit3/> */}
      {/* <h2 className="skills-title"></h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="skill-card"
              onClick={() => toggleExpand(index)}
              whileHover={{ scale: 1.05 }}
            >
              <div className="skill-header">
                {skill.icon}
                <h3>{skill.category}</h3>
              </div>
              {expanded === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                  className="skill-items"
                >
                  {skill.items.map((item, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="skill-item"
                    >
                      {item}
                    </motion.span>
                  ))}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div> */}
    </div>
    // </div>
  );
};

export default Skills;