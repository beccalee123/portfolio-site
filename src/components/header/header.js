import React from "react";

import "./header.scss";

import Resume from "../portfolio/assets/becca-lee-resume.pdf";

class Header extends React.Component {
  render() {
    return (
      <>
        <nav>
          <ul>
            <li id="name">
              <a href="/">Becca Lee</a>
            </li>
          </ul>
          <ul>
            <div id="nav">
              <li>
                <a href={Resume} target="_blank" rel="noopener noreferrer">
                  resume
                </a>
              </li>
              <li>
                <a href="#contact">contact</a>
              </li>
            </div>
          </ul>
        </nav>
      </>
    );
  }
}

export default Header;
