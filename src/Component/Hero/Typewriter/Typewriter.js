import { render } from "@testing-library/react";
import React from "react";    

const Typewriter = () => {

    const carosel = [
        {id: 1, value: 'Software Engineer'},
        {id: 2, value: 'Problem Solver'},
    ]

    

    return(
        <div>
            <p>Hello my name is Nisal</p>
            <p> {`I am a ${"Software Engineer"}`}</p>
        </div>
    )
}

export default Typewriter