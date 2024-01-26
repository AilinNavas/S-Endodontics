import React from 'react'
import Typewriter from 'typewriter-effect';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react'



function Hero() {
    // gsap.registerPlugin(ScrollTrigger);
    // useEffect(() => {
    //     const t1 = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: '.hero',
    //             start: "bottom top",
    //             scaleY: 2,
    //             scrub: 1,
    //             pin: true,

    //         }
    //     })
    //     t1.to(".hero", { yPercent: -100 })


    //     return () => t1.revert()
    // }, [])
    


    return (

        <div className='hero w-screen h-screen overflow-x-hidden'>

            <div className='hero max-w-[800px]  my-32 w-full mx-auto text-center flex flex-col justify-center'>
                <p className='text-transform: capitalize text-2xl font-bold text-gray p-2 '>Experience endodontic care</p>
                <h1 className='text-6xl font-semibold p-4 text-primary lg:text-8xl'>ROOT CANAL TREATMENT</h1>
                <div className='md:text-4xl sm:text-3xl text-xl text-transform: capitalize font-medium text-secondary'>
                    <Typewriter
                        options={{
                            loop: true,
                        }}
                        onInit={(typewriter) => {
                            typewriter.typeString('Advanced Treatment Methods')
                                .callFunction(() => {
                                    console.log('String typed out!');
                                })
                                .pauseFor(200)
                                .deleteAll()
                                .typeString('Prompt Emergency Care ')
                                .pauseFor(200)
                                .deleteAll()
                                .typeString('Flexible Financial Options')
                                .deleteAll()
                                .typeString('Se habla Español ')
                                .pauseFor(1000)

                                .callFunction(() => {
                                    console.log('All strings were deleted');
                                })
                                .start();
                        }} />
                </div>

                <button className='bg-trasparent shadow-secondary hover:bg-sky-500 hover:text-primary hover:font-semibold  w-[200px] rounded-md text-xl my-10 m-auto py-4 shadow hover:shadow-2xl text-gray t-24'>Refer Now</button>
            </div>
            
        </div>

    )
}

export default Hero

