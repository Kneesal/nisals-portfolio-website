import React, { useState, useEffect } from "react";
import "./nav.css";
import { HashLink } from 'react-router-hash-link';
import '../../index.css'


const Navbar = () => {
  const [scrollHeight, setScrollHeight] = useState(0);
  const [showMenu, setShowMenu] = useState(false)

  const handleScroll = () => {
    const scrollY = window.scrollY
    setScrollHeight(scrollY)
  };

  // const boxShadow = Math.min(scrollHeight/200 , 5)
  // const opacity = Math.min(scrollHeight/500 , 1)

  useEffect(() => {
    
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll );
    };
  }, []);

  const handleClick = () => {
    !showMenu ? setShowMenu(true) : setShowMenu(false)
  } 

  return (
    
    <div className={ (scrollHeight > 50 ? "navColor sticky nav": "hidden sticky nav")}>
      <div className=" burger burger-container"><img src="8805049.png" alt ='burger' className="burgerImage"  onClick={handleClick}></img></div>
      <ul className="sticky nav">
        <li className={showMenu ? 'show ': "items"}><HashLink smooth to="/#home">Home</HashLink></li>
        <li className={showMenu ? 'show ': "items"}><HashLink smooth to="/#aboutme">About Me</HashLink></li>
        <li className={showMenu ? 'show ': "items"}><HashLink smooth to="/#projects"> Projects</HashLink></li>
        <li className={showMenu ? 'show ': "items"}><HashLink smooth to = "/#contact" className="gradientFont"> Contact </HashLink></li>
      </ul>
    </div>
  );
};

export default Navbar;
