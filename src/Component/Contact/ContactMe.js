import React from "react";
import './contact.css'
import { Animate } from "../Animate In/AnimateIn";

const ContactMe = () => {

  return (
    <Animate.FadeUp>
      <div className="contact-container" id="contact">
            <h1 style = {{ padding: '1em'}} >Contact Me</h1>
            <div className="contact-wrapper">
                <p className="cta-text">Lets work together!</p>
                <a
                  rel="noreferrer"
                  target="_blank"
                  className="btn-calltoaction"
                  href="mailto:nisalcottingham@gmail.com"
                  >Get in touch!</a>
            </div>
            <div style = {{ paddingTop: '3em'}}>
              <ul className="footer">
                <li className="footer items">GitHub</li>
                <li className="footer items">LinkedIn</li>
                <li className="footer items">Resume</li>
              </ul>
            </div>
      </div>
      </Animate.FadeUp>
  );
};

export default ContactMe;
