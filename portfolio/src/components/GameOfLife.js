import React from "react";



function GameOfLife() {
  return (
    <div id="game-of-life-page">
      <div className="bigBox">
        <div className="leftBox-game">
          <div className="text-wrap">
          </div> 
        </div>

        <div className="rightBox">
          <div className="right-text-box">
            <h3>Conway's Game of Life</h3>
            <p className="about-me">
              Conway’s Game of Life is a computer classic program that simulates
              cellular automation. It consists of a collection of cells which,
              based on a few mathematical rules, can live, die or multiply.
              HTML/CSS | Javascript | React
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameOfLife;
