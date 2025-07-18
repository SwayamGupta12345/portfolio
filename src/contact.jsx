import React, { useState, useEffect } from "react";
import "./facecard.css";
import { LuSend } from "react-icons/lu";
import Face from "./face";
import "../src/styles/contact.css";
import emailjs from "@emailjs/browser";
import { MdOutlineEmail } from "react-icons/md";

const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [showFace, setShowFace] = useState(window.innerWidth >= 720);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    useEffect(() => {
        setTimeout(() => setIsVisible(true), 300);

        const handleResize = () => {
            setShowFace(window.innerWidth >= 1026);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            serviceID,
            templateID,
            { name: formData.name, email: formData.email, message: formData.message },
            publicKey
        )
            .then((response) => {
                console.log("Email sent successfully", response);
                alert("Message Sent Successfully!");
                setFormData({
                    name: "",
                    email: "",
                    subject: "",
                    message: ""
                });
            })
            .catch((error) => {
                console.error("Error sending email", error);
                alert("Failed to send message.");
            });
    };

    return (
        <div className={`portfolio-container ${isVisible ? "show" : ""}`} id="contact">
            <div className="pagetitle"> <MdOutlineEmail /> &nbsp;Contact me </div>

            {/* Conditionally render Face component */}
            {showFace && <Face />}

            <div className="intro-section">
                <div className="contact-heading">
                    <h1>Contact <span className="highlight">Me</span></h1>
                    <p>Feel free to reach out for any inquiries or collaborations.</p>
                </div>

                <div className="contact-form-container">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
                        </div>
                        <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
                        <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required />
                        <button type="submit" className="send-button">
                            <LuSend /> Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
