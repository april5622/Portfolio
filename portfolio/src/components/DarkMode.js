import React from "react";
import { SRLWrapper } from "simple-react-lightbox";
import darkmode1 from "../img/darkmode1.png";
import darkmode2 from "../img/darkmode2.png";

function DarkMode() {
  return (
    <SRLWrapper>
      <div className="project-pic-div-main">
        <div className="project-pic-div">
          <img className="project-pic" src={darkmode1} alt="Light Mode" />
        </div>
        <div className="project-pic-div">
          <img className="project-pic" src={darkmode2} alt="Dark Mode" />
        </div>
      </div>
    </SRLWrapper>
  );
}

export default DarkMode;
