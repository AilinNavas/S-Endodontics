import React, { useState } from 'react'
import logo from "/src/assets/resu-logo.png"
 import Neal from "/src/assets/resu-neal.png"

export const Sidebar = () => {

    const [open, setOpen] = useState(false);
    const [logoSrc, setLogoSrc] = useState(logo);

    const MenuSider = [
        { title: 'Home', src: 'home' },
        { title: 'Dental Insurance', src: 'insurances', gap: false },
        { title: 'About us', src: 'aboutus' },
        { title: 'FAQS', src: 'faqs', gap: false }
    ]
    const handleLogoClick = () => {
        setOpen(!open);
        setLogoSrc(open ? logo : Neal );
    };


    return (
        <div className={`bg-primary ${open ? 'w-72' : 'w-20'} fixed duration-300 h-screen p-5 pt-8 hidden md:block`}>
            <img src="./src/assets/control.png" className={`absolute cursor-pointer -right-3 top-9 w-7 border-2 border-primary rounded-full ${!open && 'rotate-180'}`}
                // onClick={() => setOpen(!open)}
                onClick={handleLogoClick}
                /> 
            <div className='flex gap-x-4 items-center'>
                <img
                 src={logoSrc}
                 className={`cursor-pointer duration-500 rounded-md ${open && 'rotate-[360deg]'}`}
                //  src= {logo}
                //   className={`cursor-pointer duration-500 rounded-md ${open && 'rotate-[360deg]'}`}
                   />
                <h2 className={`text-white origin-left font-medium text-xl duration-300 ${!open && 'scale-0'}`}>SOUTHSIDE ENDODONTICS</h2>
            </div> *

            <ul className='pt-6'>
                {MenuSider.map((menu, index) => (
                    <li key={index}
                        className={`text-white text-lg m-auto flex items-center
                    gap-x-4 cursor-pointer p-2 hover:bg-secondary rounded-md
                    ${menu.gap ? 'mt-9' : 'mt-2'} ${index === 0 && 'bg-secondary'}`} >
                        <img src={`./src/assets/icons/${menu.src}.svg`} />
                        <span className={`${!open && 'hidden'} origin-left duration-200`}>{menu.title}</span>
                    </li>
                ))}
            </ul>

        </div>

    )
}
