import React from "react";

import '../../base-styles/base.scss';
import './about.scss';

class About extends React.Component {

  render() {
    return (
      <>
        <img src={require("./becca.jpg")} alt="Becca looking pretty pumped about her Sonic the Hedgehog ice cream"/>
        <h2>Nice to Meet You!</h2>
        <p>My name's Becca. I'm a Seattle-based software developer with a background in marketing who beleives that user-centric development, collaboration, and strong communication help make better software.</p>
        <p>When I'm not coding, you can find me cuddling cats, eating ice cream, baking pies, playing pinball, petting all the dogs, going on hikes, and watching pro-wrestling (yes, really).</p>
        <p>Want to know more about my work? Check out my <a href="#">Portfolio</a> and <a href="#">Resume</a></p>
      </>
    );
  }
}

export default About;
