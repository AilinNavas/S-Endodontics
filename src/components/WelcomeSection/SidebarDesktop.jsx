import React, { useState, useRef } from "react";
import { gsap } from "gsap";
import logo from "/src/assets/resu-logo.jpeg";
import neal from "/src/assets/Neal.jpeg";
import maps from "/src/assets/maps.jpeg";
import control from "/src/assets/control.png";
import insurance from "/src/assets/icons/sidebarDestopk/insurance.svg";
import pricing from "/src/assets/icons/sidebarDestopk/pricing.svg";
import us from "/src/assets/icons/sidebarDestopk/us.svg";
import testimonials from "/src/assets/icons/sidebarDestopk/testimonials.svg";
import faqs from "/src/assets/icons/sidebarDestopk/faqs.svg";

export const SidebarDesktop = () => {
    const sideRef = useRef();

    const [open, setOpen] = useState(false);
    const [logoSrc, setLogoSrc] = useState(neal);

    const MenuSider = [
        { title: "Dental Insurance", icon: insurance, id: 'dentalInsurance' },
        { title: "Pricing", icon: pricing, id: 'pricing' },
        { title: "Testimonials", icon: testimonials, id: 'testimonials' },
        { title: "About Us", icon: us, id: 'aboutUs' },
        { title: "Frequently asked questions", icon: faqs, id: 'faqs' },
    ];
    const handleLogoClick = () => {
        setLogoSrc(open ? neal : logo);
        if (open === false) {
            gsap.to(
                sideRef.current,
                {
                    width: '280px',
                    duration: 0.5,
                    ease: "elastic",
                    onComplete: () => setOpen(true), // Cambiar estado al final de la animación de cierre
                },
            );
        } else {
            setOpen(false); // Cambiar estado antes de iniciar la animación de apertura
            gsap.to(
                sideRef.current,
                {
                    width: '80px',

                }
            );
        }
    }



    return (
        <div
            ref={sideRef}
            className={`bg-primary sm:hidden fixed z-50 duration-300 h-screen w-20 p-5 pt-16 lg:block`}
        >
            <img
                src={control}
                className={`absolute cursor-pointer z-50 -right-3 top-14 w-6 border-2 bg-primary border-primary rounded-full ${!open && "rotate-180"}`}
                onClick={handleLogoClick}
            />
            <div className="flex gap-x-2 mt-4 items-center">
                <img
                    src={logoSrc}
                    className={`cursor-pointer  hover:scale-110 duration-200 rounded-lg border-2 w-20 border-[#abb1b7] ${open && "rotate-[360deg]"}`}
                />
                <h2

                    className={`text-white origin-left font-semibold font-zen text-xl duration-300 ${!open && "scale-0"}`}
                >
                    SOUTHSIDE ENDODONTICS
                </h2>
            </div>

            <ul className="pt-6">
                {MenuSider.map((menu, index) => (
                    <a href={`#${menu.id}`}>
                        <li
                            key={index}
                            className={`text-white font-roboto font-normal text-lg m-auto flex items-center
                     gap-x-4 cursor-pointer p-2 hover:text-[#aab4c4] hover:scale-110
                      ${index === 0 && "text-secondary"}
                     `}
                        >

                            <img
                                src={menu.icon}
                                alt={menu.title}
                                className={` origin-center scale-125 hover:scale-150`}
                            />
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                {menu.title}
                            </span>

                        </li>
                    </a>
                ))}
            </ul>
            <div className={`w-56 h-48 mt-10 ${!open && "hidden"}`}>
                <a target="_blank" href="https:maps.app.goo.gl/5FqaJem7M39qahwv8">
                    <img className="w-full" src={maps} alt="" />
                </a>
                <p
                    id="direction"
                    className="text-white font-roboto font-normal text-xs text-left pt-2 ml-4  hover:text-[#aab4c4] hover:scale-110"
                >
                    <a target="_blank" href="https:maps.app.goo.gl/5FqaJem7M39qahwv8">
                        1307 8th Avenue, Suite 303 <br />
                        Fort Worth, TX 76104
                    </a>
                </p>
            </div>
        </div>
    );
};

