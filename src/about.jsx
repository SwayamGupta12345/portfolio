import React, { useState, useEffect } from "react";
import "./facecard.css";
import Face from "./face"
import Navbot from "./navbot"
import { IoPersonOutline } from "react-icons/io5";

const About = () => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        setTimeout(() => setIsVisible(true), 300); // Delay for a smooth effect
    }, []);
    return (
        <div className={`portfolio-container ${isVisible ? "show" : ""}`} id="about">
            <div className="pagetitle"> <IoPersonOutline /> &nbsp;About </div>
            {/* <Face /> */}
            {/* Right Section */}
            <div className="intro-section">
                <h1>About Me</h1>
                <p>
                    <strong className="slogan">Building seamless experiences, one line of code at a time.</strong>
                    <br />
                    I'm <span className="highlight">Swayam Gupta</span>, a passionate
                    <strong> Web Developer, Software Engineer, and AI Enthusiast</strong>.
                    <br />
                    I specialize in crafting high-performance applications with a focus on simplicity and efficiency.
                    <br />
                    My expertise spans<strong> MERN stack, FastAPI and AI integration.</strong>
                    <br />Beyond coding, I actively contribute to the <strong>AI / ML community</strong> and work on tools
                    that enhance productivity.<br /> <br />
                    <span >🚀 Always exploring new tech and open to collaborations!</span>
                </p>

            </div>
        </div>

    );
};

export default About;