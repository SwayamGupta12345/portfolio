
import { MdOutlineEmail } from "react-icons/md";
import "./facecard.css";
import { IoHomeOutline, IoPersonOutline } from "react-icons/io5";
import { FaGraduationCap } from "react-icons/fa6";
import { FaBarsProgress, FaMicrochip } from "react-icons/fa6";

const navbot = () => {
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <div className="navbot">
            <IoHomeOutline onClick={() => scrollToSection("home")}  className="navi"/>
            <IoPersonOutline onClick={() => scrollToSection("about")} className="navi" />
            <FaGraduationCap onClick={() => scrollToSection("education")} className="navi"/>
            <FaMicrochip onClick={() => scrollToSection("skills")} className="navi"/>
            <FaBarsProgress onClick={() => scrollToSection("projects")} className="navi" />
            <MdOutlineEmail onClick={() => scrollToSection("contact")} className="navi" />
        </div>

    );
};

export default navbot;