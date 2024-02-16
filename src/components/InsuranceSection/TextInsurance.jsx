import React from 'react'

export const TextInsurance = ({text}) => {
   
    return (
        <div className='h-auto m-auto overflow-hidden mt-6 xl:py-4'>
            <p className='text-gray-dark font-roboto font-normal pt-2 pb-4 lg:px-6 bg-transparent text-xl m-auto md:text-2xl'>
                {text}
            </p>
        </div>
    )
}
