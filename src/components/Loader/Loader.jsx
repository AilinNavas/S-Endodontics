import React, { useRef } from 'react'
import logo from '/src/assets/logo-Neal.jpeg'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export const Loader = () => {

    const loaderContainer = useRef();

    useGSAP(() => {
        const timeLine = gsap.timeline({ repeat: -1 });

        timeLine.fromTo('#img-loader',
            { opacity: 1, scale: 0.9, duration: 1, ease: "none",  },
            { opacity: 0.5, scale: 1, duration: 1, ease: "none" },
        )
        timeLine.to('#img-loader',
            { opacity: 1, scale:0.9 ,duration: 1, ease: "none" })
    }, { scope: loaderContainer });

    return (
        <div ref={loaderContainer} className='w-[100vw] h-[100vh] bg-white flex items-center justify-center'>
            <div className='w-[60vw] lg:w-[30vw]'>
                <img id='img-loader' src={logo} alt="" className='w-full' />
            </div>
        </div>
    )
}
