import React from 'react'
import { Hero2 } from './Hero2'
import { InfoTop } from './InfoTop'

export const WrapperContainer = () => {
  return (
    <div className='flex flex-col h-[100vh] w-[100vw]'>
      <InfoTop />
      <Hero2 />

    </div>
  )
}
