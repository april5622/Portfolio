import React from 'react';
import '../App.css'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import pic from "../img/pic.png";


function HomePage() {
  return (
    <div className="App">
      <div className="bigBox">
        <div className='leftBox'>
            <div className="nav">
                <Link className="Home" to="/">Home</Link>
                <Link className="Projects" to="/projects">Projects</Link>
            </div>
          <div className="text-wrap">
            <h1 className="april">April</h1>
          </div>
          <img classname="pic" src={pic} alt="pic"/>
          <div className="icon-div">
            <a href="https://github.com/april5622/" className="github icon">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </div>
        </div>
        <div className="rightBox">
            <h1>HELLO!</h1>
            <p className="about-me">
                ILorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
                anim id est laborum.
            </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
