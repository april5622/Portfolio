import React from "react";
import { SRLWrapper } from "simple-react-lightbox";
import gameoflife1 from "../img/gameoflife1.png";
import gameoflife2 from "../img/gameoflife2.png";
import gameoflife3 from "../img/gameoflife3.png"


function GameOfLife() {
    return(
        <SRLWrapper>
            <div className="project-pic-div-main">
                <div className="project-pic-div">
                    <img className="project-pic" src={gameoflife1} alt="Grid size in small"/>
                </div>
                <div className="project-pic-div">
                    <img className="project-pic" src={gameoflife2} alt="Grid size in medium"/>    
                </div>
                <div className="project-pic-div">
                    <img className="project-pic" src={gameoflife3} alt="Allowing Users to set up initial cell configuration"/>    
                </div>
            </div>
        </SRLWrapper>
    )
}

export default GameOfLife;