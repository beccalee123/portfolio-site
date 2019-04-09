import React from "react";

import { Link } from "react-router-dom";

class Header extends React.Component {

  render() {
    return (
      <>
        <h1>Becca Lee</h1>
        <p>About</p>
        <p>Portfolio</p>
        <p>Resume</p>
        <p>Contact</p>
        {/* <Link to='/'>About</Link> */}
        {/* <Link>Portfolio</Link> */}
        {/* <Link>Resume</Link> */}
        {/* <Link>Contact</Link> */}
      </>
    );
  }
}

export default Header;
