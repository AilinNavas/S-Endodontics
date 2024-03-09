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

gsap.registerPlugin(ScrollTrigger);
const AboutUs = () => {
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
              scrub: true,
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
    { src: team, alt: "Southside endodontics team" },
    { src: team2, alt: "Dental assistants" },
  ];
  const imagesOffice = [
    { src: office, alt: "Leslie Horn, office manager" },
    { src: office2, alt: "Office" },
    { src: office3, alt: "Dental office" },
  ];

  return (
    <section ref={contenedor}>
      <div className="w-4/5 m-auto space-y-20 py-24">
        <div className="flex flex-col-reverse items-start justify-between md:space-y-0 lg:flex-row lg:items-start">
          <AnimatedText
            title={"Neal Horn, DDS, MS"}
            description={
              "Dr. Neal Horn and his dedicated team are committed to providing exceptional endodontic care in a warm and welcoming environment. Dr. Horn, a Texas native with a passion for oral health, brings a wealth of experience to our practice."
            }
          />
          <ZoomImage images={imagesDr} />
        </div>
        <div className="flex flex-col justify-between items-start space-y-5 md:space-y-0 lg:flex-row ">
          <ZoomImage images={imagesTeam} />
          <AnimatedText
            title={"Team"}
            description={
              "Leslie Horn, our Office Manager, holds a BA in English and is deeply committed to ensuring a seamless and positive experience for our patients. Bur whitr whatches and lokken his you name is werendodrun sou sorry.Because and releand butterfly."
            }
          />
        </div>
        <div className="flex flex-col-reverse justify-between items-start space-y-5 md:space-y-0 lg:flex-row ">
          <AnimatedText
            title={"Office"}
            description={
              "Southside Endodontics is not just a dental practice; it's a place where your oral health journey is personalized,holds a BA in English and is deeply committed to ensuring a seamless and positive experience for our patients."
            }
          />
          <ZoomImage images={imagesOffice} />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
