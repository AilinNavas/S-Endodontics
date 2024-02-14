import React, { useRef, useState } from 'react'
import { gsap } from "gsap";
import arrowClosed from '/src/assets/icons/arrow-faq-closed.svg'
import arrowOpen from '/src/assets/icons/arrow-faq-open.svg'




const faqsData = [
    {
        key: "1",
        avatarSrc: "src/assets/faqs/item1.jpg",
        title: "How long does a root canal last?",
        iconSrc: "src/assets/resu-neal.png",
        content: "A root canal is a dental procedure designed to address issues within the tooth's pulp, and its longevity depends on various factors. In most cases, a well-executed root canal can last a lifetime with proper oral care, including regular brushing, flossing, and routine dental check-ups."
    },
    {
        key: "2",
        avatarSrc: "src/assets/faqs/item2.jpg",
        title: "Is a root canal a painful procedure?",
        iconSrc: "src/assets/resu-neal.png",
        content: "A root canal is a dental procedure designed to address issues within the tooth's pulp, and its longevity depends on various factors. In most cases, a well-executed root canal can last a lifetime with proper oral care, including regular brushing, flossing, and routine dental check-ups."
    },
    {
        key: "3",
        avatarSrc: "src/assets/faqs/item3.jpg",
        title: "Ho long does a root canal procedure typically take?",
        iconSrc: "src/assets/resu-neal.png",
        content: "A root canal is a dental procedure designed to address issues within the tooth's pulp, and its longevity depends on various factors. In most cases, a well-executed root canal can last a lifetime with proper oral care, including regular brushing, flossing, and routine dental check-ups."
    },
    {
        key: "4",
        avatarSrc: "src/assets/faqs/item4.jpg",
        title: "Do you accept dental insurance?",
        iconSrc: "src/assets/resu-neal.png",
        content: "A root canal is a dental procedure designed to address issues within the tooth's pulp, and its longevity depends on various factors. In most cases, a well-executed root canal can last a lifetime with proper oral care, including regular brushing, flossing, and routine dental check-ups."
    },
    {
        key: "5",
        avatarSrc: "src/assets/faqs/item5.jpg",
        title: "Do I need a referral from my dentist?",
        iconSrc: "src/assets/resu-neal.png",
        content: "A root canal is a dental procedure designed to address issues within the tooth's pulp, and its longevity depends on various factors. In most cases, a well-executed root canal can last a lifetime with proper oral care, including regular brushing, flossing, and routine dental check-ups."
    },

];

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
            // console.log(openAccordion);
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

    return (
        <div className="App h-[100vh] flex justify-center">

            <div className="accordion__container flex flex-col gap-1 mt-[25px] rounded-3xl">

                {faqsData.map((faq, index) => (
                    <div
                        key={faq.key}
                        className={`accordion__item flex flex-col w-[80vw] shadow-md border-t-2 border-transparent  ${openAccordion === index ? "border-t-2 border-secondary" : ""}`}
                        ref={(el) => (accordionRefs.current[index] = el)}
                    >
                        <div
                            className="accordion__header flex gap-8 items-center cursor-pointer px-8 py-4 hover:bg-slate-200 "
                            onClick={() => handleAccordionClick(index)}
                        >
                            <p className={`accordion__name flex-1 text-xl md:text-2xl lg:text-3xl  ${openAccordion === index ? "text-secondary font-semibold" : ""} `}>{faq.title}</p>
                            <img src= {` ${openAccordion === index ? arrowOpen : arrowClosed }`} className='w-8'  />
                        </div>

                        <div className={ `accordion__details px-8 overflow-hidden h-0 ${openAccordion === index ? "h-auto" : ""}`}>
                            <p className='py-4 md:text-xl lg:text-2xl'>{faq.content}</p>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

