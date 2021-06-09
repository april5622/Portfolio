import React, { Component } from "react";

import { Link } from "react-scroll";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <div className="nav">
        <div className="nav-button">
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Home
          </Link>
        </div>

        <div className="nav-button">
          <Link
            activeClass="active"
            to="family-recipe-page"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Project 1
          </Link>
        </div>

        <div className="nav-button">
          <Link
            activeClass="active"
            to="game-of-life-page"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Project 2
          </Link>
        </div>

        <div className="nav-button">
          <Link
            activeClass="active"
            to="darkmode-page"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Project 3
          </Link>
        </div>

      </div>
    );
  }
}

export default Navbar;
