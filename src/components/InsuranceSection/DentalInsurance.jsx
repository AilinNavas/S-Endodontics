import React, { useRef } from "react";
import { gsap, ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import {Scroll} from '../WelcomeSection/Scroll'

import img1 from "/src/assets/insurances/1.jpeg";
import img2 from "/src/assets/insurances/2.jpeg";
import img3 from "/src/assets/insurances/3.jpeg";
import img4 from "/src/assets/insurances/4.jpeg";
import img5 from "/src/assets/insurances/5.jpeg";
import img6 from "/src/assets/insurances/6.jpeg";
import img7 from "/src/assets/insurances/7.jpeg";
import img8 from "/src/assets/insurances/8.jpeg";
import img9 from "/src/assets/insurances/9.jpeg";
import img10 from "/src/assets/insurances/10.jpeg";
import img11 from "/src/assets/insurances/11.jpeg";
import img12 from "/src/assets/insurances/12.jpeg";
import img13 from "/src/assets/insurances/13.jpeg";
import img14 from "/src/assets/insurances/14.jpeg";

const text1 =
  "We welcome a wide range of dental insurance plans, whether in-network or out-of-network.";
const text2 =
  "Frequently, out-of-network treatments receive similar coverage percentages as in-network ones.";
  const text3 = "Our commitment is to optimize your benefits, and we'll provide a detailed breakdown before proceeding with any treatment."


gsap.registerPlugin(ScrollTrigger);

export const DentalInsurance = ({ scrollAnimationsEnabled }) => {
  const container3 = useRef();

  useGSAP(
    () => {
     
        const ourText1 = new SplitType("p.our-text1", { types: "words" });
        const chars1 = ourText1.words;
        const ourText2 = new SplitType("p.our-text2", { types: "words" });
        const chars2 = ourText2.words;
        const ourText3 = new SplitType("p.our-text3", { types: "words" });
        const chars3 = ourText3.words;

        let timeline = gsap.timeline({
          scrollTrigger: {
            trigger: container3.current,
            pin: true,
            pinSpacing: true,
            start: "top-=20px top",
            end: "+=2500",
            scrub: 1,
          },
        });
        timeline.fromTo(
          chars1,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.1,
            color: "#2e3135",
            fontWeight: "medium",
            stagger: 0.1,
          },
        );
        timeline.set("#logos-insurances", {
          transformPerspective: 500,
          opacity: 0,
          scale: 0.5,
        });
        timeline.to("#logos-insurances", {
          translateX: "0px",
          scale: 1.5,
          stagger: {
            each: 0.5,
            from: "start",
          },
          boxShadow: "0px 0px 3px 5px rgb(223, 230, 230)",
          borderRadius: "50% 50%",
          duration: 2,
          rotationY: 360,
          ease: "circ.out",
          x: 10,
          y: 0,
          z: -300,
          transformOrigin: "50px 20px -100px",
          autoAlpha: 1,
        });
        timeline.fromTo(
          chars2,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.1,
            color: "#2e3135",
            fontWeight: "medium",
            stagger: 0.1,
          },
        );
        timeline.fromTo(
          chars3,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.1,
            color: "#2e3135",
            fontWeight: "medium",
            stagger: 0.1,
          },
        );
    },
    { scope: container3 }
    ,
  ); //final de animaciónes

  const InsuranceItem = ({ src, alt }) => (
    <div>
      <img
        id="logos-insurances"
        src={src}
        alt={alt}
        className="w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36"
      />
    </div>
  );

  const insuranceItems = [
    { src: img1, alt: "PPOAmeritas Insurance" },
    { src: img2, alt: "Aetna" },
    { src: img3, alt: "Cigna PPO" },
    { src: img4, alt: "Careington" },
    { src: img5, alt: "United Healthcare" },
    { src: img6, alt: "Guardian PPO" },
    { src: img7, alt: "GEHA" },
    { src: img8, alt: "Care/UNUMBCBS" },
    { src: img9, alt: "Humana PPO" },
    { src: img10, alt: "Delta Dental" },
    { src: img11, alt: "Delta Care" },
    { src: img12, alt: "Metlife DHMO" },
    { src: img13, alt: "United Healthcare PPO" },
    { src: img14, alt: "PPOAlways" },
  ];

  return (
    <section ref={container3} id="dentalInsurance" className="lg:pl-20 my-[15vh]">
      <div className="h-auto w-[90vw] mx-auto flex flex-col items-start lg:w-[80vw] lg:h-[85vh]">
        <div className="h-auto overflow-hidden mt-6 md:py-6 lg:my-0">
          <p className="our-text1 text-gray-dark font-roboto font-normal text-left py-2 lg:py-0 lg:px-6 bg-transparent text-xl md:text-3xl lg:text-3xl">
            {text1}
          </p>
        </div>

        <div className="my-0 mx-auto grid gap-3 grid-cols-4 md:grid-cols-5 md:gap-4 lg:grid-cols-7 lg:gap-4 lg:px-[5vw]">
          {insuranceItems.map((item, index) => (
            <InsuranceItem key={index} src={item.src} alt={item.alt} />
          ))}
        </div>

        <div id="text-2" className="h-auto overflow-hidden md:py-6">
          <p className="our-text2 text-gray-dark font-roboto text-left pt-2 lg:px-6 bg-transparent text-xl md:text-3xl lg:text-3xl">
            {text2}
          </p>
          <p className="our-text3 text-gray-dark font-roboto text-left pt-2 lg:px-6 bg-transparent text-xl md:text-3xl lg:text-3xl">
            {text3}
          </p>
        </div>
      
      </div>
      <Scroll id='pricing' text={'Scroll Down'} />
    </section>
  );
};

