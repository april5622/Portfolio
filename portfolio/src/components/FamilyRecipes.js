import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function FamilyRecipes() {
  return (
    <div id="family-recipe-page">
      <div className="bigBox">
        <div className="leftProjectBox">
          <h3>Secret Family Recipes</h3>
          <p className="about-me">
            Secret Family Recipes Cookbook is a React web application that
            allows users to store and save their family recipe and never forget
            them. HTML/CSS | Javascript | React | Redux | Node.js
          </p>
          <a
            href="https://github.com/PTCT-Chef-Portfolio-1/FE"
            className="github-project icon"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>

        <div className="rightProjectBox-fam">
          <div className="right-text-box">
            <div className="text-wrap">

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FamilyRecipes;
