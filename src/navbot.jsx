import React, { useState } from "react";
import { IoHomeOutline, IoPersonOutline } from "react-icons/io5";
import { FaGraduationCap, FaMicrochip, FaBarsProgress } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

const navItems = [
    { id: "home", icon: <IoHomeOutline />, label: "Home" },
    { id: "about", icon: <IoPersonOutline />, label: "About" },
    { id: "education", icon: <FaGraduationCap />, label: "Education" },
    { id: "skills", icon: <FaMicrochip />, label: "Skills" },
    { id: "projects", icon: <FaBarsProgress />, label: "Projects" },
    { id: "contact", icon: <MdOutlineEmail />, label: "Contact" }
];

const Navbot = () => {
    const [hovered, setHovered] = useState(null);

    const scrollToSection = (id) => {
        if (id === "home") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="navbot">
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
