import React, { useRef } from "react";
import SplitType from 'split-type';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const AnimatedText = ({ title, description }) => {
  const component = useRef();
  const text = useRef();
  const txtdiv = useRef();

  useGSAP(() => {

     
      const ourText1 = new SplitType('h3.title', { types: 'words' })
      const title1 = ourText1.words
      const ourText2 = new SplitType('p.description', { types: 'words' })
      const chars2 = ourText2.words
   
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: component.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          pin:true,
          markers: true

        },
      });
      tl.fromTo( title1,
         { opacity: 0.5},
         { opacity: 1}
         )
      
        }, { scope: component }) //final de animaciónes

  return (
    <div ref={component} className="lg:w-1/2">
      <div ref={txtdiv} className="space-y-5 lg:mx-6">
        <h3 ref={text} className="title text-5xl text-[#0b4088] font-semibold font-zen py-6 md:text-6xl lg:text-7xl">
          {title}
        </h3>
        <p ref={text} className="description text-xl text-gray-dark font-normal font-roboto md:text-2xl lg:text-3xl">
          {description}
        </p>
      </div>
    </div>
  );
};

export default AnimatedText;