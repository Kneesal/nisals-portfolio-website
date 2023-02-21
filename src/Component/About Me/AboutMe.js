import {useEffect, useRef, useState} from "react";
import './aboutme.css'

const AboutMe = () => {

  const aboutMeRef = useRef();
  const [animateIn, setAnimateIn] = useState(false);

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.45
  }

  const callback = (entries) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting){
       return  setAnimateIn(true);
      }
      else{
       return setAnimateIn(false);
      }
    })
  }

  useEffect(()=> {
    const image = aboutMeRef.current
    const observer = new IntersectionObserver(callback, options);
    observer.observe(aboutMeRef.current)

    return () => {
      observer.unobserve(image)
    }
  })


  return (
    <div style = {{ paddingBottom: '13rem', backgroundColor: "#242526"}}>
      <h1 className="aboutheader" style = {{ paddingBottom: '3em', paddingTop: '3em'}}>About Me</h1>
        <div className="aboutme flex">
            <div style = {{ width: '30rem'}}>
                <img ref = {aboutMeRef} style = {{borderRadius: "100rem", width: '100%', height: 'auto', opacity: animateIn ? '1' : '0', transition: 'all 2s' , transform: animateIn ? `translate(${30}px)` : null }} alt = 'profilePhoto'
                src="https://scontent.fakl1-4.fna.fbcdn.net/v/t1.6435-9/67543874_2416105221768880_2313676067488923648_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=TGxa4aW8IhIAX_OdQxE&_nc_ht=scontent.fakl1-4.fna&oh=00_AfBRANNaPVLyD_muZ119tfXUj2ejOlAGrP5DJvmXkGYhag&oe=6413D61E">  
                </img>
            </div>
            <div style = {{ overflowWrap: "break-word", width: '400px'}}>
                <p> Enter text here about yourself. As you can see I am a skateboarding cat. Not a lot much else going on, wbu?</p>
            </div>
        </div>
    </div>
  );
};

export default AboutMe;
