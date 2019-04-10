import React from "react";


import '../../base-styles/base.scss';
import './footer.scss';

class Footer extends React.Component {

  render() {
    return (
      <>
        <footer>
          <p>&copy; Becca Lee, 2019</p>
          <a href="https://github.com/beccalee123/portfolio-site">Source Code</a>
        </footer>
      </>
    );
  }
}

export default Footer;
