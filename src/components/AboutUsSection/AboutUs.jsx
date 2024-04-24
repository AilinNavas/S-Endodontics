import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ZoomImage from "./ZoomImage";
import AnimatedText from "./AnimatedText";

import drHorn from "/src/assets/aboutUs/DrHorn.jpeg";
import drHorn2 from "/src/assets/aboutUs/DrHorn2.jpeg";
import team from "/src/assets/aboutUs/team.jpeg";
import team2 from "/src/assets/aboutUs/team2.jpeg";
import office from "/src/assets/aboutUs/office.jpeg";
import office2 from "/src/assets/aboutUs/office2.jpeg";
import office3 from "/src/assets/aboutUs/office3.jpeg";
import { Carrousel } from "./Carrousel";

gsap.registerPlugin(ScrollTrigger);
export const AboutUs = () => {
  const contenedor = useRef();

  useGSAP(
    () => {
      let ctx = gsap.context(() => {
        gsap.fromTo(
          contenedor.current,
          { backgroundColor: "white" },
          {
            duration: 5,
            ease: "back",
            scrollTrigger: {
              trigger: contenedor.current,
              start: "top top",
              end: "30% bottom",
              scrub: 1,
              endTrigger: contenedor.current,
            },
          },
        );
      }, contenedor);
      return () => ctx.revert();
    },
    { scope: contenedor },
  );

  const imagesDr = [
    { src: drHorn, alt: "Dr. Horn" },
    { src: drHorn2, alt: "Dr. Horn y Leslie Horn" },
  ];
  const imagesTeam = [
    { src: team2, alt: "Dental assistants" },
    { src: team, alt: "Southside endodontics team" }
  ];
  const imagesOffice = [
    { src: office, alt: "Leslie Horn, office manager" },
    { src: office2, alt: "Office" },
    { src: office3, alt: "Dental office" },
  ];

  return (
    <section ref={contenedor} id="aboutUs" className="lg:pl-20 bg-transparent">
      <div className="w-[90vw] lg:w-[80vw] mx-auto space-y-20 my-24 ">
        <div className="flex flex-col-reverse items-center md:space-y-0 lg:flex-row lg:items-start">
          <AnimatedText
            title={"Neal Horn, DDS, MS"}
            description={
              "Meet Dr. Neal Horn, a Louisiana native and seasoned endodontist. With a background in molecular biology from Brigham Young University, he's fluent in Spanish from his missionary work in Argentina. With over 14 years of experience, Dr. Horn brings expertise and a passion for community care to Southside Endodontics in Fort Worth, Texas."
            }
          />
          <ZoomImage images={imagesDr} />

        </div>
        <div className="flex flex-col items-center space-y-5 md:space-y-0 lg:flex-row">
          <ZoomImage images={imagesTeam} />
          <AnimatedText
            title={"Team"}
            description={
              "Meet our dynamic duo of Registered Dental Assistants! Stephanie Tacquard, originally from California, has brought warmth and comfort to our practice since 2016. Kayla Freelon, a vibrant Colorado native, joined us in 2015. Together, they ensure every patient at Southside Endodontics receives exceptional care and a warm welcome."
            }
          />
        </div>
        <div className="flex flex-col-reverse items-center space-y-5 md:space-y-0 lg:flex-row">
          <AnimatedText
            title={"Office"}
            description={
              "Leslie Horn is our office manage.She earned a BA in English from Brigham Young University, with an emphasis on Editing for Publication. A former lifestyle blogger and educator, Leslie owns a freelance editing and proofreading service. She volunteers her time with her church and community, but her real passion is her family.She loves serving patients at Southside Endodontics and looks forward to meeting you!"
            }
          />
          <ZoomImage images={imagesOffice} />
        </div>
      </div>
    </section>
  );
};


