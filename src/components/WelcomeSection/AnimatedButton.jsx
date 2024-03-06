// import React from 'react';

// function AnimatedButton({ text, color, backgroundColor }) {
//     return (
//         <button className={`cursor-pointer font-semibold overflow-hidden relative z-100 border border-${backgroundColor} group px-8 py-2`}>
//             <span className={`relative z-10 text-${color} text-roboto group-hover:text-white text-xl duration-500`}>{text}</span>
//             <span className={`absolute w-full h-full bg-${backgroundColor} -left-48 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500`}></span>
//             <span className={`absolute w-full h-full bg-${backgroundColor} -right-48 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500`}></span>
//         </button>
//     );
// }

// export default AnimatedButton;
import React from 'react';

function AnimatedButton({ text, color, backgroundColor }) {
  return (
    <button className={`cursor-pointer mx-2 font-semibold overflow-hidden relative z-100 border border-${backgroundColor} group px-8 py-2`}>
      <span className={`relative z-10 text-${color} group-hover:text-white text-xl duration-500`}>{text}</span>
      <span className={`absolute w-full h-full bg-${backgroundColor} -left-48 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500`}></span>
      <span className={`absolute w-full h-full bg-${backgroundColor} -right-48 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500`}></span>
    </button>
  );
}

export default AnimatedButton;

