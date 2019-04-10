import React from "react";

import '../../base-styles/base.scss';
import './portfolio.scss';


class Portfolio extends React.Component {

  render() {
    return (
      <>
        <section id="portfolio">
          <h2>Portfolio</h2>
          <h3>Apps & Sites</h3>
          <section id="tech-content">
            <div>
              <h4>DevFund</h4>
              <img src={require("./assets/dev-fund.png")} alt="preview of the DevFund website"/>
              <p><span>About: </span>DevFund is a proof-of-concept for a site that helps fund learning resources for new developers looking to break into the industry.</p>
              <p><span>Tech Used:</span> React | Node.js | SASS | MongoDB | PayPal API | Netlify | Heroku</p>
              <a href="https://github.com/jbjbg/devfund-fe">GitHub Repo &rarr;</a>
              <a href="https://www.devfund.io/">DevFund Site &rarr;</a>
            </div>
            <div>
              <h4>cf-quick-start</h4>
              <img src={require("./assets/cf-quick-start.png")} alt="preview of the cf-quick-start CLI"/>              
              <p><span>About: </span>cf-quick-start is a CLI-based project creation npm package that will provide you with fleshed-out, functional starter code in just a few easy steps.</p>
              <p><span>Tech Used:</span> JavaScript | Node.js | MongoDB | npm</p>
              <a href="https://github.com/TannerSeramur/cf-quick-start">GitHub Repo &rarr;</a>
              <a href="https://www.npmjs.com/package/cf-quick-start">npm package &rarr;</a>
            </div>
            <div>
              <h4>Space Rover</h4>
              <img src={require("./assets/space-rover.png")} alt="preview of the Space Rover website"/>              
              <p><span>About: </span>Space Rover is a mobile-first, educational website about our solar system.</p>
              <p><span>Tech Used:</span> JavaScript | Node.js | HTML | CSS | EJS | Ephemeris API | NASA AoPD API | Heroku</p>
              <a href="https://github.com/hcherewaty/space_rover">GitHub Repo &rarr;</a>
              <a href="http://www.spacerover.tech/">Space Rover Site &rarr;</a>
            </div>
            <div>
              <h4>Ocean Commotion</h4>
              <img src={require("./assets/ocean-commotion.png")} alt="preview of the Oceam Commotion website"/>              
              <p><span>About: </span>Ocean Commotion is a word scramble game with an oceanic theme.</p>
              <p><span>Tech Used:</span> JavaScript | HTML | CSS</p>
              <a href="https://github.com/beccalee123/word-scramble">GitHub Repo &rarr;</a>
              <a href="http://www.oceancommotion.fun/">Ocean Commotion Site &rarr;</a>
            </div>
            </section>
            <section id="marketing-content">
            <h3>Tech Writing & Dev-Focused Marketing Content</h3>
            <div>
              <h4>Formidable.com Website Content</h4>
              <img/>
              <p>Led a full redesign of Formidable.com to improve company branding and messaging. I wrote new website copy, updated the content structure, and worked with Formidable's team of in-house designers and developers to carry out the vision. As a result, key pages saw traffic increases of 100 - 200% and bounce rates improved by 30%.</p>
              <p>Highlights:</p>
              <a href="#">Homepage</a>
              <a href="#">What We Do</a>
              <a href="#">Our Work</a>
              <a href="#">Careers</a>
            </div>
            <div>
              <h4>Formidable Case Studies</h4>
              <img/>
              <p>Working closely with developers and clients, I wrote technical case studies that captured Formidable's work as a JavaScript consultancy. The case studies were a key component for business development, as they provided a glimpse of Formidable's technical expertise to prospective clients.</p>
              <p>Highlights:</p>
              <a href="#">Starbucks Progressive Web App</a>
              <a href="#">Prix.ai Dynamic Pricing Dashboard</a>
              <a href="#">Starbucks Store Locator</a>
              <a href="#">Walmart React Native Pharmacy</a>
            </div>
            <div>
              <h4>Formidable Marketing Collateral</h4>
              <img/>
              <p>I managed the conceptualization and creation of Formidable's suite of marketing collateral, from carefully written flyers to conference swag items.</p>
              <p>Highlights:</p>
              <a href="#">Business Development Flyer</a>
              <a href="#">Hiring Flyer</a>
              <a href="#">Nail Art Swag</a>
              <a href="#">Other Swag</a>
            </div>
            <div>
              <h4>Formidable Social Media</h4>
              <img/>
              <p>Through Twitter, Formidable was able to build a strong community, while cementing technical expertise. Because this account was developer focused, we regularly exceeded the metrics of our competitors on posts and were able to connect genuinely with our audience. The Formidable audience was extremely engaged and grew rapidly, increasing almost 140% from March 2017 to March 2018.</p>
              <p>Highlights:</p>
              <a href="#">URQL Open Source Release</a>
              <a href="#">react-fast-compare Open Source Release</a>
              <a href="#">redux-saga Blog Post Promotion</a>
              <a href="#">Company Culture</a>
            </div>
            <h4>Want to know more? Check out my <a href="#">resume</a></h4>
          </section>
        </section>
      </>
    );
  }
}

export default Portfolio;