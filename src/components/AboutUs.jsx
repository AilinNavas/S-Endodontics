import React from 'react'
import { useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import videoSource from '../assets/video/dental.mp4'

function AboutUs() {

    const padre = useRef();

    useGSAP(() => {
      gsap.set("#about-us", {
        backgroundColor: 'white'
      });
      // gsap code here...
      gsap.to("#about-us", {
        backgroundColor: '#fffd99',
        duration: 5,
        delay: 20
      });
    
      // <-- automatically reverted
    }, { scope: padre })


    return (
        <div ref={ padre } className='h-screen w-full overflow-hidden'>
            <div id='about-us' className='-z-20 w-full flex flex-col absolute py-32 lg:flex-row lg:px-44'>
                <div className='p-8'>
                    <video className='h-full w-full md:px-20 lg:px-2' controls>
                        <source src={videoSource} type="video/mp4" />
                        Tu navegador no soporta el tag de video.
                    </video>
                </div>

                <div className='p-8 md:px-28 lg: px-2 lg:max-w-md'>
                    <h3 className='text-5xl pt-10 mx-2'>Neal Horn, DDS, MS Endodontist</h3>
                    <h4 className='text-3xl mx-4 '>Root Canal Specialist</h4>
                    <p className='text-3xl py-10 mx-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nisi amet nulla vero voluptate.</p>
                </div>

            </div>

        </div>
    )
}

export default AboutUs