import React, { useState, useEffect } from "react";
import Face from "./face";
import "./education.css";
import { FaGraduationCap } from "react-icons/fa6";
const Education = () => {
    const [isVisible, setIsVisible] = useState(false);

    const educationData = [
        {
            year: "2023 - Present",
            title: "Bachelor's in Computer Science",
            institution: "Jaypee Institute of Information Technology",
            description: "Exploring web development, AI, and scalable architectures while contributing to tech communities."
        },
        {
            year: "2022",
            title: "XII th",
            institution: "Gulab Rai Montessori, Nainital Road , Bareilly",
            description: "Focused on mathematics, programming, and analytical problem-solving, fueling my interest in software development."
        },
        {
            year: "2020",
            title: "X th",
            institution: "B.B.L Public School",
            description: "Developed a strong foundation in logic, critical thinking, and technology-driven problem-solving."
        }
    ];

    useEffect(() => {
        setTimeout(() => setIsVisible(true), 300); // Delayed fade-in effect
    }, []);

    return (
        <div className={`portfolio-container ${isVisible ? "show" : ""}`} id="education">
                        <div className="pagetitle"> <FaGraduationCap /> &nbsp;Education </div>

            <Face />
            {/* Right Section */}
            <div className="education-section" >
                <h2 className="tag">Education</h2>
                <div className="timeline">
                    {educationData.map((edu, index) => (
                        <div key={index} className="timeline-card">
                            <div className="timeline-header">
                                <span className="timeline-year">{edu.year}</span>
                                <h3 className="degree">{edu.title}</h3>
                            </div>
                            <h3 className="institution">{edu.institution}</h3>
                            <p className="description">{edu.description}</p>
                        </div>
                    ))}
                </div>
                
            </div>
        </div>
    );
};

export default Education;
