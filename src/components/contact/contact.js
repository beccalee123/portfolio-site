import React from "react";

import '../../base-styles/base.scss';
import './contact.scss';


class Contact extends React.Component {

  render() {
    return (
      <>
        <section id="contact">
          <h2>Get In Touch</h2>
          <p>Looking to add an ice-cream-loving dev to your team? Have a question about a project? I'd love to talk.</p>
          <ul>
            <li><a href="mailto:becca@beccalee.dev" target="_blank" rel="noopener noreferrer"><img src={require('./assets/email.png')} alt="email icon"/></a></li>
            <li><a href="https://twitter.com/the_becca_lee" target="_blank" rel="noopener noreferrer"><img src={require('./assets/twitter.png')} alt="twitter icon"/></a></li>
            <li><a href="https://www.linkedin.com/in/beccalee123/" target="_blank" rel="noopener noreferrer"><img src={require('./assets/linkedin.png')} alt="LinkedIn icon"/></a></li>
            <li><a href="https://github.com/beccalee123" target="_blank" rel="noopener noreferrer"><img src={require('./assets/github.png')} alt="GitHub icon"/></a></li>
            
          </ul>
        </section>
      </>
    );
  }
}

export default Contact;