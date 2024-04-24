import React from 'react'
import { BussinesInformation } from './BussinesInformation'
import { AreasOfService } from './AreasOfService'
import logo from '/src/assets/transparente.jpg'
import facebook from '/src/assets/icons/facebook.svg'
import linkdin from '/src/assets/icons/ln.svg'
import scroll from '/src/assets/icons/scroll.svg'

export const FooterMobile = () => {
  return (
    <div className='w-[100vw]'>
      <div className='contenedor-padre w-[90vw] mx-auto lg:hidden pb-[10vh] '>
        <div className='flex flex-col items-left md:flex-row md:justify-center md:items-start md:space-x-10'>
          <BussinesInformation />
          <AreasOfService />
        </div>


      </div>
      <div className='h-auto lg:pl-20'>
        <div className='border-t border-gray pt-10 pb-4 w-[90vw] mx-auto lg:w-[80vw]'>
        <a href="#"><img src={logo} alt="" className='h-full w-48 md:w-80 mx-auto hover:scale-105 transition-all duration-300' /></a> 
        </div>
        <div className='flex items-center justify-center space-x-2 pb-4'>
        <a href="https://www.linkedin.com/in/neal-horn-a235713/"><img src={facebook} alt="" className='h-8 bg-[#4460A0] p-1.5 rounded-lg lg:hover:scale-110 hover:shadow-lg transition-all duration-300' /></a>
        <a href="https://m.facebook.com/southsideendodontics"><img src={linkdin} alt="" className='h-8 bg-[#0A66C2] p-2 rounded-lg lg:hover:scale-110 hover:shadow-lg transition-all duration-300' /></a>
        </div>
        <div id='scrollButton' className='w-8 h-8 border-2 border-[#454b51] rounded-full relative bottom-4 left-[85vw] active:bg-[#cadffb] lg:hover:bg-[#cadffb] transition-all duration-300'>
              <a href="#"><img src={scroll} className='rotate-180 w-8' alt="" /></a> 
            </div>
          
        <div className='h-18 mb-16 w-full text-center text-xs text-zen text-gray-dark lg:mb-12'>
          <p>©Copyright 2024 - Website Disign by JoeAi</p>
        </div>
      </div>
    </div>
  )
}
