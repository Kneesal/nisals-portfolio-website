import React, { useState, useEffect } from "react";
import "./nav.css";
import { NavLink } from "react-router-dom";

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
    
    <div className={ (scrollHeight > 0 ? "navColor sticky nav": "sticky nav")}>
      <div className=" burger burger-container"><img src="8805049.png" alt ='burger' className="burgerImage"  onClick={handleClick}></img></div>
      <ul className={ (scrollHeight > 600 ? "sticky nav": "sticky nav")}>
        <li className={showMenu ? 'show ': "items"}><NavLink to="/">Home</NavLink></li>
        <li className={showMenu ? 'show ': "items"}><NavLink to="/aboutme">About Me</NavLink></li>
        <li className={showMenu ? 'show ': "items"}><NavLink to="/projects"> Projects</NavLink></li>
        <li className={showMenu ? 'show ': "items"}><NavLink to = "/contact"> Contact </NavLink></li>
      </ul>
    </div>
  );
};

export default Navbar;
