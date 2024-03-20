
 import React, { useState } from 'react';
 import logo from "/src/assets/resu-logo.jpeg";
 import neal from "/src/assets/resu-neal.jpeg";
 import callUs from '/src/assets/icons/call.svg';
 import control from "/src/assets/icons/new2.svg";
 import '../../index.css'

 const MenuSiderItems = [
   { title: 'Dental Insurance', id: 'dentalInsurance' },
   { title: 'Pricing', id: 'pricing' },
   { title: 'About Us', id: 'aboutUs' },
   { title: 'Testimonials', id: 'testimonials' },
   { title: 'FAQs', id: 'faqs' },
 ];

 export const Sidebar = () => {
   const [open, setOpen] = useState(false);
   const [logoSrc, setLogoSrc] = useState(neal);

   const handleLogoClick = () => {
     setOpen(!open);
     setLogoSrc(open ? neal : logo);
   };

   const logoContainerClasses = open
     ? 'flex gap-x-2 left-6 absolute top-10 '
     : '';

   const headerClasses = open ? '' : 'hidden';
   const controlClasses = open ? 'w-14' : '';
   const buttonClasses = open ? 'bg-transparent absolute top-32 right-8 p-0 px-4 text-[#e2e4e6]' : '';
   const callUsClasses = open ? 'absolute px-3 py-2 border rounded-md border rounded-md right-9 bottom-[150px] mr-0 text-[#e2e4e6]' : '';

   return (
     <div className={`bg-primary ${open ? 'h-96' : 'h-16'} flex fixed bottom-0 z-40 duration-300 w-[100vw] lg:hidden`}>
       <img
         src={control}
         className={`absolute -top-2 left-1 bg-primary cursor-pointer rounded-full border-2 border-primary w-5 ${open && 'rotate-180'}`}
         onClick={handleLogoClick}
       />

       <div className={`flex w-full m-auto items-center justify-around ${open && 'flex-col w-28'}`}>
         <div className={logoContainerClasses}>
           <img
             src={logoSrc}
             className={`border-2 border-[#e2e4e6] rounded-lg ${controlClasses}`}
             onClick={handleLogoClick}
           />
           <h2 className={`text-white font-semibold font-zen text-xl duration-300 ${headerClasses}`}>SOUTHSIDE <br /> ENDODONTICS</h2>
         </div>
         <div className='w-1/3 text-right md:text-center'>
           <a href="https:securesite1246.tdo4endo.com/RefDocsLogin.aspx" target='_blank'>


             <button className={`bg-[#3c89f0] text-white font-roboto font-semibold py-2 px-4 rounded-xl  ${buttonClasses}`}>
               Refer Now
             </button>


           </a>
         </div>

         <a target='_blank' href="tel:+18173869007">
           <span className={`text-white flex pl-3 items-center font-semibold font-roboto ${callUsClasses}`}>
             <img className='mr-1' src={callUs} />
             Call Us
           </span>
         </a>
       </div>

       <ul className='pt-12 absolute left-4 top-16 flex flex-col text-left items-start ml-0 mr-2'>
         {MenuSiderItems.map((menu, index) => (
           <a href={`#${menu.id}`}>
           <li key={index} className={`text-white font-roboto font-normal text-lg flex gap-y-2 cursor-pointer p-2 rounded-md`}>
             <span className={`${!open && 'hidden'} duration-200`}>{menu.title}</span>
           </li>
           </a>
         ))}
       </ul>
     </div>
   );
 };











































