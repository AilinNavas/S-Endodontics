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
         {autoAlpha: 0, scale: 0.6, color: '#c49302'},
         { autoAlpha: 1, scale: 1,stagger: {each: 0.5, from: "start" }, color: '#fbbc04'}
         );
     

    }, { scope: container })


    return (
        <div ref={container} className='bg-white z-40 fixed w-[100vw] h-10 top-0 m-auto flex place-content-center items-end md:justify-around lg:hidden'>
            <p className='text-[#0000ff] text-[18px] flex items-center'>
                <img id='google' src={google} alt="google" className='w-4 h-4' />
                <span className='mx-1.5 text-[18px] text-gray-dark'>5.0</span>
                <img id= 'star' src={star} alt="star" className='w-4 h-4' />
                <img id= 'star' src={star} alt="star" className='w-4 h-4' />
                <img id= 'star' src={star} alt="star" className='w-4 h-4' />
                <img id= 'star' src={star} alt="star" className='w-4 h-4' />
                <img id= 'star' src={star} alt="star" className='w-4 h-4 mr-1' />
                113 Google reviews
            </p>
            <div className='md:flex md:items-left hidden'>
                <img id='map' className='px-4 hidden md:block' src={FindUs} alt="" />
                <p id='direction' className='text-gray text-right text-[10px] ml-3 md:text-xs'><a target='_blank' href="https://maps.app.goo.gl/5FqaJem7M39qahwv8">1307 8th Avenue, Suite 303 <br />Fort Worth, TX 76104</a></p>
            </div>
        </div>

    )
}