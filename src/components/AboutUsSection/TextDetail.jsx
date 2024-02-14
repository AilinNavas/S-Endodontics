import React from 'react'

export const TextDetail = ( { title, detail }) => {
  return (
    <div className='details h-[100vh] flex flex-col justify-center w-[40vw] ml-auto text-black '>
       
        <h2 className='font-semibold items-start my-10 text-primary text-7xl'>{title}</h2>
        <p className='py-5 text-3xl'>{detail}</p>
      
    </div>
  )
}
