import React from "react";
import './aboutme.css'

const AboutMe = () => {
  return (
    <div style = {{ paddingBottom: '5rem'}}>
      <h1 className="aboutheader" style = {{ paddingBottom: '3em'}}>About Me</h1>
        <div className="aboutme flex">
            <div>
                <img style = {{borderRadius: "1.5em", width: '400px', height: 'auto' }} alt = 'profilePhoto'src="https://gweb-research-imagen.web.app/compositional/An%20oil%20painting%20of%20a%20British%20Shorthair%20cat%20wearing%20a%20cowboy%20hat%20and%20red%20shirt%20skateboarding%20on%20a%20beach./1_.jpeg"></img>
            </div>
            <div style = {{ overflowWrap: "break-word", width: '400px'}}>
                <p> Enter text here about yourself. As you can see I am a skateboarding cat. Not a lot much else going on, wbu?</p>
            </div>
        </div>
    </div>
  );
};

export default AboutMe;
