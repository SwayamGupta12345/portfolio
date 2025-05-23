import React, { useState, useEffect } from "react";
import { IoHome, IoPerson } from "react-icons/io5";
import { FaGraduationCap, FaMicrochip, FaBarsProgress } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
const navItems = [
    { id: "home", icon: <IoHome />, label: "Home" },
    { id: "about", icon: <IoPerson />, label: "About" },
    { id: "education", icon: <FaGraduationCap />, label: "Education" },
    // { id: "skills", icon: <FaMicrochip />, label: "Skills" },
    { id: "projects", icon: <FaBarsProgress />, label: "Projects" },
    { id: "contact", icon: <MdEmail />, label: "Contact" }
];

const Navbot = () => {
    const [hovered, setHovered] = useState(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsVisible(true), 300); // Delay for a smooth effect
    }, []);

    const scrollToSection = (id) => {
        if (id === "home") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else if (id === "contact") {
            window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
        } else {
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        }
    };    

    return (
        <div className={`navbot ${isVisible ? "visible" : "hidden"}`}>
            {navItems.map(({ id, icon, label }) => (
                <div
                    key={id}
                    className="nav-item"
                    onMouseEnter={() => setHovered(id)}
                    onMouseLeave={() => setHovered(null)}
                    onClick={() => scrollToSection(id)}
                >
                    {icon}
                    {hovered === id && <span className="nav-label">{label}</span>}
                </div>
            ))}
        </div>
    );
};

export default Navbot;
