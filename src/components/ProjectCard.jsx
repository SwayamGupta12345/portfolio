// "use client"

// import { useState } from "react"
// import { FaGithub, FaExternalLinkAlt, FaInfoCircle } from "react-icons/fa"
// import "../styles/ProjectCard.css"

// const ProjectCard = ({ project }) => {
//   const [flipped, setFlipped] = useState(false)

//   const handleFlip = () => {
//     setFlipped(!flipped)
//   }

//   return (
//     <div className={`project-card-container ${flipped ? "flipped" : ""}`}>
//       <div className="project-card-inner">
//         {/* Front of card */}
//         <div className="project-card-front">
//           <h3>{project.name}</h3>
//           <p className="project-description">
//             {project.description
//               ? project.description.length > 100
//                 ? `${project.description.substring(0, 100)}...`
//                 : project.description
//               : "No description available."}
//           </p>
//           <div className="project-language">
//             <span>🖥️ {project.language || "Text"}</span>
//           </div>
//           <br />
//           <div className="project-card-actions">
//             <button className="info-button" onClick={handleFlip}>
//               <FaInfoCircle /> More/Flip
//             </button>
//             &nbsp;
//             &nbsp;
//             {project.homepage && (
//               <a href={project.homepage} target="_blank" rel="noopener noreferrer" className=" info-button">
//                 <FaExternalLinkAlt /> Live Demo
//               </a>
//             )}
//           </div>
//         </div>

//         {/* Back of card */}
//         <div className="project-card-back">
//           <h3>{project.name}</h3>
//           <p className="project-description-full">{project.description || "No description available."}</p>
//           <div className="tech-stack">
//             <h4>Tech Stack:</h4>
//             <div className="tech-tags">
//               {project.topics && project.topics.length > 0 ? (
//                 project.topics.map((topic, index) => (
//                   <span key={index} className="tech-tag">
//                     {topic}
//                   </span>
//                 ))
//               ) : (
//                 <span className="tech-tag">{project.language || "N/A"}</span>
//               )}

//             </div>
//           </div>
//           <div className="project-links">

//             <a href={project.html_url} target="_blank" rel="noopener noreferrer" className="project-link github">
//               <FaGithub /> GitHub
//             </a>
//             &nbsp;&nbsp;&nbsp;&nbsp;
//             {project.homepage && (
//               <a href={project.homepage} target="_blank" rel="noopener noreferrer" className="project-link github">
//                 <FaExternalLinkAlt /> Live Demo
//               </a>
//             )}
//           </div>
//           <button className="back-button" onClick={handleFlip}>
//             Back
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ProjectCard

"use client";
import PropTypes from "prop-types";

ProjectCard.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    language: PropTypes.string,
    homepage: PropTypes.string,
    html_url: PropTypes.string,
    topics: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

import { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaInfoCircle } from "react-icons/fa";
import "../styles/ProjectCard.css";

const ProjectCard = ({ project }) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  // 🖼️ Auto-load image if present
  // const imagePath = `/project-images/${project.name}.png`;
  const imagePath = `https://opengraph.githubassets.com/1/SwayamGupta12345/${project.name}`;

  return (
    <div className={`project-card-container ${flipped ? "flipped" : ""}`}>
      <div className="project-card-inner">
        {/* Front of card */}
        <div className="project-card-front">
          <h3>{project.name}</h3>

          {/* ✅ NEW: Image Preview */}
          <img
            src={imagePath}
            alt={project.name}
            className="project-preview-image"
            onError={(e) => (e.target.style.display = "none")}
          />

          <p className="project-description">
            {project.description
              ? project.description.length > 100
                ? `${project.description.substring(0, 100)}...`
                : project.description
              : "No description available."}
          </p>

          <div className="project-language">
            <span>🖥️ {project.language || "Text"}</span>
          </div>

          <br />
          <div className="project-card-actions">
            <button className="info-button" onClick={handleFlip}>
              <FaInfoCircle /> More/Flip
            </button>
            &nbsp;&nbsp;
            {project.homepage && (
              <a
                href={project.homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="info-button"
              >
                <FaExternalLinkAlt /> Live
              </a>
            )}
          </div>
        </div>

        {/* Back of card */}
        <div className="project-card-back">
          <h3>{project.name}</h3>

          <p className="project-description">
            {project.description
              ? project.description.length > 100
                ? `${project.description.substring(0, 100)}...`
                : project.description
              : "No description available."}
          </p>

          {/* ✅ Stack section */}
          <div className="tech-stack">
            <h4>Tech Stack:</h4>
            <div className="tech-tags">
              {project.topics && project.topics.length > 0 ? (
                project.topics.map((topic, index) => (
                  <span key={index} className="tech-tag">
                    {topic}
                  </span>
                ))
              ) : (
                <span className="tech-tag">{project.language || "N/A"}</span>
              )}
            </div>
          </div>

          {/* ✅ Links */}
          <div className="project-links">
            <a
              href={project.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link github"
            >
              <FaGithub /> GitHub
            </a>
            &nbsp;&nbsp;
            {project.homepage && (
              <a
                href={project.homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link live"
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
            )}
          </div>

          <button className="back-button" onClick={handleFlip}>
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
