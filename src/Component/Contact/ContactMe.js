import React from "react";
import './contact.css'

const ContactMe = () => {
  return (
    <div className="contactbar">
      <h1 style = {{ paddingBottom: '3em'}} >Contact Me</h1>
      <ul className="footer" style = {{ paddingBottom: '5rem'}}>
        <li className="footer items">GitHub</li>
        <li className="footer items">LinkedIn</li>
        <li className="footer items">Email</li>
        <li className="footer items">Resume/CV</li>
      </ul>
    </div>
  );
};

export default ContactMe;
