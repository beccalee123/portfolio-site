import React from "react";

import '../../base-styles/base.scss';


class Portfolio extends React.Component {

  render() {
    return (
      <>
        <h2>Portfolio</h2>
        <h3>Apps & Sites</h3>
        <div>
          <h3>DevFund</h3>
          <img/>
          <p>DevFund is a proof-of-concept for a site that helps fund learning resources for new developers looking to break into the industry.</p>
          <p>Tech Used:</p>
          <ul>
            <li>React</li>
            <li>Node.js</li>
            <li>SASS</li>
            <li>MongoDB</li>
            <li>Superagent</li>
            <li>PayPal API</li>
            <li>Netlify</li>
            <li>Heroku</li>
          </ul>
          <p>GitHub Repo</p>
          <p>URL</p>
        </div>
        <div>
          <h3>cf-quick-start</h3>
          <img/>
          <p>cf-quick-start is a CLI-based project creation npm package that will provide you with fleshed-out, functional starter code in just a few easy steps.</p>
          <p>Tech Used:</p>
          <ul>
            <li>Node.js</li>
            <li>MongoDB</li>
            <li>npm</li>
          </ul>
          <p>GitHub Repo</p>
          <p>npm</p>
        </div>
        <div>
          <h3>Space Rover</h3>
          <img/>
          <p>Space Rover is a mobile-first, educational website about our solar system.</p>
          <p>Tech Used:</p>
          <ul>
            <li>JavaScript</li>
            <li>Node.js</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>jQuery</li>
            <li>Express</li>
            <li>Postgres</li>
            <li>EJS</li>
            <li>Superagent</li>
            <li>Heroku</li>
          </ul>
          <p>GitHub Repo</p>
          <p>URL</p>
        </div>
        <div>
          <h3>Ocean Commotion</h3>
          <img/>
          <p>Ocean Commotion is a word scramble game with an oceanic theme.</p>
          <p>Tech Used:</p>
          <ul>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
          <p>GitHub Repo</p>
          <p>URL</p>
        </div>

        <h3>Tech Writing & Dev-Focused Marketing Content</h3>
        <div>
          <h3>Formidable.com Website Content</h3>
          <img/>
          <p>Led a full redesign of Formidable.com to improve company branding and messaging. I wrote new website copy, updated the content structure, and worked with Formidable's team of in-house designers and developers to carry out the vision. As a result, key pages saw traffic increases of 100 - 200% and bounce rates improved by 30%.</p>
          <p>Highlights:</p>
          <a href="#">Homepage</a>
          <a href="#">What We Do</a>
          <a href="#">Our Work</a>
          <a href="#">Careers</a>
        </div>
        <div>
          <h3>Formidable Case Studies</h3>
          <img/>
          <p>Working closely with developers and clients, I wrote technical case studies that captured Formidable's work as a JavaScript consultancy. The case studies were a key component for business development, as they provided a glimpse of Formidable's technical expertise to prospective clients.</p>
          <p>Highlights:</p>
          <a href="#">Starbucks Progressive Web App</a>
          <a href="#">Prix.ai Dynamic Pricing Dashboard</a>
          <a href="#">Starbucks Store Locator</a>
          <a href="#">Walmart React Native Pharmacy</a>
        </div>
        <div>
          <h3>Formidable Marketing Collateral</h3>
          <img/>
          <p>I managed the conceptualization and creation of Formidable's suite of marketing collateral, from carefully written flyers to conference swag items.</p>
          <p>Highlights:</p>
          <a href="#">Business Development Flyer</a>
          <a href="#">Hiring Flyer</a>
          <a href="#">Nail Art Swag</a>
          <a href="#">Other Swag</a>
        </div>
        <div>
          <h3>Formidable Social Media</h3>
          <img/>
          <p>Through Twitter, Formidable was able to build a strong community, while cementing technical expertise. Because this account was developer focused, we regularly exceeded the metrics of our competitors on posts and were able to connect genuinely with our audience. The Formidable audience was extremely engaged and grew rapidly, increasing almost 140% from March 2017 to March 2018.</p>
          <p>Highlights:</p>
          <a href="#">URQL Open Source Release</a>
          <a href="#">react-fast-compare Open Source Release</a>
          <a href="#">redux-saga Blog Post Promotion</a>
          <a href="#">Company Culture</a>
        </div>
        <h3>Want to know more? Check out my <a href="#">resume</a></h3>
      </>
    );
  }
}

export default Portfolio;