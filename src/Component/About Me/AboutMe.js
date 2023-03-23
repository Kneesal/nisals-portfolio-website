import React from "react";
import './aboutme.css'
import { Animate } from '../Animate In/AnimateIn.js'
import profilepic from '../../assets/profilepic.jpeg'

const AboutMe = () => {

  return (
    <div style = {{ paddingBottom: '13rem', backgroundColor: "rgb(24 27 37)"}} id = 'aboutme'  >
      <Animate.FadeUp>
      <h1 
      className={"aboutheader"} 
      style = {{ paddingBottom: '3em', paddingTop: '3em'}}>
        About Me </h1>
      </Animate.FadeUp>
        <div className="aboutme flex">
            <div style = {{ width: '30rem'}}>
            <Animate.FadeUp>
                <img 
                style = {{borderRadius: "100rem", width: '100%', height: 'auto'}}
                alt = 'profilePhoto'
                src={profilepic}>  
                </img>
            </Animate.FadeUp>
            </div>
            <div 
            style = {{ overflowWrap: "break-word", width: '400px'}}
            >
              <Animate.FadeUp>
                <p>Passionate about software development and using my talents </p>
              </Animate.FadeUp>
            </div>
        
        </div>
        
    </div>
  );
};

export default AboutMe;
