import React from 'react'
import { BussinesInformation } from './BussinesInformation'
import { AreasOfService } from './AreasOfService'

export const FooterMobile = () => {
  return (
    <div className='contenedor-padre w-[90vw] mx-auto lg:hidden pb-[10vh] border-2 border-lime-700'>
        <div className='flex flex-col items-left md:flex-row md:justify-center md:items-start md:space-x-10 border-2 border-lime-500'>
            <BussinesInformation />
            <AreasOfService />
        </div>

    </div>
  )
}
