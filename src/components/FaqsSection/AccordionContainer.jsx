import React, { useRef, useState } from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import SplitType from 'split-type';
import arrowClosed from '/src/assets/icons/arrow-faq-closed.svg';
import arrowOpen from '/src/assets/icons/arrow-faq-open.svg';
import faqsData from './faqsData';

const title = 'FAQs';
const introduction = 'Discover the insights you need for optimal experience endodontic care, just as if you were chatting with us in person.';
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export const AccordionContainer = () => {

    const [openAccordion, setOpenAccordion] = useState(null);
    const accordionRefs = useRef([]);

    const handleAccordionClick = (index) => {
        if (index === openAccordion) {
            gsap.to(
                accordionRefs.current[index].querySelector(".accordion__details"),
                {
                    height: 0,
                    duration: 1,
                    ease: "sine.out",
                    onComplete: () => setOpenAccordion(null),
                }
            );

        } else {
            if (openAccordion !== null) {
                gsap.to(
                    accordionRefs.current[openAccordion].querySelector(
                        ".accordion__details"
                    ),
                    {
                        height: 0,
                        duration: 1,
                        ease: "sine.out",
                    }
                );
            }
            setOpenAccordion(index);
            gsap.fromTo(
                accordionRefs.current[index].querySelector(".accordion__details"),
                { height: 0 },
                {
                    height: "auto",
                    duration: 1,
                    ease: "sine.out",
                }
            );
        }
    };

    const wrapper = useRef();


    useGSAP(() => {

        const ourTitle = new SplitType('h3.title', { types: 'words' })
        const title1 = ourTitle.words
        const ourIntroduction = new SplitType('p.introduction', { types: 'words' })
        const introduction2 = ourIntroduction.words
       

        let timeln = gsap.timeline({
            scrollTrigger: {
                trigger: wrapper.current,
                pin: true,
                pinSpacing: true,
                start: "top top",
                end: "+=5000",
                scrub: 0.9,

            }
        });
         timeln.fromTo(
             title1,
             {
                 y: 100, opacity: 0, color: '#6ca6f3', scale: 0.5
             },
             {
                 y: 0, opacity: 1, stagger: 0.05,
                 duration: 2,
                 scale: 1,
                 color: '#0b4088',
                 ease: 'power4.out'
             });
             timeln.fromTo(
                introduction2,
                { opacity: 0},
                { opacity: 1, duration: 0.1, color:'#2e3135', fontWeight: 'medium', scale: 0.9, stagger: 0.1 }
              )
        
        // timeln.fromTo(introduction2,
        //     {
        //         y: 100, opacity: 0
        //     },
        //     {
        //         y: 0, opacity: 1.5, stagger: 0.05,
        //         duration: 2,
        //         ease: 'power4.out',
        //     });
        timeln.fromTo('#accordion',
            {
                y: 100, opacity: 0, scale: 0.6, backgroundColor: "#abb1b7", z: 300
            },
            {
                y: 0, opacity: 1.0, scale: 1.0, transformOrigin: "center center", stagger: 0.5,
                duration: 2,
                backgroundColor: '#cadffb',
                ease: 'power4.out',
                // ease:  "back.inOut(1.7)",
            });

    }, { scope: wrapper }) //final de animaciónes


    return (

        <section ref={wrapper} className='h-screen bg-[#f9fcff] flex flex-col justify-items-center mb-[10vh]'>
            <h3 className='title text-5xl mt-[5vh] font-semibold font-zen text-center md:text-6xl lg:text-7xl'>{title}</h3>
            <p className='introduction mx-[4vh] mt-[4vh] text-xl text-center font-roboto font-normal text-tartiarytartary md:text-2xl lg:mx-[15vh]'>{introduction}</p>
            <div className="App flex justify-center ">

                <div className="accordion__container flex flex-col justify-items-center gap-1 mt-[5vh] rounded-3xl">

                    {faqsData.map((faq, index) => (
                        <div id='accordion'
                            key={faq.key}
                            className={`accordion__item flex flex-col w-[80vw] shadow-md ${openAccordion === index ? "border-t-4 border-secondary" : "border-t-4 border-transparent"}`}
                            ref={(el) => (accordionRefs.current[index] = el)}
                        >
                            <div
                                className="accordion__header flex gap-8 items-center cursor-pointer px-8 py-4 hover:bg-[#9bc2f7] "
                                onClick={() => handleAccordionClick(index)}
                            >
                                <p className={`accordion__name flex-1 font-roboto text-xl md:text-2xl ${openAccordion === index ? "text-secondary font-medium" : "text-[#454b51] font-normal"} `}>{faq.title}</p>
                                <img src={` ${openAccordion === index ? arrowOpen : arrowClosed}`} className='w-5' />
                            </div>

                            <div className={`accordion__details px-8 overflow-hidden h-0 ${openAccordion === index ? "h-auto" : ""}`}>
                                <p className='py-4 text-[#454b51] font-roboto font-normal text-xl md:text-2xl'>{faq.content}</p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}

