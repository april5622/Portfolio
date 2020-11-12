import React from "react";
import { SRLWrapper } from "simple-react-lightbox";
import familyrecipe1 from "../img/familyrecipe1.png";
import familyrecipe2 from "../img/familyrecipe2.png";
import familyrecipe3 from "../img/familyrecipe3.png";

function FamilyRecipes() {
  return (
    <SRLWrapper>
      <div className="project-pic-div-main">
        <div className="project-pic-div">
          <img className="project-pic" src={familyrecipe1} alt="Home Page" />
        </div>
        <div className="project-pic-div">
          <img className="project-pic" src={familyrecipe2} alt="Recipes Page" />
        </div>
        <div className="project-pic-div">
          <img
            className="project-pic"
            src={familyrecipe3}
            alt="Registration Page"
          />
        </div>
      </div>
    </SRLWrapper>
  );
}

export default FamilyRecipes;
