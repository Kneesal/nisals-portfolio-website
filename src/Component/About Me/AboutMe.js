import React from "react";
import './aboutme.css'
import { Animate } from '../Animate In/AnimateIn.js'

const AboutMe = () => {

  return (
    <div style = {{ paddingBottom: '13rem', backgroundColor: "#242526"}} id = 'aboutme'  >
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
                src="https://scontent.fakl1-4.fna.fbcdn.net/v/t1.6435-9/67543874_2416105221768880_2313676067488923648_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=TGxa4aW8IhIAX_OdQxE&_nc_ht=scontent.fakl1-4.fna&oh=00_AfBRANNaPVLyD_muZ119tfXUj2ejOlAGrP5DJvmXkGYhag&oe=6413D61E">  
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
