import React from 'react'
import logo from '/src/assets/logo2.png'

export const AnimateHero = () => {
  return (
    <div className='flex max-w-[90vw] h-auto text-center mr-[5vw] border-2 border-red-500 py-2 lg:max-w-[80vw]'>
      <img src={logo} alt="" className='w-[30vw] border-2 border-green-400' />
      <div className='flex flex-col relative'>
        <h1 className='text-3xl border-2 border-cyan-600 tracking-tight h-full w-full opacity-0 font-black absolute text-left font-zen p-4 text-primary md:text-7xl lg:text-8xl lg:max-w-[50vw]'>
          ENDODONTICS TREATMENT
        </h1>
        <h2 className='text-3xl font-black absolute ml-0 h-full w-full text-left font-zen p-4 text-primary md:text-7xl lg:text-8xl'>SOUTHSIDE ENDODONTICS</h2>
      </div>
    </div>
  )
}
