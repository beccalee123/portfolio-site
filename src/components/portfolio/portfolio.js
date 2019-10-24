import React from "react";
import TechPortfolio from "./techPortfolio.js";
import MarketingPortfolio from "./marketingPortfolio.js";

import "../../base-styles/base.scss";
import "./portfolio.scss";

class Portfolio extends React.Component {
  render() {
    return (
      <>
        <section id="portfolio">
          <h2>Portfolio</h2>
          <h3>Apps & Sites</h3>
          <section id="tech-content">
            <TechPortfolio />
          </section>
          <h3>Tech Writing & Dev-Focused Marketing Content</h3>
          <section id="marketing-content">
            <MarketingPortfolio />
          </section>
        </section>
      </>
    );
  }
}

export default Portfolio;
