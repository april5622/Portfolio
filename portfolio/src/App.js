import React from 'react';
import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import pic from "./img/pic.png"



function App() {
  return (
    <div className="App">
      <div className="bigBox">
        <div className='leftBox'>
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
            <h1>About</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
