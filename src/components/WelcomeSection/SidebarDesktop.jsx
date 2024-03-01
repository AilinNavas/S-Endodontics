import React, {useRef} from 'react'
import Neal from "/src/assets/resu-Neal.jpeg"
import Maps from "/src/assets/maps.jpeg"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const SidebarDesktop = () => {

    const sidebar = useRef(null);

    useGSAP(() => {
        gsap.fromTo(sidebar.current,
            { autoAlpha: 0 , x:-100 },
            { autoAlpha: 1, x: 0, duration: 3, delay: 3, ease: "power4.out", }
        );
   
    },
        { scope: sidebar });


    const MenuSider = [
        { title: 'Dental Insurance', gap: false },
        { title: 'Pricing', gap: false },
        { title: 'About Us', gap: false },
        { title: 'Testimonials', gap: false },
        { title: 'Blog', gap: false },
    ]

    return (
        <div ref= {sidebar} className={`bg-primary w-[16vw] sm:hidden fixed z-50 h-screen p-5 pt-16 lg:block`}>
            <div className='flex gap-x-4 mt-4 items-center'>
                <img
                    src={Neal}
                    className={`cursor-pointer hover:scale-125 hover:border-[#cadffb] duration-200 w-14 h-14 rounded-lg border-2 border-[#abb1b7]`}

                />
                <h2 className={`text-white origin-left font-semibold font-zen text-xl`}>SOUTHSIDE ENDODONTICS</h2>
            </div>

            <ul className='pt-6'>
                {MenuSider.map((menu, index) => (
                    <li key={index}
                        className={`text-white font-roboto font-normal text-lg m-auto flex items-center
                    gap-x-4 cursor-pointer p-2 hover:text-[#cadffb] rounded-md
                    ${menu.gap ? 'mt-9' : 'mt-2'} 
                    
                    `} >

                        <span className={`origin-left duration-200`}>{menu.title}</span>
                    </li>
                ))}
            </ul>
            <div className={`w-52 h-48 mt-10 `}>
                <a target='_blank' href="https://maps.app.goo.gl/5FqaJem7M39qahwv8">
                    <img className='w-full' src={Maps} alt="" />
                </a>
                <p id='direction' className='text-white font-roboto font-normal text-sm ml-1 text-left pt-2 hover:text-[#cadffb]'><a target='_blank' href="https://maps.app.goo.gl/5FqaJem7M39qahwv8">1307 8th Avenue, Suite 303 <br />Fort Worth, TX 76104</a></p>
            </div>

        </div>

    )
}