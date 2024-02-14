import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ZoomImage from "./ZoomImage";
import AnimatedText from "./AnimatedText";

gsap.registerPlugin(ScrollTrigger);
const AboutUs = () => {
    const contenedor = useRef();
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
          gsap.fromTo(contenedor.current,
            {backgroundColor:'white'},
            {
          //  backgroundColor: '#cfe3fc',
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
      });
      const imagesDr = [
        "/src/assets/aboutUs/DrHorn.png",
        "/src/assets/aboutUs/DrHorn2.png",
      ];
      const imagesTeam = [
        "/src/assets/aboutUs/team.png",
        "/src/assets/aboutUs/team2.png",
      
      ];
      const imagesOffice = [
        "/src/assets/aboutUs/office.png",
        "/src/assets/aboutUs/office2.png",
        "/src/assets/aboutUs/office3.png",
      ];

  return (
    <section ref= {contenedor}>
    <div  className="w-4/5 m-auto space-y-20 py-24">
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center space-y-5 md:space-y-0">
        <AnimatedText title= {'Dr. Neal Horn '} description ={"Dr. Neal Horn and his dedicated team are committed to providing exceptional endodontic care in a warm and welcoming environment. Dr. Horn, a Texas native with a passion for oral health, brings a wealth of experience to our practice. His journey from molecular biology at Brigham Young University to a Master's in Endodontics reflects his dedication to excellence."} />
        <ZoomImage images={imagesDr} />
       
      </div>
      <div className="flex flex-col lg:flex-row  justify-between items-center space-y-5 md:space-y-0">
      <ZoomImage images={imagesTeam} />
      <AnimatedText title= {'Team'} description ={"Leslie Horn, our Office Manager, holds a BA in English and is deeply committed to ensuring a seamless and positive experience for our patients. As a former lifestyle blogger and educator, Leslie's attention to detail and genuine care shine through, making your visit to our office a pleasant one. His journey from molecular biology at Brigham Young Univers"} />
      
        
      </div>
      <div className="flex flex-col-reverse lg:flex-row  justify-between items-center space-y-5 md:space-y-0">
        <AnimatedText title= {'Office'} description ={ "Southside Endodontics is not just a dental practice; it's a place where your oral health journey is personalized, and you're treated like family.His journey from molecular biology at Brigham Young University to a Master's in Endodontics reflects his dedication to excellence. "} />
        <ZoomImage images= {imagesOffice}  />
      </div>
    </div>
    </section>
  );
};

export default AboutUs;