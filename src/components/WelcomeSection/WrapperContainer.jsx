import React from 'react'
import Hero2 from './Hero2'
import { InfoTop } from './InfoTop'
import Sidebar from './Sidebar'
import { SidebarDesktop } from './SidebarDesktop'




export const WrapperContainer = () => {
  return (
    <div className='flex flex-col h-[100vh] w-[100vw]'>

      <SidebarDesktop />
      <Sidebar />
      <InfoTop />
      < Hero2 />

    </div>
  )
}
