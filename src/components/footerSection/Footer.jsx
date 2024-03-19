import React from "react";
import logoFooter from '/src/assets/logo-trasnparente.jpg'


export const Footer = () => {

    return (


        <footer className="bg-white">
            <div className="w-full max-w-screen-xl p-4 ">

                <a href="https://flowbite.com/" >
                    <img src={logoFooter} className="w-80 h-40 lg:ml-[70vw]" alt="Southside Endodontics logo" />
                </a>

                <hr className="my-6 border-gray-200 w-[100vw] lg:my-8" />
                <span className="block text-md text-primary text-center">© 2024 <a href="https://flowbite.com/" className="hover:underline">Ailin&Joel</a>. All Rights Reserved.</span>
            </div>
        </footer>



    )
}
