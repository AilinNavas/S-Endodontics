import React, { useContext, useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from "gsap/all";
import AnimationContext from '../../context/animation-context';
import DentalInsurance from './DentalInsurance';

export default function Second() {

    let secondRef = useRef(null);
    let textRef = useRef();


    let animationContext = useContext(AnimationContext);

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        gsap.timeline({
          scrollTrigger: {
            trigger: secondRef.current,
            start: "+=200 70%",
            end: "+=2000",
            onEnter: () => {
              animationContext.setCurrentBg('#222');
            },
            onLeaveBack: () => {
              animationContext.setCurrentBg('#fff');
            }
          }
        })
      }, [])
    

    return (
        <div ref={secondRef} className='h-screen center' >
    
            <DentalInsurance />

        </div>
    )
}