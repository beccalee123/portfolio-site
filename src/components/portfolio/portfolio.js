import React from "react";

import '../../base-styles/base.scss';
import './portfolio.scss';

// Assets
// Formidable Site
import Homepage from "./assets/formidable-site/homepage.pdf";
import WhatWeDo from "./assets/formidable-site/what-we-do.pdf";
import OurWork from "./assets/formidable-site/our-work.pdf";
import Careers from "./assets/formidable-site/careers.pdf";

// Formidable Case Studies
import Prix from "./assets/formidable-case-studies/prix.pdf";
import PWA from "./assets/formidable-case-studies/starbucks-pwa.pdf";
import StoreLocator from "./assets/formidable-case-studies/starbucks-store-locator.pdf";
import RNPharm from "./assets/formidable-case-studies/walmart-react-native-pharmacy.pdf";

// Formidable Collateral
import Hiring from "./assets/formidable-collateral/hiring.pdf";
import Biz from "./assets/formidable-collateral/flyer.pdf";
import Nails from "./assets/formidable-collateral/nail-art.jpg";
import Swag from "./assets/formidable-collateral/swag.jpg";

// Formidable Social
import URQL from "./assets/formidable-social-media/URQL.png";
import Saga from "./assets/formidable-social-media/redux-saga.png";
import Fast from "./assets/formidable-social-media/react-fast-compare.png";
import Culture from "./assets/formidable-social-media/company-culture.png";

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
              <p class="tech"><span>Tech Used:</span> React | Node.js | SASS | MongoDB | PayPal API | Netlify | Heroku</p>
              <a href="https://github.com/jbjbg/devfund-fe" target="_blank" rel="noopener noreferrer">GitHub Repo <span id="arrow">&rarr;</span></a>
              <a href="https://www.devfund.io/" target="_blank" rel="noopener noreferrer">DevFund Site &rarr;</a>
            </div>
            <div>
              <h4>cf-quick-start</h4>
              <img src={require("./assets/cf-quick-start.png")} alt="preview of the cf-quick-start CLI"/>              
              <p><span>About: </span>cf-quick-start is a CLI-based project creation npm package that will provide you with fleshed-out, functional starter code in just a few easy steps.</p>
              <p class="tech"><span>Tech Used:</span> JavaScript | Node.js | MongoDB | npm</p>
              <a href="https://github.com/TannerSeramur/cf-quick-start" target="_blank" rel="noopener noreferrer">GitHub Repo &rarr;</a>
              <a href="https://www.npmjs.com/package/cf-quick-start" target="_blank" rel="noopener noreferrer">npm package &rarr;</a>
            </div>
            <div>
              <h4>Space Rover</h4>
              <img src={require("./assets/space-rover.png")} alt="preview of the Space Rover website"/>              
              <p><span>About: </span>Space Rover is a mobile-first, educational website about our solar system.</p>
              <p class="tech"><span>Tech Used:</span> JavaScript | Node.js | HTML | CSS | EJS | Ephemeris API | NASA AoPD API | Heroku</p>
              <a href="https://github.com/hcherewaty/space_rover" target="_blank" rel="noopener noreferrer">GitHub Repo <span id="arrow">&rarr;</span></a>
              <a href="http://www.spacerover.tech/" target="_blank" rel="noopener noreferrer">Space Rover Site &rarr;</a>
            </div>
            <div>
              <h4>Ocean Commotion</h4>
              <img src={require("./assets/ocean-commotion.png")} alt="preview of the Oceam Commotion website"/>              
              <p><span>About: </span>Ocean Commotion is a word scramble game with an oceanic theme.</p>
              <p class="tech"><span>Tech Used:</span> JavaScript | HTML | CSS</p>
              <a href="https://github.com/beccalee123/word-scramble" target="_blank" rel="noopener noreferrer">GitHub Repo &rarr;</a>
              <a href="http://www.oceancommotion.fun/" target="_blank" rel="noopener noreferrer">Ocean Commotion Site &rarr;</a>
            </div>
            </section>
            <h3>Tech Writing & Dev-Focused Marketing Content</h3>
            <section id="marketing-content">
            <div>
              <h4>Website Content</h4>
              <img src={require("./assets/website.png")} alt="preview of the Formidable.com homepage"/>
              <p id="market1"><span>About: </span>Led a full redesign of Formidable.com to improve company branding and messaging. I wrote new website copy, updated the content structure, and worked with Formidable's team of in-house designers and developers to carry out the vision. As a result, key pages saw traffic increases of 100 - 200% and bounce rates improved by 30%.</p>
              <p><span>Highlights:</span></p>
              <a href={Homepage} target="_blank" rel="noopener noreferrer">Homepage &rarr;</a>
              <a href={WhatWeDo} target="_blank" rel="noopener noreferrer">What We Do &rarr;</a>
              <a href={OurWork} target="_blank" rel="noopener noreferrer">Our Work &rarr;</a>
              <a href={Careers} target="_blank" rel="noopener noreferrer">Careers &rarr;</a>
            </div>
            <div>
              <h4>Case Studies</h4>
              <img src={require("./assets/case-study.png")} alt="preview of the Starbucks PWA case study"/>
              <p id="market1"><span>About: </span>Working closely with developers and clients, I wrote technical case studies that captured Formidable's work as a JavaScript consultancy. The case studies were a key component for business development, as they provided a glimpse of Formidable's technical expertise to prospective clients.</p>
              <p><span>Highlights:</span></p>
              <a href={PWA} target="_blank" rel="noopener noreferrer">Starbucks Progressive Web App &rarr;</a>
              <a href={Prix} target="_blank" rel="noopener noreferrer">Prix.ai Dynamic Pricing Dashboard &rarr;</a>
              <a href={StoreLocator} target="_blank" rel="noopener noreferrer">Starbucks Store Locator &rarr;</a>
              <a href={RNPharm} target="_blank" rel="noopener noreferrer">Walmart React Native Pharmacy &rarr;</a>
            </div>
            <div>
              <h4>Marketing Collateral</h4>
              <img src={require("./assets/swag-img.png")} alt="Preview of Formidable branded nail art"/>
              <p id="market2"><span>About: </span>I managed the conceptualization and creation of Formidable's suite of marketing collateral, from carefully written flyers to conference swag items. Flyers were created to capture the essence of Formidable in a single page so both prospective clients and prospective employees could quickly glean a clear understanding of the company. Swag items were created to be both useful and fun- not just something that would go straight into the trash bin.</p>
              <p><span>Highlights:</span></p>
              <a href={Biz} target="_blank" rel="noopener noreferrer">Business Development Flyer &rarr;</a>
              <a href= {Hiring} target="_blank" rel="noopener noreferrer">Hiring Flyer &rarr;</a>
              <a href={Nails} target="_blank" rel="noopener noreferrer">Nail Art Swag &rarr;</a>
              <a href={Swag} target="_blank" rel="noopener noreferrer">Other Swag &rarr;</a>
            </div>
            <div>
              <h4>Social Media</h4>
              <img src={require("./assets/social-preview.png")} alt="Preview of Formidable URQL social post"/>              
              <p id="market2"><span>About: </span>Through Twitter, Formidable was able to build a strong community, while cementing technical expertise. Because this account was developer focused, we regularly exceeded the metrics of our competitors on posts and were able to connect genuinely with our audience. The Formidable audience was extremely engaged and grew rapidly, increasing almost 140% from March 2017 to March 2018.</p>
              <p><span>Highlights:</span></p>
              <a href={URQL} target="_blank" rel="noopener noreferrer">URQL Open Source Release &rarr;</a>
              <a href={Fast} target="_blank" rel="noopener noreferrer">react-fast-compare Open Source Release &rarr;</a>
              <a href={Saga} target="_blank" rel="noopener noreferrer">redux-saga Blog Post Promotion &rarr;</a>
              <a href={Culture} target="_blank" rel="noopener noreferrer">Company Culture &rarr;</a>
            </div>
            {/* <h4>Want to know more? Check out my <a href="#">resume</a></h4> */}
          </section>
        </section>
      </>
    );
  }
}

export default Portfolio;