import React from "react";
import '../../App.css'
// import gsap from 'gsap';
// import { useGSAP } from "@gsap/react";

function Background() {
  // const container5 = useRef();

  // useGSAP(() => {
  //   // gsap code here...
  //   gsap.to(".box",  { 
  //   scale: 1.2, 
  //   top: Math.random()* 6,
  //   translateY:  Math.random()*2,
  //   translateZ: Math.random()*4,
  //   yoyo: true, 
  //   repeat: -1, 
  //   ease: "power1.inOut",
  //   stagger: {
  //     amount: 1.5, 
  //     ease: 'ease',
  //   } }); // <-- automatically reverted

  // }, { scope: container5 }); // <-- scope is for selector text (optional)


  return (
    <div className="absolute inline-flex  opacity-50">

      <div className="box bg-secondary w-[35vw] h-[35vw] rounded-full blur-xl absolute left-[35vw] animate-[pulse_4s_ease-in-out_infinite]"></div>



      <div className="box bg-[#9bc2f7] w-[35vw] h-[35vw] rounded-md blur-xl absolute right-[75vw] animate-[pulse_4s_ease-in-out_infinite]"></div>



    </div>



  )
}

export default Background