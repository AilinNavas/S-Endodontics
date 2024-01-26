import React, { useState } from 'react'
import Logo from "/src/assets/resu-logo.png"
import Neal from "/src/assets/resu-neal.png"
import Control from "/src/assets/control.png"
import Home from "/src/assets/icons/home.svg"
import Insurances from "/src/assets/icons/insurances.svg"
import AboutUs from "/src/assets/icons/aboutus.svg"
import Faqs from "/src/assets/icons/faqs.svg"

export const Sidebar = () => {

    const [open, setOpen] = useState(false);
    const [logoSrc, setLogoSrc] = useState(Logo);

    const MenuSider = [
        { title: 'Home', src: Home },
        { title: 'Dental Insurance', src: Insurances },
        { title: 'About us', src: AboutUs },
        { title: 'FAQS', src: Faqs }
    ]
    const handleLogoClick = () => {
        setOpen(!open);
        setLogoSrc(open ? Logo : Neal );
    };


    return (
        <div className={`bg-primary ${open ? 'w-72' : 'w-20'} fixed duration-300 h-screen p-5 pt-8 hidden md:block`}>
            <img src={Control} className={`absolute cursor-pointer -right-3 top-9 w-7 border-2 border-primary rounded-full ${!open && 'rotate-180'}`}
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
                        <img src={menu.src} />
                        <span className={`${!open && 'hidden'} origin-left duration-200`}>{menu.title}</span>
                    </li>
                ))}
            </ul>

        </div>

    )
}
