import React from 'react';


export const AnimatedButton = ({ text, color, textColor, backgroundColor, icon }) => {
  return (
     <button className={`cursor-pointer mx-2 font-semibold relative z-100 overflow-hidden border border-${backgroundColor} group px-8 py-2`}>
       <span className={`relative z-10 text-${color} w-80 h-48 text-center group-hover:text-white text-xl duration-500`}>
       <img src={icon} alt="" className='inline-block mr-2' />
       {text}
       </span>
       <span className={`absolute w-full h-full bg-${backgroundColor} -left-48 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500`}></span>
       <span className={`absolute w-full h-full bg-${backgroundColor} -right-48 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500`}></span>
     </button>
 

  );
}



