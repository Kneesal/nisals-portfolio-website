import React from 'react';
import Navbar from './Component/Navbar/Navbar';
import Hero from './Component/Hero/Hero';
import AboutMe from './Component/About Me/AboutMe';
import Projects from './Component/Projects/Projects';
import ContactMe from './Component/Contact/ContactMe';
import { BrowserRouter } from 'react-router-dom';

function App() {





  return (
    <div className="App">
    <BrowserRouter>
      <Navbar/>
    </BrowserRouter>
      <Hero/>
      <AboutMe/>
      <Projects/>
      <ContactMe/>
    </div>
  );
}

export default App;
