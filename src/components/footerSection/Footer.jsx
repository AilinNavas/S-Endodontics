import React from "react";
import logoFooter from '/src/assets/logo-trasnparente.jpg'


export const Footer = () => {

    return (
        <footer className="bg-white shadow mt-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="flex items-center justify-between lg:justify-end">
                    <a href='' className="flex items-center mb-4 space-x-3">
                        <img src={logoFooter} className="h-40 w-80" alt="Southside Endodontics logo" />
                    </a>
                </div>
                <hr className="my-6 border-gray-200 mx-auto border-gray-700" />
                <span className="block text-sm text-gray-500 text-center text-gray-400">© 2024 <a href="" className="hover:underline">Ailin & Joel</a>. All Rights Reserved.</span>
            </div>
        </footer>

    )
}
