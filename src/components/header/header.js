import React from "react";

import { Link } from "react-router-dom";

import './header.scss';

class Header extends React.Component {

  render() {
    return (
      <>
        <nav>
          <ul>
            <li id="name">Becca Lee</li>
          </ul>
          <ul>
            <div id="nav">
            <li><a href="#portfolio">portfolio</a></li>
            <li><a href="#about">about</a></li>
            {/* <li>resume</li> */}
            <li><a href="#contact">contact</a></li>
            </div>
          </ul>
        </nav>
      </>
    );
  }
}

export default Header;
