import React from 'react'

export const Card = ({card}) => {
  return (
    <div className='h-full '>
     <div className={`${card.bgCardColor}`}>
        <h2>{card.title}</h2>
     </div>
    </div>
  )
}
