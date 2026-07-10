import { motion } from "framer-motion";
import PropTypes from "prop-types";
import "../styles/SkillCategory.css";
import {
  FaCode,
  FaPython,
  FaPhp,
  FaJs,
  FaReact,
  FaServer,
  FaDatabase,
  FaTools,
  FaMobileAlt,
  FaKey,
  FaGithub,
  FaDocker,
  FaNodeJs,
} from "react-icons/fa";
import { RiOpenaiFill, RiGeminiFill } from "react-icons/ri";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiFastapi,
  SiRender,
  SiMongodb,
  SiVercel,
  SiHtml5,
  SiCplusplus,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";

import { GrMysql } from "react-icons/gr";
import { MdPhoneIphone } from "react-icons/md";

// Icon map
const ICON_MAP = {
  FaCode: <FaCode />,
  FaPython: <FaPython />,
  FaPhp: <FaPhp />,
  FaJs: <FaJs />,
  FaReact: <FaReact />,
  FaServer: <FaServer />,
  FaDatabase: <FaDatabase />,
  FaTools: <FaTools />,
  FaMobileAlt: <FaMobileAlt />,
  FaKey: <FaKey />,
  FaGithub: <FaGithub />,
  FaDocker: <FaDocker />,
  FaNodeJs: <FaNodeJs />,
  SiTypescript: <SiTypescript />,
  SiNextdotjs: <SiNextdotjs />,
  SiTailwindcss: <SiTailwindcss />,
  SiExpress: <SiExpress />,
  SiFastapi: <SiFastapi />,
  RiOpenaiFill: <RiOpenaiFill />,
  SiRender: <SiRender />,
  SiMongodb: <SiMongodb />,
  SiVercel: <SiVercel />,
  RiGeminiFill: <RiGeminiFill />,
  GrMysql: <GrMysql />,
  MdPhoneIphone: <MdPhoneIphone />,
  SiHtml5: <SiHtml5 />,
  SiCss3: <DiCss3 />,
  SiCplusplus: <SiCplusplus />,
};

const SkillCategory = ({ category, icon, skills }) => {
  const categoryIcon = ICON_MAP[icon]; // icon is a string like "FaCode"

  return (
    <motion.div
      className="skill-category"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <div className="skill-category-header">
        {categoryIcon}
        <h3>{category}</h3>
      </div>

      <div className="skill-list-badges">
        {skills.map((skill, index) => {
          const skillName = typeof skill === "string" ? skill : skill.name;
          const skillIcon =
            typeof skill === "object" && skill.icon
              ? ICON_MAP[skill.icon]
              : null;

          return (
            <motion.div
              key={index}
              className="skill-badge shimmer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              {skillIcon && <span className="badge-icon">{skillIcon}</span>}
              <span>{skillName}</span>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

// ✅ PropTypes validation
SkillCategory.propTypes = {
  category: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        icon: PropTypes.string, // now string instead of JSX
      }),
    ]),
  ).isRequired,
};

export default SkillCategory;
