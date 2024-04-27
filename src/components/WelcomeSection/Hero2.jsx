import React, { useRef } from "react";
import { TypewriterText } from "./TypewriterText";
import { AnimatedButton } from "./AnimatedButton";
import { Scroll } from "./Scroll";
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import team from "/src/assets/bannerPrincipal.jpeg"


export const Hero2 = () => {
  const heroContainer = useRef();
  const colors = ['#072A59', '#0B3F84'];

  useGSAP(() => {
    let time = gsap.timeline(); 
    time.fromTo('#imgPrincipal',
      { opacity: 0.3, duration: 1 },
      { opacity: 1, scale: 1 }),
     time.fromTo('#title',
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 1 }, '<1'),
     time.fromTo('#info',
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 1 }, '<1'),
     time.fromTo('#button',
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 1 }, '>1')
   gsap.to("#title", {
      duration: 2, // Duración de la animación en segundos
      color: () => colors[Math.floor(Math.random() * colors.length)], //Selección de un color aleatorio de la lista
      repeat: -1, //Repetir infinitamente
      yoyo: true, //Alternar entre el color actual y el nuevo color
      ease: "back.inOut(1.7)" // Sin efecto de suavizado
    });
   time.fromTo('#descrition',
  { opacity:0, yPercent: 100},
{ opacity:0.7, yPercent: 0}, '-=2')
   time.to("#arrow", { y: '+=5', opacity: 0.7, yoyo: true, color: () => colors[Math.floor(Math.random() * colors.length)], repeat: -1, duration: 1, ease: "power1.inOut" }); // < --automatically reverted

  }, { scope: heroContainer });

  return (

    <section ref={heroContainer} className="">

      <div
        className="w-[100vw] h-[100vh] flex flex-col place-items-center"
      >
        <img id='imgPrincipal' src={team} className="lg:absolute lg:mt-0 -z-10 lg:h-max-[100vh] lg:ml-20" alt="" />
        <div className="bg-white  lg:hidden h-40 md:h-[25vh] w-[100vw] -mt-20 md:-mt-40"></div>

        <div className="max-w-[90vw] mb-4  -mt-36 md:-mt-[20vh] lg:bg-transparent h-[50vh] text-center flex flex-col items-center md:h-[35vh] lg:max-w-[800px] lg:my-20 lg:pt-48 lg:h-[70vh] lg:ml-28">
          <p
            id="info"
            className=" mb-4 text-transform: capitalize text-2xl font-roboto font-semibold align-text-bottom text-[#747e88] lg:text-2xl lg:my-0 lg:mt-4 lg:text-[#fdfefe]"
          >
            Neal Horn, DDS, MS
          </p>

          <h1
            id="title"
            className=" text-5xl font-black font-zen text-primary md:text-7xl lg:max-w-[35vw] lg:my-4"
          >
            ENDODONTICS FORT WORTH
          </h1>

          <TypewriterText id='type' />

          <div id='button' className="hidden lg:flex lg:max-w-[40vw] lg:items-center lg:mx-auto lg:space-x-4 lg:justify-center">
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
          <p id='descrition' className="font-roboto bg-[#cadffb] opacity-70 rounded-sm p-2 mb-4 lg:opacity-60 lg:bg-primary lg:p-4 lg:text-white lg:mt-8">"<strong>Southside Endodontics </strong>was founded on the idea that quality endodontic care can and should be accessible to anyone who needs their oral health restored.We work hand in hand with dentists in Fort Worth and surrounding areas to maintain your natural teeth. We strive to provide the highest quality care in a friendly and comfortable environment."</p>
        </div>
        <Scroll id={'dentalInsurance'} text={'Scroll Down'} />
      </div>
    </section>
  );
}

