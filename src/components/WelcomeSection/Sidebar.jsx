
import React, { useState } from 'react';
import Logo from "/src/assets/resu-logo.png";
import Neal from "/src/assets/resu-neal.png";
import CallUs from '/src/assets/icons/call.svg';
import Control from "/src/assets/icons/new2.svg";

const MenuSiderItems = [
  { title: 'Dental Insurance', gap: false },
  { title: 'Pricing', gap: false },
  { title: 'About Us', gap: false },
  { title: 'Testimonials', gap: false },
  { title: 'Blog', gap: false },
];

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [logoSrc, setLogoSrc] = useState(Neal);

  const handleLogoClick = () => {
    setOpen(!open);
    setLogoSrc(open ?Neal : Logo);
  };

  const logoContainerClasses = open
    ? 'flex gap-x-2 left-6 absolute top-10 '
    : '';

  const headerClasses = open ? '' : 'hidden';
  const controlClasses = open ? 'w-14' : '';
  const buttonClasses = open ? 'bg-transparent absolute top-32 right-8 p-0' : '';
  const callUsClasses = open ? 'absolute right-9 bottom-28 p-0 mr-0' : '';

  return (
    <div className={`bg-primary ${open ? 'h-96' : 'h-16'} flex fixed bottom-0 z-30 duration-300 w-screen lg:hidden`}>
      <img
        src={Control}
        className={`absolute -top-2 left-1 bg-primary cursor-pointer rounded-full border-2 border-primary w-6 ${open && 'rotate-180'}`}
        onClick={handleLogoClick}
      />

      <div className={`flex w-full m-auto items-center justify-around ${open && 'flex-col w-28'}`}>
        <div className={logoContainerClasses}>
          <img
            src={logoSrc}
            className={`border-2 border-white rounded-full ${controlClasses}`}
            onClick={handleLogoClick}
          />
          <h2 className={`text-white font-medium text-xl duration-300 ${headerClasses}`}>SOUTHSIDE <br /> ENDODONTICS</h2>
        </div>
        <a href="https://securesite1246.tdo4endo.com/RefDocsLogin.aspx" target='_blank'>
          <button className={`text-white p-2 px-2 border rounded-md bg-green-400 ${buttonClasses}`}>Refer Now</button>
        </a>
        <a target='_blank' href="tel:+18173869007">
          <span className={`text-white flex items-center font-semibold ${callUsClasses}`}>
            <img className='mr-2' src={CallUs} />Call Us
          </span>
        </a>
      </div>

      <ul className='pt-12 absolute left-4 top-16 flex flex-col text-left items-start ml-0 mr-2'>
        {MenuSiderItems.map((menu, index) => (
          <li key={index} className={`text-white text-lg flex gap-y-2 cursor-pointer p-2 rounded-md`}>
            <span className={`${!open && 'hidden'} duration-200`}>{menu.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar





















