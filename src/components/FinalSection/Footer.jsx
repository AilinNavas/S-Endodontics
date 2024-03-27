import React from 'react'
import { BussinesInformation } from './BussinesInformation'
import { AreasOfService } from './AreasOfService'
import { CallUsToday } from './CallUsToday'
import scroll from '/src/assets/icons/scroll.svg'

export const Footer = () => {
    return (
        <section className='lg:pl-20 lg:h-auto hidden lg:block lg:items-center lg:pt-10 lg:pb-16 bg-white'>
            <div className='w-[80vw] mx-auto lg:h-[40vh]'>
                <div className='w-full lg:h-3/4 lg:grid lg:grid-cols-3 lg:pb-20'>
                    <BussinesInformation />
                    <AreasOfService />
                    <CallUsToday />
                </div>
            </div>
            <div id='scrollButton' className='w-8 h-8 border-2 border-[#454b51] rounded-full mb-10 relative bottom-0 left-[85vw]'>
              <a href="#"><img src={scroll} className='rotate-180 w-8' alt="" />  </a> 
            </div>
          
        </section>
    )
}
