
import React, { useRef } from "react";
import FindUs from '/src/assets/icons/location.svg';
import star from '/src/assets/icons/stars.svg';
import google from '/src/assets/icons/google.svg';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


export const InfoTop = () => {
    const container2 = useRef();
    const paragraph1Ref = useRef(null);
    const paragraph2Ref = useRef(null);

    useGSAP(() => {
        gsap.fromTo("#star",
            { autoAlpha: 0, scale: 0.6, color: '#c49302' },
            { autoAlpha: 1, scale: 1, stagger: { each: 0.5, from: "start" }, color: '#fbbc04' }
        );
        const tl = gsap.timeline({ repeat: -1 });

        tl.to(paragraph1Ref.current,
            { opacity: 0, duration: 5, ease: "power1.in" }
        ).fromTo(paragraph2Ref.current,
            { opacity: 0 },
            {
                opacity: 1, duration: 5, ease: "power1.inOut",
            }
        );
    },
        { scope: container2 });

    return (
        <div ref={container2} className="fixed z-40 bg-white top-0 left-0 w-[100vw] h-10 py-2">
            <div className="text-center text-lg relative w-[100vw] h-[100%]">
                <p ref={paragraph1Ref} className="top-0 absolute inset-x-0 text-[#0000ff] text-[18px] flex items-center justify-center text-center">
                    <img src={google} alt="google" className='w-4 h-4' />
                    <span className='mx-1.5 text-[18px] text-gray-dark'>5.0</span>
                    <img id='star' src={star} alt="star" className='w-4 h-4' />
                    <img id='star' src={star} alt="star" className='w-4 h-4' />
                    <img id='star' src={star} alt="star" className='w-4 h-4' />
                    <img id='star' src={star} alt="star" className='w-4 h-4' />
                    <img id='star' src={star} alt="star" className='w-4 h-4 mr-1' />
                    114 Google reviews
                </p>

                <p ref={paragraph2Ref} className="top-0 text-center inset-x-0 absolute text-gray text-[16px] pb-2 flex items-center justify-center">
                    <img src={FindUs} alt="" className="w-4 h-4" />
                    <span className="cursor-pointer">
                        <a target='_blank' href="https:maps.app.goo.gl/5FqaJem7M39qahwv8">1307 8th Avenue, Suite 303 Fort Worth, TX 76104</a>
                    </span>
                </p>

            </div>
        </div>
    );
};

