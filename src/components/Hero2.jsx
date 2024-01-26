import React from 'react'
// import { useLayoutEffect, useRef } from 'react'
// import gsap from 'gsap'
import Typewriter from 'typewriter-effect';

function Hero2() {

    // const comp = useRef(null)

    // useLayoutEffect(() => {
    //     let ctx = gsap.context(() => {
    //         const t1 = gsap.timeline()
    //         t1.from('#intro-slider', {
    //             backgroundColor: 'white',
    //             duration: 1.3,
    //             scale: 1.2,
    //             delay: 0.3,
    //             opacity: 0
    //         })
    //             .from('#welcome', {
    //                 opacity: 0,
    //                 duration: 5.0,
    //             })
    //             .from('#hero', {
    //                 opacity: 0,
    //             })
    //             .to('#intro-slider', {
    //                 opacity: 0,
    //                 yPercent: -100,
    //                 duration: 0.5,
    //                 background: 'white'
    //             }).to('#welcome', {
    //                 opacity: 1,
    //             }).to('#hero', {

    //             })

    //     }, comp)

    //     return () => ctx.revert()
    // }, [])

    return (

        // <div className='relative' ref={comp}>
        <div className='relative -z-10'>

            {/* <div id='intro-slider' className='h-screen p-10 bg-white absolute top-0 left-0 z-10 w-full flex flex-col gap-10 tracking-tight'>
                <img src="\src\assets\logo-Neal.jpeg" width='60%' className='m-auto' alt="" />
            </div> */}



            <div id='welcome' className='h-screen flex bg-write flex-col place-items-center'>

                <div id='hero' className='max-w-[800px]  my-32 w-full mx-auto text-center flex flex-col justify-center'>
                    <p className='text-transform: capitalize text-2xl font-bold text-gray p-2 '>Experience endodontic care</p>
                    <h1 className='text-6xl font-semibold p-4 text-primary lg:text-8xl'>ROOT CANAL TREATMENT</h1>
                    <div className='md:text-4xl sm:text-3xl text-xl text-transform: capitalize font-medium text-secondary'>
                        <Typewriter
                            options={{
                                loop: true
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
                    {/* <div className='m-auto'>
                        <img src="./src/assets/Hero/google.png" className='h-16 w-40 my-10' alt="" />
                    </div> */}

                    <button id='button' className='bg-trasparent shadow-secondary hover:bg-sky-500 hover:text-primary hover:font-semibold  w-[200px] rounded-md text-xl my-10 m-auto py-4 shadow hover:shadow-2xl text-gray t-24'>Refer Now</button>
                </div>



            </div>

        </div>
    )
}

export default Hero2
