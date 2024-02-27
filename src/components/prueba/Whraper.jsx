import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import SplitType from 'split-type'
import DynamicSVGAnimation from './DynamicSVGAnimation'
import drHorn from '/src/assets/aboutUs/DrHorn.jpeg';
import drHorn2 from '/src/assets/aboutUs/DrHorn2.jpeg';
import team from '/src/assets/aboutUs/team.jpeg';
import team2 from '/src/assets/aboutUs/team2.jpeg';
import office from '/src/assets/aboutUs/office.jpeg';
import office2 from '/src/assets/aboutUs/office2.jpeg';
import office3 from '/src/assets/aboutUs/office3.jpeg';

const textDr = "Dr. Neal Horn and his dedicated team are committed to providing exceptional endodontic care in a warm and welcoming environment. Dr. Horn, a Texas native with a passion for oral health, brings a wealth of experience to our practice. His journey from molecular biology at Brigham Young University to a Master's in Endodontics reflects his dedication to excellence.Southside Endodontics is not just a dental practice; it's a place where your oral health journey is personalized."
const textTeam = "Leslie Horn, our Office Manager, holds a BA in English and is deeply committed to ensuring a seamless and positive experience for our patients. Bur whitr whatches and lokken his you name is werendodrun sou sorry.Because and releand butterfly andfly well., out-of-network treatments receive similar coverage percentages as in-network ones.Our commitment is to optimize your benefits, and we'll provide a detailed breakdown before proceeding with any treatment."
const textOffice = "Southside Endodontics is not just a dental practice; it's a place where your oral health journey is personalized, and you're treated like family.His journey from molecular biology at Brigham Young University to a Master's.Southside Endodontics is not just a dental practice; it's a place where your oral health journey is personalized, and you're treated like family.His journey from molecular biology at Brigham Young University to a Master's. "

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export const Whraper = () => {
    const container4 = useRef();

    const imagesDr = [
        { src: drHorn, alt: 'Dr. Horn' },
        { src: drHorn2, alt: 'Dr. Horn y Leslie Horn' }
    ];
    const imagesTeam = [
        { src: team, alt: 'Southside endodontics team' },
        { src: team2, alt: 'Dental assistants' }

    ];
    const imagesOffice = [
        { src: office, alt: 'Leslie Horn, office manager' },
        { src: office2, alt: 'Office' },
        { src: office3, alt: 'Dental office' }
    ];

    useGSAP(() => {

        const ourTextDr = new SplitType('p.text-dr', { types: 'chars' })
        const charsDr = ourTextDr.chars
        
        let timeline = gsap.timeline({
            scrollTrigger: {
                trigger: container4.current,
                pin: true,
                pinSpacing: true,
                start: "top-=20px top",
                end: "+=2000",
                scrub: 0.6,
                markers: true
            }
        });

        timeline.fromTo(
            charsDr,
            { opacity: 0},
            { opacity: 1, duration: 0.1, color:'#2e3135', fontWeight: 'medium', scale: 0.9, stagger: 0.1 }
          )
      
       


    }, { scope: container4 }) //final de animaciónes


    return (
        <div ref={container4} className='flex flex-col ml-[10vw] w-[80vw] h-auto lg:flex-row-reverse border-2 border-yellow-300'>
            <div className='contenedor-img'>
                <DynamicSVGAnimation images={imagesDr} />
            </div>
            <div className='contenedor-text'>
                <p className="text-dr px-4 text-xl md:text-2xl lg:pt-[10vh]">{textDr}</p>
            </div>
        </div>
    )
}
