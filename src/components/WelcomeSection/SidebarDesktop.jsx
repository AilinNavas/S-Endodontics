import React, { useState } from 'react'
import Logo from "/src/assets/resu-logo.png"
import Neal from "/src/assets/resu-neal.png"
import Control from "/src/assets/control.png"


export const SidebarDesktop = () => {

    const [open, setOpen] = useState(false);
    const [logoSrc, setLogoSrc] = useState(Logo);

    const MenuSider = [
        { title: 'Dental Insurance', gap: false },
        { title: 'Pricing', gap: false },
        { title: 'About Us', gap: false },
        { title: 'Testimonials', gap: false },
        { title: 'Blog', gap: false },
    ]
    const handleLogoClick = () => {
        setOpen(!open);
        setLogoSrc(open ? Neal : Logo );
    };


    return (
        <div className={`bg-primary ${open ? 'w-72' : 'w-20'} sm:hidden fixed z-30 duration-300 h-screen p-5 pt-16 lg:block`}>
            <img src={Control} className={`absolute cursor-pointer -right-3 top-14 w-7 border-2 border-primary rounded-full ${!open && 'rotate-180'}`}
                onClick={handleLogoClick}
                /> 
            <div className='flex gap-x-4 mt-4 items-center'>
                <img
                 src={logoSrc}
                 className={`cursor-pointer duration-200 rounded-lg border-white border-2 ${open && 'rotate-[360deg]'}`}
              
                   />
                <h2 className={`text-white origin-left font-medium text-xl duration-300 ${!open && 'scale-0'}`}>SOUTHSIDE ENDODONTICS</h2>
            </div> 

            <ul className='pt-6'>
                {MenuSider.map((menu, index) => (
                    <li key={index}
                        className={`text-white text-lg m-auto flex items-center
                    gap-x-4 cursor-pointer p-2 hover:text-secondary rounded-md
                    ${menu.gap ? 'mt-9' : 'mt-2'} 
                     ${index === 0 && 'text-secondary'}
                    `} >
                        <img src={menu.src} />
                        <span className={`${!open && 'hidden'} origin-left duration-200`}>{menu.title}</span>
                    </li>
                ))}
            </ul>

        </div>

    )
}