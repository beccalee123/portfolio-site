import React from "react";

import { Link } from "react-router-dom";

import './footer.scss';

class Footer extends React.Component {

  render() {
    return (
      <>
        <p>&copy; Becca Lee, 2019</p>
        <a href="https://github.com/beccalee123/portfolio-site">Source Code</a>
        <p>Add social links</p>
        {/* <Link to='/'>About</Link> */}
        {/* <Link>Portfolio</Link> */}
        {/* <Link>Resume</Link> */}
        {/* <Link>Contact</Link> */}
      </>
    );
  }
}

export default Footer;
