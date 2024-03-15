import React, { useRef } from 'react';
import { TestimonialCard } from './TestimonialCard.jsx';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin"

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export const ActiveSlider = () => {

    const contenedor = useRef();

    useGSAP(() => {

        let timeln = gsap.timeline({
            scrollTrigger: {
                trigger: contenedor.current,
                pin: true,
                pinSpacing: true,
                // start: "left-=120px left",
                start: "top-=40px top",
                end: "+=2200",
                scrub: 0.9
            }
        });
        timeln.from('#card-1', {
            yPercent: 75,
            opacity: 0,
            scale: 0
        });

        timeln.to('#card-1', {
            yPercent: 0,
            opacity: 1,
            scale: 1
        });
        timeln.from('#card-2', {
            yPercent: 75,
            opacity: 0,
            scale: 0
        });
        timeln.to("#card-1", {
            scale: 0.95,
            yPercent: -0.5,
            opacity: 1,

        }, "-=0.3");
        timeln.to('#card-2', {
            xPercent: 0,
            opacity: 1,
            scale: 1
        });
        timeln.from('#card-3', {
            yPercent: 75,
            opacity: 0,
            scale: 0
        });
        timeln.to("#card-2", {
            scale: 0.98,
            yPercent: -0.4,
            opacity: 1
        }, "-=0.3");
        timeln.to("#card-3", {
            yPercent: 0,
            opacity: 1
        });
        timeln.from('#card-4', {
            yPercent: 75,
            opacity: 0,
            scale: 0
        });
        timeln.to("#card-3", {
            scale: 0.98,
            yPercent: -0.4,
            opacity: 1
        }, "-=0.3");

        timeln.to("#card-4", {
            yPercent: 0,
            opacity: 1
        });

        timeln.from('#card-5', {
            yPercent: 75,
            opacity: 0,
            scale: 0
        });

        timeln.to("#card-4", {
            scale: 0.98,
            yPercent: -0.4,
            opacity: 1
        }, "-=0.3");

        timeln.to("#card-5", {
            yPercent: 0,
            opacity: 1
        });
        timeln.to("#card-5", {
            scale: 0.98,
            yPercent: -0.4,
            opacity: 1
        }, "-=0.3");
        timeln.to("#card-6", {
            scale: 0.98,
            yPercent: 0,
            opacity: 1
        });
        timeln.from('#card-6', {
            yPercent: 75,
            opacity: 0,
            scale: 0
        });

    }, { scope: contenedor })


    return (

        <div ref={contenedor} id='cards' className='h-[100vh] w-[80vw] m-auto relative flex justify-start items-center'>
            <div id='card-1' className='absolute left-0 top-0 -rotate-2 z-1 md:ml-20 md:left-[40px] lg:-left-[5vw] lg:top-[10vh]'>
                <TestimonialCard name={'Megan C'}
                    testimonial={"I honestly can’t say enough about my experience. The office and staff are so efficient and organized. My treatment was explained to me clearly and expectations set. But probably the best thing about this office is how kind and understanding they are and the best playlists of music while you’re there!"}
                    initials={'M'}
                    bgColor={'bg-[#2697ed]'} />
            </div>
            <div id='card-2' className='absolute left-0 top-[80px] rotate-1 z-5 md:ml-20 md:left-[80px] lg:left-[5vw] lg:top-[10vh]'>
                <TestimonialCard name={'Brad Taylor'}
                    testimonial={'Dr Horn and team are tremendous professionals.I visited them with a persistent infection in an eye tooth, and over the course of the treatment it was completely cured.'}
                    initials={'B'}
                    bgColor={'bg-[#e34e24]'} />
            </div>
            <div id='card-3' className='absolute left-0 top-[160px] -rotate-2 z-10 md:ml-20 md:left-[120px] lg:left-[20vw] lg:top-[80px]'>
                <TestimonialCard name={'Tara Peck'}
                    testimonial={'Dr Horn and team are tremendous professionals.  I visited them with a persistent infection in an eye tooth, and over the course of the treatment it was completely cured.'}
                    initials={'T'}
                    bgColor={'bg-[#2a6b44]'} />
            </div>
            <div id='card-4' className='absolute left-0 top-[240px] rotate-2 z-20 md:ml-20 md:left-[160px] lg:left-[30vw] lg:top-[120px]'>
                <TestimonialCard name={'Adam Wood'}
                    testimonial={'The office is so clean, the staff were so wonderful, and the doctor was so kind. If I ever need another one I will be going here. GREAT! experience.'}
                    initials={'A'}
                    bgColor={'bg-[#0f45a8]'} />
            </div>
            <div id='card-5' className='absolute left-0 top-[320px] -rotate-3 z-20 md:ml-20 md:left-[200px] lg:left-[40vw] lg:top-[100px]'>
                <TestimonialCard name={'Renee Contreras'}
                    testimonial={'I went into my appointment with Dr.Horne with anxiety and fear. I have a high fear of the dentist, and let the office know. They provided top tier care and were very supportive and continued to check if I was doing on during my procedure. Thank you for putting my fear at ease. 5 stars for sure, I strongly recommend ⭐️'}
                    initials={'R'}
                    bgColor={'bg-[#420991]'} />
            </div>
            <div id='card-6' className='sm:hidden lg:block lg:absolute lg:rotate-3 z-30 lg:ml-10 lg:left-[53vw] lg:top-[110px]'>
                <TestimonialCard name={'Polo Garrett'}
                    testimonial={'I needed two root canals and I was horrified. Dr. Horn was awesome!! He explained what was going happen step by step. Afterwards I am happy to say, both root canals were completed, I felt NO PAIN, and the cost was affordable. Thank you Dr. Horn for being so courteous and polite and making me comfortable with the procedure. I definitely recommend him to all my families and friends.'}
                    initials={'P'}
                    bgColor={'bg-[#eda655]'} />
            </div>

        </div>




    )
}

