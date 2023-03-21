import React, { useEffect, useState } from "react";    
import './typewriter.css';
import '../../../index.css'

const Typewriter = () => {
    const [index, setIndex] = useState(0) //tracks the index of the wordCarosel
    const [subIndex, setSubIndex] = useState(0) //tracks the index of the current string in wordCarosel
    const [word, setWord] = useState('')
    const [reverse, setReverse] = useState(false)



    useEffect(()=> {
        const wordCarosel = ['Software Engineer', 'Problem Solver', 'Husband']

        if(subIndex < wordCarosel[index].length +1 && !reverse){
            setWord(wordCarosel[index].substring(0, subIndex))
        }

        if(reverse) {
            setWord(wordCarosel[index].substring(0, subIndex))
        }

        if( reverse && subIndex === 0 && index !== wordCarosel.length -1) { //increase index if we haven't reached end of words array
            setIndex( prev => prev +1)
        }

        if(index === wordCarosel.length -1 && subIndex === 0 && reverse){ //if we are at the end of the array and we have backspaced everything and reverse is still true
            setIndex(0)
        }

        if( subIndex === wordCarosel[index].length && !reverse){ //has word been fully typed out? - set reverse we can backspace
            setReverse(true)
        }

        if (reverse && subIndex === 0) { //once we have fully backspaceced the letter, set reverse to false
            setReverse(false)
        }

        const timeout = setTimeout(() => { //increases subindex to read function ever 1/10th millisec for typing effect. pause for 2 seconds after word is typed
            setSubIndex( prev => reverse ? prev -1 : prev + 1)
        }, subIndex === wordCarosel[index].length ? 2000 : subIndex === 0 ? 1000 : 100)

        return () => clearTimeout(timeout);
    },[index, subIndex, reverse]);
    

    return(
        <div>
            <p>Hello my name is Nisal</p>
            <div style={{display: 'flex', alignItems: "center", justifyContent: 'center', gap: '0.2em', flexWrap: "wrap"}}>
                    <p> {`I am a `}</p>
                    <p className="gradientFont">{`${word}`}</p>
                    <div className="blinking-cursor gradientFont"></div>
            </div>
        </div>
    )
}

export default Typewriter