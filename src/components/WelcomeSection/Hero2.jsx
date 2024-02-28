import React, { useEffect } from 'react'
import Typewriter from 'typewriter-effect';

function Hero2() {


  return (

    <div className='h-[80vh] w-[100vw] flex flex-col place-items-center'>
      <a href="https://securesite1246.tdo4endo.com/RefDocsLogin.aspx" target='_blank'>
        <button
          class="overflow-hidden w-36 p-2 h-12 font-roboto shadow-md bg-[#c6cbcf] text-primary border-none rounded-md text-xl font-bold cursor-pointer relative left-[30vw] top-[10vh] z-10 group"
        >
          Refer Now
          <span
            class="absolute w-36 h-32 -top-8 -left-2 bg-[#9bc2f7] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-bottom"
          ></span>
          <span
            class="absolute w-36 h-32 -top-8 -left-2 bg-[#3c89f0] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-bottom"
          ></span>
          <span
            class="absolute w-40 h-32 -top-8 -left-2 bg-[#0e57b8] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-bottom"
          ></span>
          <span
            class="group-hover:opacity-100 text-white group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10"
          >Refer Now</span
          >
        </button>

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
