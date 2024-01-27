import React from 'react'
import FindUs from '/src/assets/icons/location.svg'
import Refer from '/src/assets/icons/refer.svg'
import CallUs from '/src/assets/icons/call2.svg'

export const BottonNav = () => {
    const Menus = [
      
        { title: 'Find Us', src: FindUs, href:"https://maps.app.goo.gl/5FqaJem7M39qahwv8" },
        { title: 'Refer', src: Refer, href:"https://securesite1246.tdo4endo.com/RefDocsLogin.aspx"},
        { title: 'Call Us', src: CallUs, href:"tel:+18173869007"}
    ]
    return (
        <div className="fixed z-30 bottom-0 w-full bg-primary text-white p-4 flex justify-between md:pt-4 lg:hidden">

            {Menus.map((menu, index) => (

                <button key={index} className= { `flex items-center ${index === 1 && 'px-4 rounded-md active:bg-gray hover:scale-[1.1] hover:text-white md:text-2xl'}
                ${index != 1 && 'active:text-gray md:mx-8 md:text-2xl'}` }>
                    <img src={menu.src} />
                    <a href={menu.href} target="_blank" ><span className="ml-2 font-medium">{menu.title}</span></a>
                </button>
            ))}
        </div>
    )
}
