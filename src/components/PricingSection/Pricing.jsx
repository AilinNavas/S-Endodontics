import React, { useRef } from 'react'
import no from '/src/assets/no.svg'
import si from '/src/assets/si.svg'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { CardPricing } from './CardPricing'
import { TextPricing } from './TextPricing'
import { Scroll } from '../WelcomeSection/Scroll';




gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export const Pricing = () => {

  const textPricing = 'At Southside Endodontics, our priority is your dental health and comfort. We strive to provide transparent and accessible pricing to ensure a stress-free experience for our patients.'
  const textPricing2 = 'While the average price range for endodontic treatment falls between $800 - $1500, please note that individual prices may vary based on specific factors and circumstances.'
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
      { opacity: 0.5, scale: 0.5 },
      { opacity: 1, scale: 1, stagger: 0.5, duration: 2, ease: "power3.out" }
    );

  }, { scope: contenedorRef });


  return (
    <section ref={contenedorRef} className="w-[100vw] h-auto md:h-[90vh] lg:h-[100vh] border-2 border-yellow-400" id="pricing">

      <TextPricing textPricing={textPricing} />

      <div className="w-[80vw] ml-[10vw] flex flex-col lg:flex-row lg:items-start lg:justify-center md:h-[45vh] lg:h-[50vh] border-2 border-red-500">

        <div
          id="tarjetas"
          className="flex flex-col content-start space-y-2 md:flex-row md:items-center md:space-x-4 lg:space-x-12 lg:items-end lg:space-y-0"
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
      <TextPricing textPricing={textPricing2} />
      <Scroll id={'testimonials'} />



    </section>


  )
}
