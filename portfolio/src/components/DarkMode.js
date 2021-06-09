import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function DarkMode() {
  return (
    <div id="darkmode-page">
      <div className="bigBox">
        <div className="leftProjectBox">
          <h3>Secret Family Recipes</h3>
          <p className="about-me">
            A crytocurrency tracker app that uses custom hooks that will allow
            users to set and persist a dark mode preference. HTML/CSS |
            Javascript | React
          </p>
          <a
            href="https://github.com/april5622/dark-mode"
            className="github-project icon"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>

        <div className="rightProjectBox-dark">
          <div className="right-text-box">
            <div className="text-wrap">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DarkMode;
