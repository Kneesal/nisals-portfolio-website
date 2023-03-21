import React from "react";
import './contact.css'
import { Animate } from "../Animate In/AnimateIn";
import resume from '../../Resume/Nisals-Resume.pdf'

const ContactMe = () => {

  return (
    
      <div className="contact-container" id="contact">
        <Animate.FadeUp>
            <h1 style = {{ padding: '1em'}} >Contact Me</h1>
        </Animate.FadeUp>
          <Animate.FadeUp>
            <div className="contact-wrapper">
                <p className="cta-text">Lets work together!</p>
                <a
                  rel="noreferrer"
                  target="_blank"
                  className="animated-btn"
                  href="mailto:nisalcottingham@gmail.com"
                  >Call to Action</a>
            </div>
            </Animate.FadeUp>
            <div style = {{ paddingTop: '3em'}}>
            <Animate.FadeIn>
              <ul className="footer">
                <li className="footer items"><a href="https://github.com/Kneesal"  target="_blank" rel="noopener noreferrer"><img src="githubicon.svg" height='30px' width= '30px' alt="github"></img></a></li>
                <li className="footer items"><a href="https://www.linkedin.com/in/nisal-cottingham-8b660216b/?originalSubdomain=nz"  target="_blank" rel="noopener noreferrer"><img src="linkedinicon.svg" height='30px' width= '30px' alt="linkedin"></img></a></li>
                <li className="footer items"><a href={resume} target='_blank' rel="noopener noreferrer"><img src="resumeicon.png" height='30px' width= '30px' alt="resume"></img></a></li>
              </ul>
              </Animate.FadeIn>
            </div>
      </div>
  );
};

export default ContactMe;
