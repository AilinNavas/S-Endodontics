import React from 'react';
import { useRef } from 'react';
import FindUs from '/src/assets/icons/location.svg'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const InfoTop = () => {
    const container = useRef();

    useGSAP(() => {
         gsap.to("#map", {
                 rotateX: -15,
                 duration:3,
                 delay:5,
                 repeat: -1
                });
        gsap.fromTo("#direction", {
            autoAlpha: 0,
            scale: 0.7,
            delay: 5,
        },
            {
                autoAlpha: 1,
                duration: 10,
                scale: 1,
                repeat: -1,
                ease: "power3.inout",
            });
    }, { scope: container })

    return (
        <div ref={container} className='bg-black opacity-90 z-40 fixed w-full h-12 top-0 m-auto flex place-content-center items-center'>
            <p className='text-white '>5 Estrellas (+100) Reviwes</p>
            <img id='map' className='px-4' src={FindUs} alt="" />
            <p id='direction' className='text-white text-xs'><a target='_blank' href="https://maps.app.goo.gl/5FqaJem7M39qahwv8">1307 8th Avenue, Suite 303 <br />Fort Worth, TX 76104</a></p>
        </div>
    )
}