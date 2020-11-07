import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import pic from "../img/pic.png";

function HomePage() {
  return (
    <div className="App">
      <div className="bigBox">
        <div className="leftBox">
          <div className="nav">
            <Link className="Home" to="/">
              Home
            </Link>
            <Link className="Projects" to="/projects">
              Projects
            </Link>
          </div>
          <div className="text-wrap">
            <h1 className="april">APRIL</h1>
          </div>
          <img classname="pic" src={pic} alt="pic" />
          <div className="icon-div">
            <a href="https://github.com/april5622/" className="github icon">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://www.linkedin.com/in/aprilma-sf/" className="linkedin icon">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </div>
        </div>
        <div className="rightBox">
          <div className="right-text-box">
            <h1 className="Hello">HELLO!</h1>
            <p className="about-me">
                I'm April and I'm a Full Stack Developer from the Bay Area.
                I graduated from university with a physiology degree but decided to
                explore other interest in my life. And that's where tech came along!
                I've been studying web development for a little over a year and I've 
                gotten to build some fun applications. Now, I am committed to 
                improving my skills as a developer and creating technology that will
                benefit others. 
            </p>
          </div>  
        </div>
      </div>
    </div>
  );
}

export default HomePage;
