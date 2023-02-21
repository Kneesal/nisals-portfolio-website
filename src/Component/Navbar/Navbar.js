import React, { useState, useEffect } from "react";
import "./nav.css";

const Navbar = () => {
  const [scrollHeight, setScrollHeight] = useState(0);

  const handleScroll = () => {
    const scrollY = window.scrollY
    setScrollHeight(scrollY)
  };

  const boxShadow = Math.min(scrollHeight/200 , 5)
  // const opacity = Math.min(scrollHeight/500 , 1)

  useEffect(() => {
    
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll );
    };
  }, []);

  return (
    
    <div>
      <ul className={ (scrollHeight > 600 ? "navColor sticky nav": "sticky nav")} style={{boxShadow: `0 ${boxShadow}px ${boxShadow *2}px rgb(0 0 0 / 0.2)`, /*opacity: `${opacity}`*/ }}>
        <li className="items"> Home </li>
        <li className="items"> About Me</li>
        <li className="items"> Projects</li>
        <li className="items"> Contact </li>
      </ul>
    </div>
  );
};

export default Navbar;
