import React from "react";

import "../../base-styles/base.scss";
import "./about.scss";
import Resume from "../portfolio/assets/becca-lee-resume.pdf";

class About extends React.Component {
  render() {
    return (
      <>
        <section id="about">
          <img
            src={require("./becca.jpg")}
            alt="Becca looking pretty pumped about her Sonic the Hedgehog ice cream"
          />
          <div id="about-content">
            <h2>Nice to Meet You!</h2>
            <p>
              My name's Becca. I'm a Seattle-based front end developer with a
              background in marketing who believes that user-centric
              development, collaboration, and strong communication help make
              better software.
            </p>
            <p>
              I work primarily in JavaScript, TypeScript, React, style
              libraries, and CSS to build pixel perfect user interfaces and
              online experiences. I approach software development with a strong
              user focus that puts accessibility, usability, and sustainability
              at the forefront.
            </p>
            <p>
              When I'm not coding, you can find me cuddling cats, eating ice
              cream, reading a page-turner, baking, petting all the dogs,
              playing Zelda, and watching pro-wrestling (yes, really).
            </p>
            <p>
              Want to know more about my work? Check out my{" "}
              <a href={Resume} target="_blank" rel="noopener noreferrer">
                resume
              </a>
              .
            </p>
          </div>
        </section>
      </>
    );
  }
}

export default About;
