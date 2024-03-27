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
const textPricing3 = 'Endodontic treatment usually costs between $800-$1500 on average, but actual prices may vary depending on different factors and situations.'


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
    <section ref={contenedorRef} className="lg:pl-20 border-2 border-green-950" id="pricing">
      <div className='h-auto w-[90vw] mx-auto flex flex-col items-start lg:w-[80vw] lg:mx-auto lg:h-[85vh] md:h-[80vh]'>
        <div className={`w-[90vw] mx-auto h-auto lg:w-[80vw] border-2 border-green-800`}>
          <p className='pricing1 text-gray-dark font-roboto font-normal text-left py-2 md:py-6 lg:px-6 bg-transparent text-xl md:text-3xl lg:text-3xl'>
            {textPricing}
          </p>
        </div>

      <div className="w-[90vw] mx-auto flex flex-col justify-center items-center lg:flex-row lg:w-[80vw] md:h-[45vh] lg:h-[50vh] border-2 border-green-800">

          <div
            id="tarjetas"
            className="flex flex-col mx-auto items-center justify-center space-y-4 md:flex-row md:items-center md:space-x-4 lg:space-x-12 lg:items-end lg:space-y-0 border-2 border-green-800"
            style={{ minHeight: 'inherit' }} // Asegura que el contenedor tenga altura mínima
          >
            <CardPricing
              title={"Dental Insurance"}
              description={"Since this varies for each individual, usually 25 - 75% of the cost of the procedure is required at the time of service."}
              icon={si}
            />
            <CardPricing
              title={"No Dental Insurance"}
              description={"50% of the total will be required when we begin treatment and the balance will be due upon completion of treatment."}
              icon={no}
            />
           </div> 

        </div>


        <div className={`w-[90vw] mx-auto lg:w-[80vw] text-center h-auto border-2 border-green-600`}>
          <p className='pricing2 text-xl hidden md:block text-gray-dark font-roboto font-normal text-left py-2 lg:px-6 bg-transparent md:text-3xl md:py-6 lg:text-3xl'>
            {textPricing2}
          </p>
          <p className='pricing2 text-xl md:hidden text-gray-dark font-roboto font-normal text-left py-2 lg:px-6 bg-transparent lg:text-3xl'>
            {textPricing3}
          </p>
        </div>

      </div>

      <Scroll id={'testimonials'} />
    </section>


  )
}
