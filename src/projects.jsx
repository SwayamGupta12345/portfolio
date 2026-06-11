import { useState, useEffect } from "react";
import "./styles/projects.css";
import ProjectCard from "./components/ProjectCard";
import ProjectFilter from "./components/ProjectFilter";
import { motion } from "framer-motion";

const CACHE_KEY = "gh_repos_cache";
const CACHE_TTL = 10 * 60 * 1000; // 10 minutes

const excludedRepos = [
  "portfolio",
  "SwayamGupta12345",
  "Docker",
  "open-source-lab",
  "Info_sec_project",
  "ui-cloner",
  "Medi_back",
  "lavanya",
  "Medi_Front",
  "img_gen_basic",
  "Stealth-lock",
  "apollo_bandhn",
];

const topicToCategory = {
  react: "Web",
  nextjs: "Web",
  javascript: "Web",
  typescript: "Web",
  html: "Web",
  css: "Web",
  php: "Web",
  "machine-learning": "AI/ML",
  ai: "AI/ML",
  "deep-learning": "AI/ML",
  python: "AI/ML",
  tensorflow: "AI/ML",
  crewai: "AI/ML",
  genai: "AI/ML",
  pytorch: "AI/ML",
  cpp: "C++",
};

const webKeywords = [
  "react",
  "nextjs",
  "javascript",
  "typescript",
  "html",
  "css",
  "php",
  "web",
  "frontend",
  "website",
  "tailwind",
  "astro",
];
const webLanguages = ["JavaScript", "TypeScript", "HTML", "CSS", "EJS"];
const languageCategories = {
  Python: "AI/ML",
  "Jupyter Notebook": "AI/ML",
  "C++": "C++",
};

const determineCategory = (repo) => {
  const hasWebTopic = repo.topics?.some((t) =>
    webKeywords.includes(t.toLowerCase()),
  );
  const hasWebLanguage = repo.language && webLanguages.includes(repo.language);
  const hasHomepage = repo.homepage?.trim();

  if (hasWebTopic || hasWebLanguage || hasHomepage) return "Web";

  const matchedTopic = repo.topics?.find((t) => topicToCategory[t]);
  if (matchedTopic) return topicToCategory[matchedTopic];

  if (repo.language && languageCategories[repo.language])
    return languageCategories[repo.language];

  return "Tools";
};

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredRepos, setFilteredRepos] = useState([]);
  const categories = ["All", "Web", "AI/ML", "C++"];

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300);

    // Check cache first

    const cached = sessionStorage.getItem(CACHE_KEY);
    if (cached) {
      const { data, timestamp } = JSON.parse(cached);
      if (Date.now() - timestamp < CACHE_TTL) {
        setRepos(data);
        setFilteredRepos(data);
        setLoading(false);
        return;
      }
    }

    // Single API call: per_page=100 gets everything in one request, type=public filters out private repos
    fetch(
      "https://api.github.com/users/SwayamGupta12345/repos?per_page=100&type=public",
    )
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch repositories.");
        return res.json();
      })
      .then((data) => {
        const processed = data
          .filter((repo) => !repo.private && !excludedRepos.includes(repo.name))
          .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
          .map((repo) => ({ ...repo, category: determineCategory(repo) }));

        sessionStorage.setItem(
          CACHE_KEY,
          JSON.stringify({ data: processed, timestamp: Date.now() }),
        );

        setRepos(processed);
        setFilteredRepos(processed);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching repositories:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setFilteredRepos(
      activeCategory === "All"
        ? repos
        : repos.filter((r) => r.category === activeCategory),
    );
  }, [activeCategory, repos]);

  return (
    <div
      className={`portfolio-container projects-container ${isVisible ? "show" : ""}`}
      id="projects"
    >
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
          <ProjectFilter
            categories={categories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
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
  );
};

export default Projects;
