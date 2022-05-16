import React, { Component } from "react";

import "./base-styles/base.scss";
import Header from "./components/header/header.js";
import About from "./components/about/about.js";
import Contact from "./components/contact/contact.js";
import Footer from "./components/footer/footer.js";
import {FunWithCode} from "./components/funWithCode/funWithCode.js";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <About />
        <FunWithCode />
        <Contact />
        <Footer />
      </>
    );
  }
}

export default App;
