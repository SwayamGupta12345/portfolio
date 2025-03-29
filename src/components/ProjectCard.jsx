"use client"

import { useState } from "react"
import { FaGithub, FaExternalLinkAlt, FaInfoCircle } from "react-icons/fa"
import "../styles/ProjectCard.css"

const ProjectCard = ({ project }) => {
  const [flipped, setFlipped] = useState(false)

  const handleFlip = () => {
    setFlipped(!flipped)
  }

  return (
    <div className={`project-card-container ${flipped ? "flipped" : ""}`}>
      <div className="project-card-inner">
        {/* Front of card */}
        <div className="project-card-front">
          <h3>{project.name}</h3>
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
          <div className="project-card-actions">
            <button className="info-button" onClick={handleFlip}>
              <FaInfoCircle /> More Info
            </button>
          </div>
        </div>

        {/* Back of card */}
        <div className="project-card-back">
          <h3>{project.name}</h3>
          <p className="project-description-full">{project.description || "No description available."}</p>
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
          <div className="project-links">
            <a href={project.html_url} target="_blank" rel="noopener noreferrer" className="project-link github">
              <FaGithub /> GitHub
            </a>
            {project.homepage && (
              <a href={project.homepage} target="_blank" rel="noopener noreferrer" className="project-link demo">
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
  )
}

export default ProjectCard

