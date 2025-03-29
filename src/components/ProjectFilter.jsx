"use client"
import "../styles/ProjectFilter.css"

const ProjectFilter = ({ categories, activeCategory, setActiveCategory }) => {
  return (
    <div className="project-filter">
      <div className="filter-buttons">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-button ${activeCategory === category ? "active" : ""}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  )
}

export default ProjectFilter

