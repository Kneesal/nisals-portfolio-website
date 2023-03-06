import React, { useState, useEffect } from "react";
import "./nav.css";
import { HashLink } from 'react-router-hash-link';
import '../../index.css'


const Navbar = () => {
  const [scrollHeight, setScrollHeight] = useState(0);
  const [showMenu, setShowMenu] = useState(false)
  const [viewportWidth, setViewportWidth] = useState(0)

  const handleScroll = () => {
    return setScrollHeight(window.scrollY)
  };

  const handleResize = () => {
    return setViewportWidth(window.innerWidth)
  }

  // const boxShadow = Math.min(scrollHeight/200 , 5)
  // const opacity = Math.min(scrollHeight/500 , 1)

  useEffect(() => {
    
    window.addEventListener("scroll", handleScroll);
    window.addEventListener('resize', handleResize);
    setViewportWidth(window.innerWidth)

    return () => {
      window.removeEventListener("scroll", handleScroll );
      window.removeEventListener('resize', handleResize);
    };
  }, [viewportWidth]);

  const handleClick = () => {
    !showMenu ? setShowMenu(true) : setShowMenu(false)
  } 

  return (
    
    <div className={ (scrollHeight > 50 ? "navColor sticky nav": "hidden sticky nav")}>
      <div className=" burger burger-container"><img src="8805049.png" alt ='burger' className="burgerImage"  onClick={handleClick}></img></div>
      <ul className="sticky nav align-center">
        <li className={showMenu && viewportWidth <= 600  ? 'show ': "items"}><HashLink smooth to="/#home" onClick={(handleClick)}>Home</HashLink></li>
        <li className={showMenu && viewportWidth <= 600  ? 'show ': "items"}><HashLink smooth to="/#aboutme" onClick={(handleClick)}>About Me</HashLink></li>
        <li className={showMenu && viewportWidth <= 600  ? 'show ': "items"}><HashLink smooth to="/#projects" onClick={(handleClick)}> Projects</HashLink></li>
        <li className={showMenu && viewportWidth <= 600  ? 'show ': "items"}><HashLink smooth to = "/#contact"  className={"gradientButton"} onClick={(handleClick)}> Contact </HashLink></li>
      </ul>
    </div>
  );
};

export default Navbar;

