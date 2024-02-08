 import React from 'react'

 export const Card = ({card, index, selected}) => {
   const cardContentClass = selected === index ? 'flex flex-col items-center justify-center m-auto' : 'hidden';
   return (
     <div className='w-full relative'>
      <div className={`w-full rounded-xl flex flex-col items-center justify-center ${card.bgCardColor} p-2 lg:pb-8`}>
         <h2 className={`${card.textColor} h-20 text-4xl font-bold text-center pt-4 md:text-5xl `}>{card.title}</h2>
         <div 
         className={selected === index ? 'flex flex-col items-center justify-center m-auto px-10 lg:flex-row' : 'hidden'}>
         <img className= 'w-full rounded-xl h-auto md:w-[50vw] md:h-[30vw]'src={`${card.img}`} alt={`Image of ${card.title}`} />
         <p className='my-6 md:text-2xl lg:text-3xl lg:ml-5'>{card.description}</p>
         </div>
      </div>
     </div>
   )
 }
