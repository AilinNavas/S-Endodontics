import React, { useEffect } from 'react'
import Typewriter from 'typewriter-effect';
import { gsap } from "gsap";
import logo from '/src/assets/resu-logo.jpeg'


function Hero2() {
  useEffect(() => {
    gsap.set(".ball", { xPercent: -50, yPercent: -50 })
    let targets = gsap.utils.toArray(".ball");
    window.addEventListener("mousemove", (e) => {
      gsap.to(targets, {
        duration: 0.5,
        x: e.clientX,
        y: e.clientY,
        ease: "power1.out",
        overwrite: "auto",
        stagger: 0.02,
      });
    });
  },
    []
  );

  return (
    <div className='-z-10 w-[100vw]'>

      <div className='h-screen flex flex-col place-items- z-30 '>
        <a href="https://securesite1246.tdo4endo.com/RefDocsLogin.aspx" target='_blank'>
          <button className='text-white font-bold p-2 px-4 border z-20 rounded-md bg-green-400 hover:bg-green-500 absolute top-10 right-10 hidden lg:block'>Refer Now</button>
        </a>


        <img src={logo} className="ball hidden lg:block w-10 h-10 fixed top-0 left-0 rounded-full z-40" />
        <img src={logo} className="ball hidden lg:block w-10 h-10 fixed top-0 left-0 rounded-full z-40" />
        <img src={logo} className="ball hidden lg:block w-10 h-10 fixed top-0 left-0 rounded-full z-40" />
        <img src={logo} className="ball hidden lg:block w-10 h-10 fixed top-0 left-0 rounded-full z-40" />
        <img src={logo} className="ball hidden lg:block w-10 h-10 fixed top-0 left-0 rounded-full z-40" />

        <div className='max-w-[800px] my-32 w-full mx-auto text-center flex flex-col justify-center'>
          <p id='info' className='text-transform: capitalize text-2xl font-bold text-gray p-2 '>Experience endodontic care</p>
          <h1 id='title' className='text-6xl font-semibold font-jost p-4 text-primary lg:text-8xl'>ROOT CANAL TREATMENT</h1>
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


        </div>
      </div>
    </div>

  )
}

export default Hero2
