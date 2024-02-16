import React from 'react';
import { useRef } from 'react';
import FindUs from '/src/assets/icons/location.svg'
import star from '/src/assets/icons/stars.svg';
import google from '/src/assets/icons/google.svg'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";


export const InfoTop = () => {
    const container = useRef();

    useGSAP(() => {
        gsap.to("#map", {
            rotateX: -15,
            duration: 3,
            delay: 5,
            repeat: -1
        });
        gsap.fromTo("#star",
         {autoAlpha: 0, scale: 0.7, color: '#c49302'},
         { autoAlpha: 1, scale: 1,stagger: {each: 0.5, from: "start" }, delay: 3, color: '#fbbc04'}
         );
     

    }, { scope: container })


    return (
        <div ref={container} className='bg-black z-40 fixed w-[100vw] h-12 top-0 m-auto flex place-content-center items-center md:justify-around lg:hidden'>
            <p className='text-white flex items-center'>
                <img id='google' src={google} className='w-4 h-4' alt="" />
                <span className='mx-1.5'>5.0</span>
                <img id= 'star' src={star} alt="star" className='w-4 h-4' />
                <img id= 'star' src={star} alt="star" className='w-4 h-4' />
                <img id= 'star' src={star} alt="star" className='w-4 h-4' />
                <img id= 'star' src={star} alt="star" className='w-4 h-4' />
                <img id= 'star' src={star} alt="star" className='w-4 h-4 mr-1' />
                113 Reviews
            </p>
            <div className='flex items-left'>
                <img id='map' className='px-4 hidden md:block' src={FindUs} alt="" />
                <p id='direction' className='text-gray text-right text-[10px] ml-3 md:text-xs'><a target='_blank' href="https://maps.app.goo.gl/5FqaJem7M39qahwv8">1307 8th Avenue, Suite 303 <br />Fort Worth, TX 76104</a></p>
            </div>
        </div>

    )
}