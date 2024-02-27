import React, { useEffect } from 'react'
import Typewriter from 'typewriter-effect';
import { gsap } from "gsap";
import logo from '/src/assets/resu-logo.jpeg'


function Hero2() {
 

  return (

      <div className='h-[80vh] w-[100vw] flex flex-col place-items-center'>
        <a href="https://securesite1246.tdo4endo.com/RefDocsLogin.aspx" target='_blank'>
          <button className='font-normal font-roboto text-center p-3 px-6 text-white bg-gradient-to-r from-[#6ca6f3] to-[#9bc2f7] absolute top-10 right-10 hidden lg:block cursor-pointer mx-0  transition-all bg-[#126de7] py-2 rounded-lg
        border-[#0e57b8]
        border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
        active:border-b-[2px] active:brightness-90 active:translate-y-[2px]'>Refer Now</button>
        </a>

        <div className='max-w-[90vw] my-32 text-center flex flex-col justify-center lg:max-w-[800px]'>
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
      
    

  )
}

export default Hero2
