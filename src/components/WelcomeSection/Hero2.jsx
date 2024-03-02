import React from 'react'
import Typewriter from 'typewriter-effect';
import AnimatedButton from './AnimatedButton';



function Hero2() {

  return (

    <div className=' w-[100vw] h-[100vh] flex flex-col place-items-center'>

      <div className='max-w-[90vw] my-32 text-center flex flex-col justify-center lg:max-w-[800px]'>
        <p id='info' className='text-transform: capitalize text-2xl font-roboto font-bold text-gray p-2 '>Experience endodontic care</p>
        <h1 id='title' className='text-9xl font-black font-zen p-4 text-primary lg:text-8xl'>ROOT CANAL TREATMENT</h1>
        <div className='md:text-4xl sm:text-3xl text-xl font-roboto text-transform: capitalize font-medium text-secondary'>
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
        <div className='flex mt-[10vh] space-x-8 items-center text-center mx-auto'>
          <AnimatedButton text="Refer Now" color="green-500" backgroundColor="green-500" />
          <AnimatedButton text="Schedule Appointment" color="secondary" backgroundColor="secondary" />
        </div>

      </div>

    </div>



  )
}

export default Hero2
