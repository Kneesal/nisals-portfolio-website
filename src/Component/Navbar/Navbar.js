import React from "react";
import './nav.css'

const Navbar = () => {

    return(
        <div>
            <ul className="sticky nav">
                <li className="items"> Home </li>
                <li className="items"> About Me</li>
                <li className="items"> Projects</li>
                <li className="items"> Contact </li>
            </ul>
        </div>
    )
}

export default Navbar