import React from "react";
import logoFooter from '/src/assets/logo-trasnparente.jpg'
import scroll from '/src/assets/icons/scroll.svg'


export const Footer = () => {

    return (

        <div className="hidden lg:block lg:h-56 lg:bg-white lg:w-full lg:bottom-0 lg:mx-4">
            <div className="flex w-[80vw] h-[100%] ml-[10vw] items-start">
                <div className="sm:hidden lg:w-[25vw] lg:flex lg:flex-col lg:items-left lg:mt-4">
                    <a target="_blank" href="https:maps.app.goo.gl/5FqaJem7M39qahwv8"><p className="text-lg font-roboto text-left text-gray-dark">1307 8th Avenue, Suite 303 <br />
                        Fort Worth, TX 76104</p></a>
                    <p className="text-lg font-roboto font-normal mt-4 text-left text-gray-dark">Monday, Tuesday,Wednesday, Thursday <br /> 8:00 am – 5:00 pm</p>
                    <p className="text-lg font-roboto font-normal mt-4 text-left text-gray-dark"> +1 817-386-9007</p>

                </div>
                <div className="hidden lg:w-[25vw] lg:flex lg:flex-col lg:ml-[10vw] lg:mt-4">
                    <p className="text-lg font-roboto font-semibold text-primary">Contact Us</p>
                    <p className="text-lg font-roboto font-semibold mt-2 text-primary">Refer Now</p>
                </div>
                <div className="w-[30vw] flex justify-end">
                    <img src={logoFooter} className="hidden lg:block lg:w-96 lg:h-36" alt="" />
                    </div>
                <a href="#"><div id='scrollButton' className='w-8 h-8 border-2 border-[#454b51] rounded-full mt-[25vh]'>
                    <img src={scroll} className='rotate-180 w-8' alt="" />
                </div>
                </a>
               
            </div>
            <div className="h-10 bg-[#f9fcff] text-center font-zen  ">
                <p className="pt-2">© 2024 ~ All Rights Reserved.
                    Designed and developed by Joe&Ai ~</p>
            </div>
        </div>




    )
}
