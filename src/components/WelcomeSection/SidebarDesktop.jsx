import React, {useState} from 'react'
import Logo from "/src/assets/resu-logo.jpeg"
import Neal from "/src/assets/resu-neal.jpeg"
import Maps from "/src/assets/maps.jpeg"
import Control from "/src/assets/icons/new2.svg";
// import gsap from 'gsap';
// import { useGSAP } from '@gsap/react';

export const SidebarDesktop = () => {

    const [open, setOpen] = useState(false);
    const [logoSrc, setLogoSrc] = useState(Logo);

    const handleLogoClick = () => {
        setOpen(!open);
        setLogoSrc(open ? Neal : Logo);
    }
  

    // const sidebar = useRef(null);

    // useGSAP(() => {
    //     gsap.fromTo(sidebar.current,
    //         { autoAlpha: 0 , x:-100 },
    //         { autoAlpha: 1, x: 0, duration: 3, delay: 3, ease: "power4.out", }
    //     );
   
    // },
    //     { scope: sidebar });


    const MenuSider = [
        { title: 'Dental Insurance', gap: false },
        { title: 'Pricing', gap: false },
        { title: 'About Us', gap: false },
        { title: 'Testimonials', gap: false },
        { title: 'Blog', gap: false },
    ]

    return (
        <div className={`bg-primary relative ${open ? 'h-auto' : 'h-32'} sm:hidden shadow-lg z-50 duration-300 w-72 p-5 ml-10 mt-16 rounded-md lg:block`}>
        <img src={Control} className={`absolute cursor-pointer left-4 -bottom-2 w-5 bg-primary rounded-full ${!open && 'rotate-180'}`}
            onClick={handleLogoClick}
        />
           
            <div className='flex gap-x-4 mt-4 items-center'>
                <img
                     src={logoSrc}
                     className={`cursor-pointer duration-200 rounded-lg border-2 border-[#abb1b7] ${open && 'rotate-[360deg]'}`}

                />
                <h2 className={`text-white origin-left font-semibold font-zen text-xl duration-300 ${!open && 'hidden'}`}>SOUTHSIDE ENDODONTICS</h2>
                <h2 className={`text-white origin-left font-semibold font-zen text-xl duration-300 ${open && 'hidden'}`}>Neal Horn, DDS, MS</h2>
            </div>

            <ul className='pt-6'>
                {MenuSider.map((menu, index) => (
                    <li key={index}
                        className={`text-white font-roboto font-normal text-lg m-auto flex items-center
                    gap-x-4 cursor-pointer p-2 hover:text-[#cadffb] rounded-md
                    ${menu.gap ? 'mt-9' : 'mt-2'} 
                    
                    `} >

<span className={`${!open && 'hidden'} origin-left duration-200`}>{menu.title}</span>
                    </li>
                ))}
            </ul>
            <div className={`w-56 h-48 mt-10 ${!open && 'hidden'}`}>
                <a target='_blank' href="https://maps.app.goo.gl/5FqaJem7M39qahwv8">
                    <img className='w-full' src={Maps} alt="" />
                </a>
                <p id='direction' className='text-white font-roboto font-normal text-sm ml-1 text-left pt-2 hover:text-[#cadffb]'><a target='_blank' href="https://maps.app.goo.gl/5FqaJem7M39qahwv8">1307 8th Avenue, Suite 303 <br />Fort Worth, TX 76104</a></p>
            </div>

        </div>

    )
}