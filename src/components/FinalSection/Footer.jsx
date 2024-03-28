import React from 'react'
import { BussinesInformation } from './BussinesInformation'
import { AreasOfService } from './AreasOfService'
import { CallUsToday } from './CallUsToday'


export const Footer = () => {
    return (
        <section className='lg:pl-20 lg:h-auto hidden lg:block lg:items-center lg:py-16 bg-[#fdfefe]'>
            <div className='w-[80vw] mx-auto lg:h-[40vh]'>
                <div className='w-full lg:h-3/4 lg:grid lg:grid-cols-3 lg:pb-20'>
                    <BussinesInformation />
                    <AreasOfService />
                    <CallUsToday />
                </div>
            </div>
            
        </section>
    )
}
