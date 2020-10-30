import React from 'react'
import { Link } from "react-router-dom";

function ProjectsPage() {
    return (
        <div className="ProjectPage">
            <div className="nav">
                <Link className="Home" to="/">Home</Link>
                <Link className="Projects" to="/projects">Projects</Link>
            </div>
            <h2>Projects</h2>
        </div>
    )
}

export default ProjectsPage;