import React from "react";
import logoFooter from '/src/assets/logo-trasnparente.jpg'



function Footer() {


return (
<footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href='' className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src={logoFooter} className="h-40 w-80" alt="Flowbite Logo" />
        
            </a>
          
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" className="hover:underline">Ailin & Joel</a>. All Rights Reserved.</span>
    </div>
</footer>

)
}

export default Footer