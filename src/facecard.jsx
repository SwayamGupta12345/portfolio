// import React, { useState, useEffect } from "react";
// import "./facecard.css";
// import { LuDownload } from "react-icons/lu";
// import Face from "./face"
// import { IoHomeOutline, IoPersonOutline } from "react-icons/io5";

// const Facecard = () => {
//     const [isVisible, setIsVisible] = useState(false);
//     useEffect(() => {
//         setTimeout(() => setIsVisible(true), 300); // Delay for a smooth effect
//     }, []);
//     return (   
//     <>
//         <div className={`portfolio-container ${isVisible ? "show" : ""}`} id="home">
//         <div className="pagetitle"> <IoHomeOutline/> &nbsp;Home </div>
//             <Face/>
//             {/* Right Section */}
//             <div className="intro-section">
//                 <h1>
//                     Hello There, I'm <span className="highlight">Swayam</span>,
//                 </h1>
//                 <h2>Web Developer and Software Engineer</h2>
//                 <p>
//                     I code beautifully elegant simple things and I love what I do. Just keeping things simple like that!
//                 </p>
//                 <button className="download" onClick={() => window.open("https://drive.google.com/file/d/1aDle9o1bdLP6Yl42LK-6SElkQrol9WRv/view?usp=drive_link", "_blank")}>
//                     <LuDownload /> Download CV
//                 </button>

//             </div>
//         </div></>
//     );
// };


// export default Facecard;

"use client"

import { useState, useEffect } from "react"
import "./facecard.css"
import { LuDownload } from "react-icons/lu"
import Face from "./face"
// import TypedText from "./components/TypedText"
import { motion } from "framer-motion"

const Facecard = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300)
  }, [])

  return (
    <div className={`portfolio-container hero-section ${isVisible ? "show" : ""}`} id="home">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="face-container"
      >
        <Face />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="intro-section"
      >
        <h1 className="greeting">
          Hello There,
        </h1>
        <h1 className="greeting"> I'm <span className="highlight name-highlight">Swayam</span>,</h1>
        <p className="intro-text">
          I code beautifully elegant simple things and I love what I do. Just keeping things simple like that!
        </p>

        <motion.button
          className="download-button"
          onClick={() =>
            window.open(
              // "https://drive.google.com/file/d/1aDle9o1bdLP6Yl42LK-6SElkQrol9WRv/view?usp=drive_link",
              "https://drive.google.com/file/d/1zWBal8-hGprlcbfuKs8MwUn5FXihMnXy/view?usp=sharing",
              "_blank",
            )
          }
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <LuDownload /> Download CV
        </motion.button>

        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Facecard

