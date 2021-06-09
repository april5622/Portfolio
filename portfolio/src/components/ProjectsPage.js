import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import FamilyRecipes from "./FamilyRecipes";
import GameOfLife from "./GameOfLife";
import DarkMode from "./DarkMode";

function ProjectsPage() {
  return (
    <div className="ProjectPage">
      <div className="nav"></div>
      <h2>Check out what I've worked on</h2>
      <div className="project-cards">
        <div className="project-1">
          <h3>Secret Family Recipes</h3>
          <p className="project-card-1">
            Secret Family Recipes Cookbook is a React web application that
            allows users to store and save their family recipe and never forget
            them. HTML/CSS | Javascript | React | Redux | Node.js
          </p>
          <a
            href="https://github.com/PTCT-Chef-Portfolio-1/FE"
            className="github-project icon"
          >
            <FontAwesomeIcon icon={faGithub} size="1x" />
          </a>
          <FamilyRecipes />
        </div>

        <div className="project-2">
          <h3>Conway's Game of Life</h3>
          <p className="project-card-2">
            Conway’s Game of Life is a computer classic program that simulates
            cellular automation. It consists of a collection of cells which,
            based on a few mathematical rules, can live, die or multiply.
            HTML/CSS | Javascript | React
          </p>
          <a
            href="https://github.com/april5622/conways-game-of-life"
            className="github-project icon"
          >
            <FontAwesomeIcon icon={faGithub} size="1x" />
          </a>
          <GameOfLife />
        </div>

        <div className="project-3">
          <h3>Crytocurrency Tracker with Dark Mode</h3>
          <p className="project-card-3">
            A crytocurrency tracker app that uses custom hooks that will allow
            users to set and persist a dark mode preference. HTML/CSS |
            Javascript | React
          </p>
          <a
            href="https://github.com/april5622/dark-mode"
            className="github-project icon"
          >
            <FontAwesomeIcon icon={faGithub} size="1x" />
          </a>
          <DarkMode />
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
