import React, { Component } from 'react';

import './base-styles/base.scss';
import Header from './components/header/header.js';
import About from './components/about/about.js';
import Portfolio from './components/portfolio/portfolio.js';
import Contact from './components/contact/contact.js';
import Footer from './components/footer/footer.js';

class App extends Component {
  render() {
    return (
      <>
        <Header/>
        <About/>
        <Portfolio/>
        <Contact/>
        <Footer/>

      </>
    );
  }
}

export default App;
