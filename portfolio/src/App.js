import React from "react";
import "./App.css";
import Navbar from "./components/Navbar"
import HomePage from "./components/HomePage";
import FamilyRecipes from "./components/FamilyRecipes";
import GameOfLife from "./components/GameOfLife";
import DarkMode from "./components/DarkMode";
// import { TransitionGroup, CSSTransition } from "react-transition-group";
// import styled from "styled-components";
// import { Switch, withRouter } from "react-router-dom";
// import SimpleReactLightbox from "simple-react-lightbox";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <FamilyRecipes />
      <GameOfLife />
      <DarkMode />
    </div>
  );
}

export default App;

