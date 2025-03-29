import React, { useEffect, useState } from "react";
import { FaReact, FaNodeJs, FaJs, FaCode } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTypescript, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import "./SkillsOrbit.css";
import { FaPython, } from "react-icons/fa";
import { SiCplusplus, SiGo } from "react-icons/si";
import { DiMysql, DiPhp } from "react-icons/di";
import { TbLetterC } from "react-icons/tb"; // Better C icon

const skills = [
    { icon: <TbLetterC color="#A8B9CC" /> }, // C
    { icon: <SiCplusplus color="#00599C" /> }, // C++
    { icon: <SiGo color="#00ADD8" /> }, // Go
    { icon: <FaPython color="#3776AB" /> }, // Python
    { icon: <FaJs color="#F7DF1E" /> }, // JavaScript
    { icon: <DiMysql color="#4479A1" /> }, // MySQL
    { icon: <SiMongodb color="#4DB33D" /> },
    { icon: <DiPhp color="#777BB4" /> }, // PHP
];
const skill2 = [
  { icon: <FaReact color="#61DBFB" /> },
  { icon: <FaNodeJs color="#8CC84B" /> },
  { icon: <FaJs color="#F7DF1E" /> },
  { icon: <SiTypescript color="#3178C6" /> },
  { icon: <SiNextdotjs color="white" /> },
  { icon: <SiExpress color="gray" /> },
  { icon: <SiMongodb color="#4DB33D" /> },
  { icon: <SiTailwindcss color="#38B2AC" /> },
];

const SkillsOrbit3 = () => {
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRotation((prev) => prev + 2); // 🔥 Increase speed by changing +2
        }, 50); // 🔥 Reduce interval for smoother + faster effect
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="orbit-container">
            <div className="center-text">Skills</div>
            <div className="orbit" style={{ transform: `rotate(${-rotation}deg)` }}>
                {skills.map((skill, index) => {
                    const radius = 120;
                    const angle = (360 / skills.length) * index;
                    return (
                        <div
                            key={index}
                            className="orbit-item"
                            style={{
                                transform: `rotate(${angle}deg) translate(${radius}px) rotate(${rotation - angle}deg)`,
                            }}
                        >
                            {skill.icon}
                        </div>
                    );
                })}
            </div>
            <div className="orbit" style={{ transform: `rotate(${rotation}deg)` }}>
                {skill2.map((skill, index) => {
                    const radius = 220;
                    const angle = (360 / skill2.length) * index;
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
    );
};

export default SkillsOrbit3;
