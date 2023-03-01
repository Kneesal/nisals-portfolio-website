import React from "react"; 
import Typewriter from "./Typewriter/Typewriter";
import './hero.css'

const Hero = () => {

    return(
        <div className="hero" id="home">
            <h1 style={{fontSize: '40px'}}><Typewriter/></h1>
        </div>
    )
}

export default Hero