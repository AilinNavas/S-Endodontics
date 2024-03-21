import React, { useRef } from 'react'
import no from '/src/assets/no.svg'
import si from '/src/assets/si.svg'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { CardPricing } from './CardPricing'
import { Scroll } from '../WelcomeSection/Scroll';


gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export const Pricing = () => {

  const contenedorRef = useRef();

  useGSAP(() => {
    let tln = gsap.timeline({
      scrollTrigger: {
        trigger: contenedorRef.current,
        pin: true,
        pinSpacing: true,
        start: "top-=40px top",
        end: "+=2200",
        scrub: 1,

      }
    });

    // Animación de las tarjetas con filtro blur
    tln.fromTo('#tarjetas',
      { filter: 'blur(7px)', opacity: 0.8, scale: 0.8 },
      { filter: 'blur(0px)', opacity: 1, scale: 1, stagger: 0.5, duration: 2, ease: "power3.out" }
    );

  }, { scope: contenedorRef });


  return (
    <section ref={contenedorRef} className="w-[100vw]" id="pricing">
      <div className="w-[80vw] ml-[10vw]  flex flex-col lg:my-0 lg:item lg:flex-row lg:items-start lg:justify-center md:h-[80vh]">
        <div
          id="tarjetas"
          className="flex flex-col content-start items-center space-y-2 md:space-y-12 lg:flex-row lg:space-x-12 lg:items-center lg:space-y-0"
        >
          <CardPricing

            title={"Dental Insurance"}
            description={
              "Since this varies for each individual, usually 25 - 75% of the cost of the procedure is required at the time of service."
            }
            icon={si}
          />
          <CardPricing

            title={"Dental Insurance"}
            description={
              "50% of the total will be required when we begin treatment and the balance will be due upon completion of treatment."
            }
            icon={no}
          />

        </div>
       
      </div>
      
      <Scroll id={'testimonials'} />

    </section>


  )
}
