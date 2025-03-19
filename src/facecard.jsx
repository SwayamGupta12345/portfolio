import React, { useState, useEffect } from "react";
import "./facecard.css";
import { LuDownload } from "react-icons/lu";
import Face from "./face"
import { IoHomeOutline, IoPersonOutline } from "react-icons/io5";

const Facecard = () => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        setTimeout(() => setIsVisible(true), 300); // Delay for a smooth effect
    }, []);
    return (   
    <>
        <div className={`portfolio-container ${isVisible ? "show" : ""}`} id="home">
        <div className="pagetitle"> <IoHomeOutline/> &nbsp;Home </div>
            <Face/>
            {/* Right Section */}
            <div className="intro-section">
                <h1>
                    Hello There, I'm <span className="highlight">Swayam</span>,
                </h1>
                <h2>Web Developer and Software Engineer</h2>
                <p>
                    I code beautifully elegant simple things and I love what I do. Just keeping things simple like that!
                </p>
                <button className="download" onClick={() => window.open("https://drive.google.com/file/d/1aDle9o1bdLP6Yl42LK-6SElkQrol9WRv/view?usp=drive_link", "_blank")}>
                    <LuDownload /> Download CV
                </button>
                
            </div>
        </div></>
    );
};

export default Facecard;