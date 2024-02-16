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

        <section className='h-auto bg-[#f9fcff] flex flex-col justify-items-center mb-[10vh]'> 
            <h3 className='text-5xl mt-[5vh] text-[#0b4088] font-semibold font-zen text-center md:text-6xl lg:text-7xl'>FAQs</h3>
            <p className='mx-[4vh] mt-[4vh] text-xl text-center font-roboto font-normal text-gray-dark md:text-2xl lg:mx-[12vh]' > Discover the insights you need for optimal experience endodontic care, just as if you were chatting with us in person.</p>
        <div className="App flex justify-center ">


            <div className="accordion__container flex flex-col justify-items-center gap-1 mt-[5vh] rounded-3xl">

                {faqsData.map((faq, index) => (
                    <div
                        key={faq.key}
                        className={`accordion__item bg-[#cadffb] flex flex-col w-[80vw] shadow-md ${openAccordion === index ? "border-t-4 border-secondary" : "border-t-4 border-transparent"}`}
                        ref={(el) => (accordionRefs.current[index] = el)}
                    >
                        <div
                            className="accordion__header flex gap-8 items-center cursor-pointer px-8 py-4 hover:bg-[#9bc2f7] "
                            onClick={() => handleAccordionClick(index)}
                        >
                            <p className={`accordion__name flex-1 font-roboto text-xl md:text-2xl ${openAccordion === index ? "text-secondary font-medium" : "text-[#454b51] font-normal"} `}>{faq.title}</p>
                            <img src={` ${openAccordion === index ? arrowOpen : arrowClosed}`} className='w-8' />
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

