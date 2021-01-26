import React from "react";

import "../../base-styles/base.scss";
import "./footer.scss";

class Footer extends React.Component {
  render() {
    return (
      <>
        <footer>
          <p>&copy; Becca Lee 2021</p>
          <a
            href="https://github.com/beccalee123/portfolio-site"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source Code
          </a>
        </footer>
      </>
    );
  }
}

export default Footer;
