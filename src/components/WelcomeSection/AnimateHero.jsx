import React from 'react'
import logo from '/src/assets/logo2.png'

export const AnimateHero = () => {
  return (
    <div className='flex w-[90vw] h-auto text-center mr-[5vw] border-2 border-red-500 py-2'>
    <img src={logo} alt="" className='w-[30vw] border-2 border-green-400' />
    <div className='flex flex-col relative'>
      <h1 className='text-3xl tracking-tight h-full w-full font-black absolute text-justify font-zen p-4 text-primary md:text-7xl lg:text-8xl'>
        ENDODONTICS TREATMENT
</h1>
      <h2 className='text-4xl font-black absolute opacity-0 text-left font-zen p-4 text-primary md:text-7xl lg:text-8xl'>SOUTHSIDE ENDODONTICS</h2>
    </div>
  </div>
  )
}
