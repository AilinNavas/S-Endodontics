import React from 'react'
import scroll from '/src/assets/icons/scroll.svg'

export const AreasOfService = () => {
  return (
    <div className='max-h-full border-2 border-lime-400'>
      <h4 className='font-bold text-gray-dark h-1/5 text-xl font-zen md:text-center underline underline-offset-4 mb-2 lg:mb-0'>Areas of Service</h4>
      <div className='grid grid-cols-2 h-4/5 '>
        {/* <ul className='grid grid-cols-1 gap-5 text-lg h-[80%] font-zen'> */}
        <ul className='flex flex-col text-lg h-[80%] font-zen'>
          <li className='md:my-1 md:text-right'>Benbrook</li>
          <li className='md:my-1 md:text-right'>Saginaw</li>
          <li className='md:my-1 md:text-right'>Mansfield</li>
          <li className='md:my-1 md:text-right'>Burleson</li>
          <li className='md:my-1 md:text-right'>Crowley</li>
        </ul>

        <ul className='flex flex-col text-lg h-[80%] font-zen ml-4'>
          <li className='md:my-1 md:text-left'>Lake Worth</li>
          <li className='md:my-1 md:text-left'>Weatherford</li>
          <li className='md:my-1 md:text-left'>Cleburne</li>
          <li className='md:my-1 md:text-left'>Arlington</li>
          <li className='md:my-1 md:text-left'>Aledo</li>
        </ul>
      </div>
      <div id='scrollButton' className='w-8 h-8 border-2 border-[#454b51] rounded-full mb-10 relative -bottom-10 left-[75vw] md:left-48 md:-bottom-10 lg:hidden'>
        <a href="#"><img src={scroll} className='rotate-180 w-8' alt="" />  </a>
      </div>
    </div>
  )
}
