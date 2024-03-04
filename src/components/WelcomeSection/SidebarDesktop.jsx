import React, { useState } from 'react'
import Logo from "/src/assets/resu-logo.jpeg"
import Neal from "/src/assets/Neal.jpeg"
import Maps from "/src/assets/maps.jpeg"
import Control from "/src/assets/control.png"
import insurance from "/src/assets/icons/sidebarDestopk/insurance.svg"
import pricing from "/src/assets/icons/sidebarDestopk/pricing.svg"
import us from "/src/assets/icons/sidebarDestopk/us.svg"
import testimonials from "/src/assets/icons/sidebarDestopk/testimonials.svg"
import faqs from "/src/assets/icons/sidebarDestopk/faqs.svg"


export const SidebarDesktop = () => {

    const [open, setOpen] = useState(false);
    const [logoSrc, setLogoSrc] = useState(Neal);

    const MenuSider = [
        { title: 'Dental Insurance', gap: false , icon: insurance  },
        { title: 'Pricing', gap: false , icon: pricing  },
        { title: 'About Us', gap: false , icon: us  },
        { title: 'Testimonials', gap: false , icon: testimonials  },
        { title: 'Frequently asked questions', gap: false, icon: faqs  },
    ]
    const handleLogoClick = () => {
        setOpen(!open);
        setLogoSrc(open ? Neal : Logo);
    }
    return (
        <div className={`bg-primary ${open ? 'w-72' : 'w-20'} sm:hidden fixed z-50 duration-300 h-screen p-5 pt-16 lg:block`}>
            <img src={Control} className={`absolute cursor-pointer -right-3 top-14 w-6 border-2 bg-primary border-primary rounded-full ${!open && 'rotate-180'}`}
                onClick={handleLogoClick}
            />
            <div className='flex gap-x-2 mt-4 items-center'>
                <img
                    src={logoSrc}
                    className={`cursor-pointer  hover:scale-110 duration-200 rounded-lg border-2 w-20 border-[#abb1b7] ${open && 'rotate-[360deg]'}`}

                />
                <h2 className={`text-white origin-left font-semibold font-zen text-xl duration-300 ${!open && 'scale-0'}`}>SOUTHSIDE ENDODONTICS</h2>
            </div>

            <ul className='pt-6'>
                {MenuSider.map((menu, index) => (
                    <li key={index}
                        className={`text-white font-roboto font-normal text-lg m-auto flex items-center
                    gap-x-4 cursor-pointer p-2 hover:text-secondary rounded-md
                    ${menu.gap ? 'mt-9' : 'mt-2'} 
                     ${index === 0 && 'text-secondary'}
                    `} >
                
                        <img src={menu.icon} alt={menu.title} className={`${open && 'hidden'} origin-center scale-125 hover:scale-150`}/>
                        <span className={`${!open && 'hidden'} origin-left duration-200`}>{menu.title}</span>
                    </li>
                ))}
            </ul>
            <div className={`w-56 h-48 mt-10 ${!open && 'hidden'}`}>
                <a target='_blank' href="https://maps.app.goo.gl/5FqaJem7M39qahwv8">
                    <img className='w-full' src={Maps} alt="" />
                    </a>
                    <p id='direction' className='text-white font-roboto font-normal text-xs text-left pt-2 ml-4  hover:text-secondary'><a target='_blank' href="https://maps.app.goo.gl/5FqaJem7M39qahwv8">1307 8th Avenue, Suite 303 <br />Fort Worth, TX 76104</a></p>
            </div>

        </div>

    )
}