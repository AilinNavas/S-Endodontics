import React, { useRef } from 'react'
import scroll from '/src/assets/icons/scroll.svg'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'


export const Scroll = ({ id , text}) => {

  const scrollDown = useRef();
  const colors = ['#abb1b7', '#747e88', '#454b51', '#fdfefe'];

  useGSAP(() => {
    // gsap code here...
    gsap.to("#scroll-text", {
      duration: 1, // Duración de la animación en segundos
      color: () => colors[Math.floor(Math.random() * colors.length)], // Selección de un color aleatorio de la lista
      repeat: -1, // Repetir infinitamente
      yoyo: true, // Alternar entre el color actual y el nuevo color
      ease: "none" // Sin efecto de suavizado
    });
   gsap.to("#arrow", { y: '+=10', opacity: 0.7, yoyo: true, color: () => colors[Math.floor(Math.random() * colors.length)], repeat: -1, duration: 1, ease: "power1.inOut" }); // <-- automatically reverted

  }, { scope: scrollDown });
  return (

    <div ref={scrollDown} className={`w-[90vw] mx-auto flex flex-col items-center justify-center mt-[20px] lg:w-[80vw] lg:items-end`}>
      <a href={`#${id}`} id='arrow' className='flex flex-col items-center justify-center'>
        <p id='scroll-text' className='text-[#454b51] text-xs'>{text}</p>
        <img src={scroll} alt="" className='-mt-2 w-8 md:mt-0 lg:w-10' />
      </a>
    </div>

  )
}
