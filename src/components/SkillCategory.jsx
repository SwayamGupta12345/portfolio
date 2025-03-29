"use client";
import { motion } from "framer-motion";
import "../styles/SkillCategory.css";

const SkillCategory = ({ category, icon, skills }) => {
  return (
    <motion.div
      className="skill-category"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }} // Trigger when at least 20% visible
      transition={{ duration: 0.5 }}
    >
      <div className="skill-category-header">
        {icon}
        <h3>{category}</h3>
      </div>
      <div className="skill-list">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-item"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <div className="skill-name">{skill.name}</div>
            <div className="skill-bar-container">
              <motion.div
                className="skill-bar"
                key={skill.name}
                initial={{ width: "0%" }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: false }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              ></motion.div>

            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCategory;
