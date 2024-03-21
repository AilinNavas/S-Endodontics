import React, {useRef} from "react";
import { TypewriterText } from "./TypewriterText";
import { AnimatedButton } from "./AnimatedButton";
import torito from "/src/assets/torito2.svg";
import appointment from "/src/assets/icons/appointment.svg"
import { Scroll } from "./Scroll";
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'


export const Hero2 = () => {
  const heroContainer = useRef();
  const colors = ['#072A59', '#0B3F84', '#031226'];

  useGSAP(() => {
    // gsap code here...
    gsap.to("#title", {
      duration: 2, // Duración de la animación en segundos
      color: () => colors[Math.floor(Math.random() * colors.length)], // Selección de un color aleatorio de la lista
      repeat: -1, // Repetir infinitamente
      yoyo: true, // Alternar entre el color actual y el nuevo color
      ease: "back.inOut(1.7)" // Sin efecto de suavizado
    });
    gsap.to("#arrow", { y: '+=5', opacity: 0.7, yoyo: true, color: () => colors[Math.floor(Math.random() * colors.length)], repeat: -1, duration: 1, ease: "power1.inOut" }); // <-- automatically reverted

  }, { scope: heroContainer });

  return (
    <div ref={heroContainer}
      className="w-[100vw] h-[100vh] flex flex-col place-items-center"
    >
      <div id="bg_color" className="h-full w-full absolute -z-10"></div>

      <div className="max-w-[90vw] h-[60vh] my-20 text-center flex flex-col justify-center md:h-[70vh] lg:max-w-[800px] lg:my-10 lg:h-[75vh]">
        <p
          id="info"
          className="text-transform: capitalize text-2xl font-roboto font-bold text-gray p-2 md:text-3xl "
        >
          Neal Horn, DDS, MS
        </p>

        <h1
          id="title"
          className="text-5xl font-black font-zen p-4 text-primary lg:text-8xl"
        >
          ENDODONTICS FORT WORTH
        </h1>

        <div className="max-w-[90vw] mt-[-8vh] lg:text-center lg:mt-[-18vh]">
          <img src={torito} alt="" className="w-[100%]" />
        </div>
        <TypewriterText />

        <div className="hidden lg:flex lg:max-w-[80vw] lg:items-center lg:space-x-4 lg:justify-center">

           <AnimatedButton
            text="Refer Now"
            backgroundColor="primary"
            link={'https://securesite1246.tdo4endo.com/RefDocsLogin.aspx'}
          />
          <AnimatedButton
            text="Schedule Appointment"
            backgroundColor="[#3c89f0]"
            icon={appointment} 
            link={"https://www.southsideendodontics.com/contact"}
           /> 
        </div>
       
      </div>
      <Scroll id={'dentalInsurance'} text= {'Scroll Down'}/>
    </div>
  );
}

