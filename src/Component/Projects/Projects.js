import React from "react";     
import './project.css'
import Tilt from 'react-parallax-tilt';
import {Animate} from '../Animate In/AnimateIn.js'

const Projects = () => {

    return(
        <div style={{paddingBottom: '5rem'}}>
            <div className="">
            <Animate.FadeUp>
            <h1 style = {{ padding: '3em'}}>Projects</h1>
            </Animate.FadeUp>
            <Animate.FadeUp>
                <div className="project-flex-wrapper">
                    <div style = {{ overflowWrap: "break-word", width: '400px', textAlign: "left"}}>
                        <h1> FaceGPT</h1>
                         <p> this is my project dawg this is my project dawgthis is my project dawgthis is my project dawgthis is my project dawgthis is my project dawgthis is my project dawgthis is my project dawgthis is my project dawg</p>
                    </div>
                    <div style = {{ width: '45rem', }}>
                    <Tilt tiltMaxAngleX =  {10} tiltMaxAngleY =  {10} glareEnable = {true} glareBorderRadius = "2em">
                        <img src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png" alt = {'project'} style = {{ width: '100%', height: 'auto', borderRadius: '2rem'}}></img>
                    </Tilt>
                    </div>
                </div> 
            </Animate.FadeUp>
            <Animate.FadeUp>
                <div className="project-flex-wrapper">
                    <div style = {{ overflowWrap: "break-word", width: '400px', textAlign: "left"}}>
                    <h1> PokeDex</h1>
                         <p> this is my project dawg this is my project dawgthis is my project dawgthis is my project dawgthis is my project dawgthis is my project dawgthis is my project dawgthis is my project dawgthis is my project dawg</p>
                    </div>
                    <div style = {{ width: '45rem', }}>
                    <Tilt tiltMaxAngleX =  {10} tiltMaxAngleY =  {10} glareEnable = {true} glareBorderRadius = "2em">
                        <img src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png" alt = {'project'} style = {{ width: '100%', height: 'auto', borderRadius: '2rem'}}></img>
                    </Tilt>
                    </div>
                </div> 
            </Animate.FadeUp>
            <Animate.FadeUp>
                <div className="project-flex-wrapper">
                    <div style = {{ overflowWrap: "break-word", width: '400px', textAlign: "left"}}>
                    <h1> Student Life Landing Page</h1>
                         <p> this is my project dawg this is my project dawgthis is my project dawgthis is my project dawgthis is my project dawgthis is my project dawgthis is my project dawgthis is my project dawgthis is my project dawg</p>
                    </div>
                    <div style = {{ width: '45rem', }}>
                    <Tilt tiltMaxAngleX =  {10} tiltMaxAngleY =  {10} glareEnable = {true} glareBorderRadius = "2em">
                        <img src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png" alt = {'project'} style = {{ width: '100%', height: 'auto', borderRadius: '2rem'}}></img>
                    </Tilt>
                    </div>
                </div> 
            </Animate.FadeUp>
            </div>
        </div>
    )
}

export default Projects