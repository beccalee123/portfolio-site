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
            <div>
            <li>About</li>
            <li>Portfolio</li>
            <li>Resume</li>
            <li>Contact</li>
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
