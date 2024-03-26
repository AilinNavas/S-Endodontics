import React from 'react'
import { BussinesInformation } from './BussinesInformation'
import { AreasOfService } from './AreasOfService'
import { CallUsToday } from './CallUsToday'

export const Footer = () => {
    return (
        <section className='w-[100vw] h-auto hidden lg:flex items-center py-10 bg-[#e2e4e6]'>
            <div className='contenedor-padre flex flex-col w-[80vw] h-[40vh] ml-[10vw]'>
                <div className='contenedor-info w-full h-3/4 grid grid-cols-3'>
                    <BussinesInformation />
                    <AreasOfService />
                    <CallUsToday />
                </div>
            </div>
        </section>
    )
}
