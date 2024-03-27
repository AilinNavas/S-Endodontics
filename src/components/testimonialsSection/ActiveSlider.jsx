import React, { useRef } from 'react';
import { TestimonialCard } from './TestimonialCard.jsx';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Scroll } from '../WelcomeSection/Scroll.jsx';
import megan from '/src/assets/testimonials/MeganC.jpeg';
import keyla from '/src/assets/testimonials/KeylaZabala.jpeg';
import maria from '/src/assets/testimonials/MariaDuran.jpeg';
import tammy from '/src/assets/testimonials/TammyWylie.jpeg';
import brad from '/src/assets/testimonials/BradTaylor.jpeg';
import polo from '/src/assets/testimonials/Polo.png';


gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export const ActiveSlider = () => {

    const contenedor = useRef();

    useGSAP(() => {

        let timeln = gsap.timeline({
            scrollTrigger: {
                trigger: contenedor.current,
                pin: true,
                pinSpacing: true,
                start: "top-=40px top",
                end: "+=2200",
                scrub: 0.9
            }
        });

        timeln.from('#card-2', {
            yPercent: 75,
            opacity: 0,
            scale: 0
        });

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
        <section className='lg:pl-20'>

        <div ref={contenedor} className='h-[90vh] w-[90vw] mx-auto relative lg:w-[80vw] lg:h-[90vh] border-2 border-yellow-900' id="testimonials">
            <div id='card-1' className='absolute left-2 top-[30px] -rotate-2 z-1 md:top-[5vh] lg:left-[0vw] lg:top-[10vh] border-2 border-yellow-600'>
                <TestimonialCard name={'Megan C'}
                    testimonial={"I honestly can’t say enough about my experience. The office and staff are so efficient and organized. My treatment was explained to me clearly and expectations set. But probably the best thing about this office is how kind and understanding they are and the best playlists of music while you’re there!"}
                    initials={'M'}
                    bgColor={'bg-[#2697ed]'}
                    img={megan} />
            </div>
            <div id='card-2' className='absolute left-4 top-[100px] rotate-1 z-5 md:top-[15vh] md:left-[10vw] lg:left-[10vw] lg:top-[10vh] border-2 border-yellow-600'>
                <TestimonialCard name={'Maria Duran'}
                    testimonial={'It was a very pleasant experience at Southside Endodontics. From the lady that I spoke on the phone initially, interacting with her in person, their staff, and Dr. Neal Horn were all very warm. I felt comfortable right away. I highly recommend Southside Endodontics. Go see him if you’re looking for a great endodontic specialist. Thank you so much.'}
                    initials={'B'}
                    bgColor={'bg-[#e34e24]'}
                    img={maria} />
            </div>
            <div id='card-3' className='absolute left-6 top-[160px] -rotate-2 z-10 md:top-[25vh] md:left-[25vw] lg:left-[20vw] lg:top-[10vh] border-2 border-yellow-600'>
                <TestimonialCard name={'Keyla Zavala'}
                    testimonial={' I had a root canal done by Dr. Horn and it was such a painless, quick, and easy procedure. He was very professional in explaining everything and Kayla was very attentive and kind. I loved the environment and also the immaculate taste in music! Would recommend Southside Endodontics to all of my family and friends, I trust them very much!'}
                    initials={'T'}
                    bgColor={'bg-[#2a6b44]'}
                    img={keyla} />
            </div>
            <div id='card-4' className='absolute left-2 top-[230px] rotate-2 z-20 md:top-[35vh] md:left-[35vw] lg:left-[30vw] lg:top-[10vh] border-2 border-yellow-600'>
                <TestimonialCard name={'Tammy Wylie'}
                    testimonial={'Dr Horn and staff were so great today.  I called this morning with a referral and was in a lot of pain, they got me in at 11am and had a diagnosis today!!! They were all so nice to work with. Will definitely use them in the future!'}
                    initials={'A'}
                    bgColor={'bg-[#0f45a8]'}
                    img={tammy} />
            </div>
            <div id='card-5' className='absolute left-4 top-[300px] rotate-3 z-20 md:top-[45vh] md:left-[48vw] lg:left-[40vw] lg:top-[10vh] border-2 border-yellow-600'>
                <TestimonialCard name={'Brad Taylor'}
                    testimonial={'Dr Horn and team are tremendous professionals.  I visited them with a persistent infection in an eye tooth, and over the course of the treatment it was completely cured.'}
                    initials={'R'}
                    bgColor={'bg-[#420991]'}
                    img={brad} />
            </div>
            <div id='card-6' className='sm:hidden lg:block lg:absolute lg:rotate-3 z-30 lg:ml-10 lg:left-[50vw] lg:top-[10vh] border-2 border-yellow-600'>
                <TestimonialCard name={'Polo Garrett'}
                    testimonial={'I needed two root canals and I was horrified. Dr. Horn was awesome!! He explained what was going happen step by step. Afterwards I am happy to say, both root canals were completed, I felt NO PAIN, and the cost was affordable. Thank you Dr. Horn for being so courteous and polite and making me comfortable with the procedure. I definitely recommend him to all my families and friends.'}
                    initials={'P'}
                    bgColor={'bg-[#eda655]'}
                    img={polo} />
            </div>
            <div className='absolute bottom-4 right-1/2 lg:-bottom-10'>
            <Scroll />
            </div>
        </div>


        </section>

    )
}

