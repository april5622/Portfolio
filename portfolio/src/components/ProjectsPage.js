import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function ProjectsPage() {
  return (
    <div className="ProjectPage">
      <div className="nav">
        <Link className="Home" to="/">
          Home
        </Link>
        <Link className="Projects" to="/projects">
          Projects
        </Link>
      </div>
      <h2>Check out what I've worked on</h2>
      <div className="project-cards">
        <div className="project-1">
          <h3>Secret Family Recipes</h3>
          <p className="project-card-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <a
            href="https://github.com/april5622/"
            className="github-project icon"
          >
            <FontAwesomeIcon icon={faGithub} size="1x" />
          </a>
        </div>
        <div className="project-2">
          <h3>Conway's Game of Life</h3>
          <p className="project-card-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <a
            href="https://github.com/april5622/"
            className="github-project icon"
          >
            <FontAwesomeIcon icon={faGithub} size="1x" />
          </a>
        </div>
        <div className="project-3">
          <h3>Crytocurrency Tracker with Dark Mode</h3>
          <p className="project-card-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <a
            href="https://github.com/april5622/"
            className="github-project icon"
          >
            <FontAwesomeIcon icon={faGithub} size="1x" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
