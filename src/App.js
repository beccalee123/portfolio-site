import React, { Component } from 'react';
import { Route } from "react-router-dom";

import './styles/base.scss';
import Header from './pages/header.js';
import Footer from './pages/footer.js';

class App extends Component {
  render() {
    return (
      <>
        <Header/>
        <Footer/>

      </>
    );
  }
}

export default App;
