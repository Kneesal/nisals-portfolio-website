import React from "react";
import './contact.css'

const ContactMe = () => {

  return (
      <div className="contact-container">
            <h1 style = {{ padding: '1em'}} >Contact Me</h1>
            <div className="contact-wrapper">
                <p className="cta-text">[Put your call to action here]</p>
                <a
                  rel="noreferrer"
                  target="_blank"
                  className="btn-calltoaction"
                  href="mailto:nisalcottingham@gmail.com"
                  >Call to Action</a>
            </div>
            <div style = {{ paddingTop: '3em'}}>
              <ul className="footer">
                <li className="footer items">GitHub</li>
                <li className="footer items">LinkedIn</li>
                <li className="footer items">Resume</li>
              </ul>
            </div>
      </div>
  );
};

export default ContactMe;
