import React, { useEffect, useState } from "react";
import {
    FaReact, FaNodeJs, FaJs, FaPython, FaCode, FaGithub
} from "react-icons/fa";
import {
    SiMongodb, SiExpress, SiTypescript, SiNextdotjs, SiTailwindcss,
    SiCplusplus, SiGo, SiOllama, SiFlask, SiFastapi,SiC
} from "react-icons/si";
import { DiMysql, DiPhp } from "react-icons/di";
import { TbLetterC } from "react-icons/tb"; // Better C icon
import "./SkillsOrbit.css";
import "./styles/theme.css"

const skills = [
    { icon: <SiC color="#A8B9CC" /> }, // C
    { icon: <SiCplusplus color="#00599C" /> }, // C++
    // { icon: <SiGo color="#00ADD8" /> }, 
    { icon: <FaPython color="#3776AB" /> }, // Python
    { icon: <FaJs color="#F7DF1E" /> }, // JavaScript
    { icon: <DiMysql color="#4479A1" /> }, // MySQL
    { icon: <FaGithub color="var(--text-primary)" /> },
    { icon: <DiPhp color="#777BB4" /> }, // PHP
];

const skill2 = [
    { icon: <FaReact color="#61DBFB" /> },
    { icon: <FaNodeJs color="#8CC84B" /> },
    { icon: <SiTypescript color="#3178C6" /> },
    { icon: <SiNextdotjs color="var(--text-primary)" /> },
    { icon: <SiExpress color="var(--text-primary)" /> },
    { icon: <SiMongodb color="#4DB33D" /> },
    { icon: <SiTailwindcss color="#38B2AC" /> },
    // { icon: <SiOllama color="var(--text-primary)" /> },  // Ollama - Dark Orange
    // { icon: <SiFastapi color="#05998B" /> }, // FastAPI - Teal
    // { icon: <SiFlask color="var(--text-primary)" /> },
];


const SkillsOrbit2 = () => {
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRotation((prev) => prev + 2); // 🔥 Increase speed by changing +2
        }, 100); // 🔥 Reduce interval for smoother + faster effect
        return () => clearInterval(interval);
    }, []);
    const [radius1, setRadius1] = useState(120);
    const [radius2, setRadius2] = useState(220);

    useEffect(() => {
        const updateRadius = () => {
            const width = window.innerWidth;

            if (width < 480) {
                // Mobile (small)
                setRadius1(50);
                setRadius2(90);
            } else if (width < 768) {
                // Mobile (large)
                setRadius1(70);
                setRadius2(120);
            } else if (width < 1024) {
                // Tablets
                setRadius1(90);
                setRadius2(140);
            } else if (width < 1280) {
                // Small laptops
                setRadius1(100);
                setRadius2(160);
            } else {
                // Desktops
                setRadius1(120);
                setRadius2(220);
            }
        };

        updateRadius(); // Set on initial load
        window.addEventListener("resize", updateRadius);
        return () => window.removeEventListener("resize", updateRadius);
    }, []);


    return (
        <div className="orbit-container">
            <div className="center-text"> Skills</div>
            <div className="orbit" style={{ transform: `rotate(${-rotation}deg)` }}>
                {skills.map((skill, index) => {
                    // const radius = 120;
                    const angle = (360 / skills.length) * index;
                    return (
                        <div
                            key={index}
                            className="orbit-item"
                            style={{
                                transform: `rotate(${angle}deg) translate(${radius1}px) rotate(${rotation - angle}deg)`,
                            }}
                        >
                            {skill.icon}
                        </div>
                    );
                })}
            </div>
            <div className="orbit" style={{ transform: `rotate(${rotation}deg)` }}>
                {skill2.map((skill, index) => {
                    // const radius = 220;
                    const angle = (360 / skill2.length) * index;
                    return (
                        <div
                            key={index}
                            className="orbit-item"
                            style={{
                                transform: `rotate(${angle}deg) translate(${radius2}px) rotate(-${rotation + angle}deg)`,
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

export default SkillsOrbit2;
