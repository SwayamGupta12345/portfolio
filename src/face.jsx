import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import profileph from "./assets/profile.jpg";
import "./facecard.css";
import { SiLeetcode } from "react-icons/si";
const Face = () => {
    return (
        <>
            <div className="profile-card">
                <img src={profileph} alt="Profile" className="profile-image" />
                <h2>Swayam Gupta</h2>
                <p>Web Developer</p>
                <p>swayamsam2005@gmail.com</p>
                <p>Bareilly, U.P, India</p>

                {/* Social Icons */}
                <div className="social-icons">
                    <a href="https://leetcode.com/u/Swayam_Gupta/" className="icon" target="_blank" rel="noopener noreferrer">
                        <SiLeetcode />
                    </a>
                    <a href="https://github.com/SwayamGupta12345" className="icon" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/swayamgupta12/" className="icon" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                </div>

                {/* Contact Button */}
                <button
                    className="contact-button"
                    onClick={() => window.open("https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new", "_blank")}
                >
                    <span className="icon"><MdOutlineEmail /></span>&nbsp;&nbsp;Contact Me
                </button>

            </div>

        </>
    );
};

export default Face;
