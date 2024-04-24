import React from 'react';


export const AnimatedButton = ({ text,link, backgroundColor, icon }) => {
  return (
    <button className={`cursor-pointer mx-1 font-semibold relative z-40 overflow-hidden shadow-lg border border-primary group px-6 py-2 hover:border-gray hover:scale-105  transition-all duration-00`}>
      <a href={link} target='_blank'>
      <span className={`relative z-10 text-primary w-80 h-48 text-center group-hover:text-[#c6cbcf] text-xl duration-500`}>
        {text}
        <img src={icon} alt="" className=' inline-block' />
      </span>
      <span className={`absolute w-full h-full bg-${backgroundColor} -left-52 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500`}></span>
      <span className={`absolute w-full h-full bg-${backgroundColor} -right-52 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500`}></span>
      </a>
    </button>


  );
}



