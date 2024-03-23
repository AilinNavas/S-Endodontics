import React from 'react';


export const AnimatedButton = ({ text,link, backgroundColor, icon }) => {
  return (
    <button className={`cursor-pointer mx-2 font-semibold relative z-100 overflow-hidden border border-primary group px-8 py-2 hover:border-white`}>
      <a href={link} target='_blank'>
      <span className={`relative z-10 text-primary w-80 h-48 text-center group-hover:text-white text-xl duration-500`}>
        {text}
        <img src={icon} alt="" className='ml-2 inline-block' />
      </span>
      <span className={`absolute w-full h-full bg-${backgroundColor} -left-52 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500`}></span>
      <span className={`absolute w-full h-full bg-${backgroundColor} -right-52 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500`}></span>
      </a>
    </button>


  );
}



