import React, { useRef } from "react";
import { TypewriterText } from './TypewriterText';
import AnimatedButton from './AnimatedButton';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import horn from '/src/assets/cuerno.svg'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function Hero2() {
  const container4 = useRef();

  useGSAP(() => {

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: container4.current,
        
        start: "70vh top",
        end: "80vh"
   
      }
    });
  
    timeline.to(
    '#bg_color',
      {}
    )


  }, { scope: container4 }) //final de animaciónes

  return (
    
    <div ref={container4} className=' w-[100vw] h-[100vh] flex flex-col place-items-center'>
       <div id='bg_color' className='h-full w-full absolute -z-10'></div>

      <div className='max-w-[90vw] my-32 text-center flex flex-col justify-center lg:max-w-[800px]'>
        <p id='info' className='text-transform: capitalize text-2xl font-roboto font-bold text-gray p-2 '>Neal Horn, DDS, MS</p>

        <h1 id='title' className='text-4xl font-black font-zen p-4 text-primary lg:text-8xl'>ENDODONTICS FORT WORTH</h1>

        <TypewriterText />
       

        <div className='hidden lg:flex lg:mt-[5vh] lg:space-x-4  lg:items-center lg:text-center lg:mx-auto'>
          <AnimatedButton text="Refer Now" color="primary" backgroundColor="primary" />
          <AnimatedButton text="Schedule Appointment" color="secondary" backgroundColor="secondary" />
        </div>
        <div className="lg:max-w-[100vw] lg:mt-[-10vh]">
          <img src={horn} alt="" className="w-[100%]" />
        </div>

      </div>

    </div>



  )
}

export default Hero2
