import React, { useRef } from "react";
import { TypewriterText } from "./TypewriterText";
import { AnimatedButton } from "./AnimatedButton";
import { Scroll } from "./Scroll";
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import logo from "/src/assets/transparente.jpg"
import team from "/src/assets/1.png"


export const Hero2 = () => {
  const heroContainer = useRef();
  const colors = ['#072A59', '#0B3F84'];

  useGSAP(() => {
    gsap.fromTo('#imgLogo',
      { opacity: 1, scale: 1, },
      { opacity: 0, delay: 2, duration: 1, });
    gsap.to("#title", {
      duration: 2, // Duración de la animación en segundos
      color: () => colors[Math.floor(Math.random() * colors.length)], //Selección de un color aleatorio de la lista
      repeat: -1, //Repetir infinitamente
      yoyo: true, //Alternar entre el color actual y el nuevo color
      ease: "back.inOut(1.7)" // Sin efecto de suavizado
    });
    gsap.to("#arrow", { y: '+=5', opacity: 0.7, yoyo: true, color: () => colors[Math.floor(Math.random() * colors.length)], repeat: -1, duration: 1, ease: "power1.inOut" }); // < --automatically reverted

  }, { scope: heroContainer });

  return (

    <section ref={heroContainer} className="">
{/* 
      <div id='imgLogo' className="w-[100vw] h-[100vh] bg-white absolute flex items-center justify-center">
        <img  src={logo} className="p-20" />
      </div> */}

      <div
        className="w-[100vw] h-[100vh] flex flex-col place-items-center "
      >
        <img src={team} className="lg:absolute -z-10 lg:h-max-[100vh] lg:ml-20" alt="" /> 
        
        <div className="max-w-[90vw] h-[60vh] text-center flex flex-col justify-center md:h-[70vh] lg:max-w-[800px] lg:my-20 lg:pt-48 lg:h-[75vh] lg:ml-28">
          <p
            id="info"
            className=" my-4 text-transform: capitalize text-2xl font-roboto font-bold align-text-bottom text-[#747e88] p-2 lg:mt-[5vh] lg:text-4xl lg:hidden"
          >
            Neal Horn, DDS, MS
          </p>

          <h1
            id="title"
            className="text-5xl font-black font-zen text-primary md:text-7xl lg:max-w-[35vw] lg:mb-10 lg:mt-10"
          >
            ENDODONTICS FORT WORTH
          </h1>

          <TypewriterText />

          <div className="hidden lg:flex lg:max-w-[40vw] lg:items-center lg:mx-auto lg:space-x-4 lg:justify-center">
          <AnimatedButton
              text="Schedule Appointment"
              backgroundColor="[#0e57b8]"
              link={"https://www.southsideendodontics.com/contact"}
            />
            <AnimatedButton
              text="Refer Now"
              backgroundColor="primary"
              link={'https://securesite1246.tdo4endo.com/RefDocsLogin.aspx'}
            />
         
          </div>
      
        </div>
        <Scroll id={'dentalInsurance'} text={'Scroll Down'} />
      </div>
    </section>
  );
}

