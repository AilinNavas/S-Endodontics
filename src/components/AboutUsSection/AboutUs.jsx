import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ZoomImage from "./ZoomImage";
import AnimatedText from "./AnimatedText";

import drHorn from '/src/assets/aboutUs/DrHorn.jpeg';
import drHorn2 from '/src/assets/aboutUs/DrHorn2.jpeg';
import team from '/src/assets/aboutUs/team.jpeg';
import team2 from '/src/assets/aboutUs/team2.jpeg';
import office from '/src/assets/aboutUs/office.jpeg';
import office2 from '/src/assets/aboutUs/office2.jpeg';
import office3 from '/src/assets/aboutUs/office3.jpeg';

gsap.registerPlugin(ScrollTrigger);
const AboutUs = () => {
  const contenedor = useRef();

  useGSAP(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(contenedor.current,
        { backgroundColor: 'white' },
        {
          duration: 5,
          ease: 'back',
          scrollTrigger: {
            trigger: contenedor.current,
            start: "top top",
            end: "20% bottom",
            scrub: true,
            endTrigger: contenedor.current,

          },
        });
    }, contenedor);
    return () => ctx.revert();


  }, { scope: contenedor });

  const imagesDr = [
    { src: drHorn, alt: 'Dr. Horn'},
    { src: drHorn2, alt: 'Dr. Horn y Leslie Horn'}
  ];
  const imagesTeam = [
    { src: team, alt: 'Southside endodontics team'},
    { src: team2, alt: 'Dental assistants'}

  ];
  const imagesOffice = [
    { src: office, alt: 'Leslie Horn, office manager'},
    { src: office2, alt: 'Office'},
    { src: office3, alt: 'Dental office'}
  ];

  return (
    <section ref={contenedor}>
      <div className="w-4/5 m-auto space-y-20 py-24 -z-10">
        <div className="flex flex-col-reverse items-start lg:flex-row lg:items-start justify-between md:space-y-0">
          <AnimatedText title={'Neal Horn, DDS, MS'} description={"Dr. Neal Horn and his dedicated team are committed to providing exceptional endodontic care in a warm and welcoming environment. Dr. Horn, a Texas native with a passion for oral health, brings a wealth of experience to our practice. His journey from molecular biology at Brigham Young University to a Master's in Endodontics reflects his dedication to excellence.Southside Endodontics is not just a dental practice; it's a place where your oral health journey is personalized."} />
          <ZoomImage images={imagesDr} />
        </div>
        <div className="flex flex-col lg:flex-row  justify-between items-center space-y-5 md:space-y-0">
          <ZoomImage images={imagesTeam} />
          <AnimatedText title={'Team'} description={"Leslie Horn, our Office Manager, holds a BA in English and is deeply committed to ensuring a seamless and positive experience for our patients. Bur whitr whatches and lokken his you name is werendodrun sou sorry.Because and releand butterfly andfly well."} />


        </div>
        <div className="flex flex-col-reverse lg:flex-row  justify-between items-center space-y-5 md:space-y-0">
          <AnimatedText title={'Office'} description={"Southside Endodontics is not just a dental practice; it's a place where your oral health journey is personalized, and you're treated like family.His journey from molecular biology at Brigham Young University to a Master's.Southside Endodontics is not just a dental practice; it's a place where your oral health journey is personalized, and you're treated like family.His journey from molecular biology at Brigham Young University to a Master's. "} />
          <ZoomImage images={imagesOffice} />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;