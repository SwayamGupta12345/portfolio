import React, { useState, useEffect } from "react";
import "./facecard.css";
import "./projects.css";
import Navbot from "./navbot";
import { FaLink } from "react-icons/fa";
import { FaBarsProgress } from "react-icons/fa6";



const Projects = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => setIsVisible(true), 300); // Smooth effect

        // Fetch GitHub Repositories
        fetch("https://api.github.com/users/SwayamGupta12345/repos")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Failed to fetch repositories.");
                }
                return response.json();
            })
            .then(data => {
                const sortedRepos = data.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
                setRepos(sortedRepos.slice(0, 6)); // Show latest 6 repos
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching repositories:", error);
                setError(error.message);
                setLoading(false);
            });

    }, []);
    const excludedRepos = ["portfolio"]; // Add more repo names here if needed

    return (
        <div className={`portfolio-container ${isVisible ? "show" : ""}`} id="projects">
            <div className="pagetitle"> <FaBarsProgress /> &nbsp;Projects </div>
            {/* Right Section */}
            <div className="intro-section">

                {/* GitHub Projects */}
                <h2 className="projects-title">My Projects</h2>

                {loading && <p>Loading projects...</p>}
                {error && <p className="error-message">{error}</p>}

                {!loading && !error && (


                    <div className="projects-grid">
                        {repos
                            .filter(repo => !excludedRepos.includes(repo.name.toLowerCase())) // Exclude specified repos
                            .map(repo => (
                                <div key={repo.id} className="project-card">
                                    <h3>{repo.name}</h3>
                                    <p className="desc">
                                        {repo.description ? repo.description.split(" ").slice(0, 10).join(" ") + "..." : "No description available."}
                                    </p>

                                    {/* Language Display with Fallback */}
                                    <p className="repoll">
                                        🖥️ {repo.language ? repo.language : "Text"}
                                    </p>

                                    <a className="repol" href={repo.html_url} target="_blank" rel="noopener noreferrer">
                                        Github Link <FaLink />
                                    </a>
                                </div>
                            ))}
                    </div>
                )}

            </div>
        </div>
    );
};

export default Projects;
