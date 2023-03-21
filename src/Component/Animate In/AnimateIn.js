import {useRef, useEffect, useState} from "react";

const AnimateIn = ({from, to, children}) => {

    const ref = useRef(null)
    const [isIntersecting, setIsIntersecting] = useState(false);
    
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
          }

        useEffect(()=> {
            const element = ref.current
            const observer = new IntersectionObserver(([entry])=> setIsIntersecting(entry.isIntersecting),options);
            if(element){observer.observe(element)}

            return () => {
                if(element){observer.unobserve(element)}
            }
        })

    const transition = {transition: 'all 0.5s ease-in-out', width: '100%'}
    return(
        <div
        style={ isIntersecting ? {
            ...to,
            ...transition,
        }: {
            ...from,
            ...transition
        }} 
        ref = {ref}>

            {children}

        </div>
    )
}

const FadeUp = ({children}) => {

    return(
    <AnimateIn from = {{opacity: 0, translate:'0 20px' }} to = {{opacity: 1, translate: 'none'}}>
      {children}
    </AnimateIn>
    )
  };
  
const FadeRight = ({children}) => {

    return(
    <AnimateIn from = {{opacity: 0, translate:'20px 0px' }} to = {{opacity: 1, translate: 'none'}}>
      {children}
    </AnimateIn>
    )
  }

const FadeLeft = ({children}) => {

    return(
    <AnimateIn from = {{opacity: 0, translate:'-20px 0px' }} to = {{opacity: 1, translate: 'none'}}>
      {children}
    </AnimateIn>
    )
  }

  const FadeIn = ({children}) => {

    return(
    <AnimateIn from = {{opacity: 0 }} to = {{opacity: 1}}>
      {children}
    </AnimateIn>
    )
  }

  const ObserveOnly = ({children}) => {

    return(
    <AnimateIn from = {{opacity: 1, translate:'none' }} to = {{opacity: 1, translate: 'none'}}>
      {children}
    </AnimateIn>
    )
  };


export const Animate = {
    FadeUp,
    FadeLeft,
    FadeRight,
    ObserveOnly,
    FadeIn
};