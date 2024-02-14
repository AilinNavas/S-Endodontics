import React from 'react'
import Typewriter from 'typewriter-effect';
import { useRef } from 'react';


function Hero2() {

  const padre = useRef();




  return (
    <div className='-z-10'>
     
      <div className='h-screen flex flex-col place-items- z-30'>
      <a href="https://securesite1246.tdo4endo.com/RefDocsLogin.aspx" target='_blank'>
        <button className='text-white font-bold p-2 px-4 border z-20 rounded-md bg-green-400 hover:bg-green-500 absolute top-10 right-10'>Refer Now</button>
      </a>
        <div className='max-w-[800px]  my-32 w-full mx-auto text-center flex flex-col justify-center'>
          <p id='info' className='text-transform: capitalize text-2xl font-bold text-gray p-2 '>Experience endodontic care</p>
          <h1 id='title' className='text-6xl font-semibold p-4 text-primary lg:text-8xl'>ROOT CANAL TREATMENT</h1>
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
