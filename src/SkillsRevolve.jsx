// import React, { useEffect, useState } from "react";
// import { FaReact, FaNodeJs, FaJs } from "react-icons/fa";
// import { SiMongodb, SiExpress, SiTypescript, SiNextdotjs, SiTailwindcss } from "react-icons/si";
// import "./SkillsOrbit.css";

// const skills = [
//   { icon: <FaReact color="#61DBFB" /> },
//   { icon: <FaNodeJs color="#8CC84B" /> },
//   { icon: <FaJs color="#F7DF1E" /> },
//   { icon: <SiTypescript color="#3178C6" /> },
//   { icon: <SiNextdotjs color="white" /> },
//   { icon: <SiExpress color="gray" /> },
//   { icon: <SiMongodb color="#4DB33D" /> },
//   { icon: <SiTailwindcss color="#38B2AC" /> },
// ];

// const SkillsOrbit = () => {
//   const [rotation, setRotation] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setRotation((prev) => prev + 1); // Rotates smoothly over time
//     }, 50); // Adjust speed if needed
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="orbit-container">
//       <div className="center-text">Skills</div>
//       <div className="orbit" style={{ transform: `rotate(${rotation}deg)` }}>
//         {skills.map((skill, index) => {
//           const radius = 120;
//           const angle = (360 / skills.length) * index;
//           return (
//             <div
//               key={index}
//               className="orbit-item"
//               style={{
//                 transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${rotation + angle}deg)`, // Counter-rotating effect
//               }}
//             >
//               {skill.icon}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default SkillsOrbit;
import React, { useEffect, useState } from "react";
import { FaReact, FaNodeJs, FaJs } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTypescript, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import "./SkillsOrbit.css";

const skills = [
  { icon: <FaReact color="#61DBFB" /> },
  { icon: <FaNodeJs color="#8CC84B" /> },
  { icon: <FaJs color="#F7DF1E" /> },
  { icon: <SiTypescript color="#3178C6" /> },
  { icon: <SiNextdotjs color="white" /> },
  { icon: <SiExpress color="gray" /> },
  { icon: <SiMongodb color="#4DB33D" /> },
  { icon: <SiTailwindcss color="#38B2AC" /> },
];

const SkillsOrbit1 = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => prev + 2); // 🔥 Increase speed by changing +2
    }, 40); // 🔥 Reduce interval to 30ms for smoother + faster effect
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="skillwrapper">
   
    <div className="orbit-container">
      <div className="center-text">&nbsp;&nbsp;Skills</div>
      <div className="orbit" style={{ transform: `rotate(${rotation}deg)` }}>
        {skills.map((skill, index) => {
          const radius = 120;
          const angle = (360 / skills.length) * index;
          return (
            <div
              key={index}
              className="orbit-item"
              style={{
                transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${rotation + angle}deg)`,
              }}
            >
              {skill.icon}
            </div>
          );
        })}
      </div>
    </div>
    </div>
  );
};

export default SkillsOrbit1;
