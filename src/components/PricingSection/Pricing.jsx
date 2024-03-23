import React, { useRef } from 'react'
import no from '/src/assets/no.svg'
import si from '/src/assets/si.svg'
import { gsap, ScrollTrigger, ScrollToPlugin } from "gsap/all";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import { CardPricing } from './CardPricing'

import { Scroll } from '../WelcomeSection/Scroll';


const textPricing = 'At Southside Endodontics, our priority is your dental health and comfort. We strive to provide transparent and accessible pricing to ensure a stress-free experience for our patients.'
const textPricing2 = 'While the average price range for endodontic treatment falls between $800 - $1500, please note that individual prices may vary based on specific factors and circumstances.'


gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export const Pricing = () => {

const contenedorRef = useRef();

  useGSAP(() => {
    const ourTextPricing1 = new SplitType("p.pricing1", { types: "words" });
    const textPricingChars1 = ourTextPricing1.words;
    const ourTextPricing2 = new SplitType("p.pricing2", { types: "words" });
    const textPricingchars2 = ourTextPricing2.words;
  
    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: contenedorRef.current,
        pin: true,
        pinSpacing: true,
        start: "top-=40px top",
        end: "+=2200",
        scrub: 1,
        scope: contenedorRef, // Esta línea estaba fuera del objeto scrollTrigger, ahora está dentro.
      }
    });
  
    // Animación de texto pricing1
    timeline.fromTo(
      textPricingChars1,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.1,
        color: "#2e3135",
        fontWeight: "medium",
        stagger: 0.1,
      }
    );
  
    // Animación de las tarjetas con filtro blur
    timeline.fromTo(
      '#tarjetas',
      { opacity: 0.5, scale: 0.5 },
      { opacity: 1, scale: 1, stagger: 0.5, duration: 2, ease: "power3.out" }
    );
  
    // Animación de texto pricing2
    timeline.fromTo(
      textPricingchars2,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.1,
        color: "#2e3135",
        fontWeight: "medium",
        stagger: 0.1,
      }
    );
  });
  

  return (
    <section ref={contenedorRef} className="w-[100vw] h-[90vh]" id="pricing">

      <div className={`w-[80vw] ml-[10vw] p-2 text-center h-auto`}>
        <p className='pricing1 text-gray-dark font-roboto font-normal text-center pt-2 pb-4 lg:px-6 bg-transparent text-xl md:text-2xl lg:text-3xl'>
          {textPricing}
        </p>
      </div>



      <div className="w-[80vw] ml-[10vw] flex flex-col lg:flex-row lg:items-start lg:justify-center md:h-[45vh] lg:h-[50vh]">

        <div
          id="tarjetas"
          className="flex flex-col content-start space-y-4 md:flex-row md:items-center md:space-x-4 lg:space-x-12 lg:items-end lg:space-y-0"
        >
          <CardPricing

            title={"Dental Insurance"}
            description={
              "Since this varies for each individual, usually 25 - 75% of the cost of the procedure is required at the time of service."
            }
            icon={si}
          />
          <CardPricing

            title={"No Dental Insurance"}
            description={
              "50% of the total will be required when we begin treatment and the balance will be due upon completion of treatment."
            }
            icon={no}
          />

        </div>

      </div>

      <div className={`w-[80vw] ml-[10vw] p-2 text-center h-auto`}>
        <p className='pricing2 hidden md:block text-gray-dark font-roboto font-normal text-center pt-2 pb-4 lg:px-6 bg-transparent text-xl md:text-2xl lg:text-3xl'>
          {textPricing2}
        </p>
      </div>
      <Scroll id={'testimonials'} />



    </section>


  )
}
