import React, {useState, useEffect, useRef} from 'react';
import Navbar from './Component/Navbar/Navbar';
import Hero from './Component/Hero/Hero';
import AboutMe from './Component/About Me/AboutMe';
import Projects from './Component/Projects/Projects';
import ContactMe from './Component/Contact/ContactMe';

function App() {

  const ref = useRef();
  console.log(ref.current)
  const [animateIn, setAnimateIn] = useState(false);

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.45
  }

  const callback = (entries) => {
      const [entry] = entries;
      if(entry.isIntersecting){
       return  setAnimateIn(true);
      }
      else{
       return setAnimateIn(false);
      }
  }

  useEffect(()=> {
    const image = ref.current
    const observer = new IntersectionObserver(callback, options);
    observer.observe(image)
    return () => {
      observer.unobserve(image)
    }
  })

  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <AboutMe
        animateIn = {animateIn}
        ref={ref}
        />
      <Projects/>
      <ContactMe/>
    </div>
  );
}

export default App;
