"use client"

import { useState, useEffect } from "react"
import "../src/styles/projects.css"
import ProjectCard from "./components/ProjectCard"
import ProjectFilter from "./components/ProjectFilter"
import { motion } from "framer-motion"
import { a } from "framer-motion/client"

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [activeCategory, setActiveCategory] = useState("All")
  const [filteredRepos, setFilteredRepos] = useState([])
  const excludedRepos = ["portfolio", "SwayamGupta12345","Docker"];
  // Define project categories
  const categories = ["All", "Web", "API", "AI/ML", "C++", "Tools"];

// Map GitHub topics to our categories
const topicToCategory = {
  react: "Web",
  nextjs: "Web",
  javascript: "Web",
  typescript: "Web",
  html: "Web",
  css: "Web",
  php: "Web",
  api: "API",
  "rest-api": "API",
  fastapi: "API",
  express: "API",
  flask: "API",
  "machine-learning": "AI/ML",
  ai: "AI/ML",
  "deep-learning": "AI/ML",
  python: "AI/ML",
  tensorflow: "AI/ML",
  crewai: "AI/ML",
  genai: "AI/ML",
  pytorch: "AI/ML",
  tool: "Tools",
  utility: "Tools",
  cli: "Tools",
  automation: "Tools",
  cpp: "C++",  // Added C++ topic mapping
};

// Function to determine category based on repo data
const determineCategory = (repo) => {
  // Check if repo has topics that match our categories
  if (repo.topics?.length) {
    const matchedTopic = repo.topics.find(topic => topicToCategory[topic]);
    if (matchedTopic) {
      return topicToCategory[matchedTopic];
    }
  }

  // Fallback to language-based categorization
  if (repo.language) {
    const languageCategories = {
      "JavaScript": "Web",
      "TypeScript": "Web",
      "HTML": "Web",
      "CSS": "Web",
      "Python": "AI/ML",
      "Jupyter Notebook": "AI/ML",
      "C++": "C++",  // Added C++ language fallback
    };

    return languageCategories[repo.language] || "Web"; // Default to Web if language is unrecognized
  }

  // Default category
  return "Web";
};

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300)

    // Fetch GitHub Repositories with topics
    fetch("https://api.github.com/users/SwayamGupta12345/repos")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch repositories.")
        }
        return response.json()
      })
      .then((data) => {
        // Sort by updated date and add category
        const processedRepos = data
          .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
          .filter((repo) => !excludedRepos.includes(repo.name))
          .map((repo) => ({
            ...repo,
            category: determineCategory(repo),
          }))

        setRepos(processedRepos)
        setFilteredRepos(processedRepos)
        setLoading(false)
      })
      .catch((error) => {
        console.error("Error fetching repositories:", error)
        setError(error.message)
        setLoading(false)
      })
  }, [])

  // Filter repos when category changes
  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredRepos(repos)
    } else {
      setFilteredRepos(repos.filter((repo) => repo.category === activeCategory))
    }
  }, [activeCategory, repos])

  return (

    <div className={`portfolio-container projects-container ${isVisible ? "show" : ""}`} id="projects">
      <div className="projects-header">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ProjectFilter categories={categories} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
        </motion.div>
      </div>

      {loading && (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading projects...</p>
        </div>
      )}

      {error && (
        <div className="error-message">
          <p>{error}</p>
          <button onClick={() => window.location.reload()}>Try Again</button>
        </div>
      )}

      {!loading && !error && (
        <motion.div
          className="projects-grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {filteredRepos.length > 0 ? (
            filteredRepos.map((repo, index) => (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard project={repo} />
              </motion.div>
            ))
          ) : (
            <p className="no-projects">No projects found in this category.</p>
          )}
        </motion.div>
      )}
    </div>
  )
}

export default Projects

