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
            <li>about</li>
            <li>portfolio</li>
            {/* <li>resume</li> */}
            <li>contact</li>
            </div>
          </ul>
          
          
        </nav>
        
        {/* <Link to='/'>About</Link> */}
        {/* <Link>Portfolio</Link> */}
        {/* <Link>Resume</Link> */}
        {/* <Link>Contact</Link> */}
      </>
    );
  }
}

export default Header;
