import React from 'react';
import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";


function App() {
  return (
    <div className="App">
      <div className="bigBox">
        <div className='leftBox'>
            <h1>Left Box</h1>
                <a href="https://github.com/april5622/"
                  className="github icon">
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
        </div>
        <div className="rightBox">
            <h1>Right Box</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
