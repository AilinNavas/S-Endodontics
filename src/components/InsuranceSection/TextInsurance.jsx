import React from 'react'

export const TextInsurance = ({text}) => {
   
    return (
        <div className='h-auto md:mx-[5vw] m-auto overflow-hidden px-6 md:pl-24 mt-6 xl:py-4'>
            <p className='text-primary pt-2 pb-4 lg:px-6 bg-transparent text-xl m-auto md:text-2xl xl:text-4xl'>
                {text}
            </p>
        </div>
    )
}
