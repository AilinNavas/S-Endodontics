import React, { useRef } from "react";
import Typewriter from "typewriter-effect";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const TypewriterText = () => {
  const typeContainer = useRef();

  useGSAP(() => {
    gsap.fromTo('#maquina',
      { opacity: 0 },
      { opacity: 1, delay: 3, duration: 2 })


  }, { scope: typeContainer });
  return (
    <div ref={typeContainer} className="lg:-mt-2">
      <div id='maquina' className="text-2xl my-4 font-roboto text-transform:capitalize font-semibold text-secondary md:text-3xl lg:mt-2 lg:mb-10 lg:text-[#e2e4e6]">
        <Typewriter
          options={{
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .pauseFor(3000)
              .typeString("Advanced Methods")
              .callFunction(() => {
                console.log("String typed out!");
              })
              .pauseFor(200)
              .deleteAll()
              .typeString("Prompt Emergency Care ")
              .pauseFor(200)
              .deleteAll()
              .typeString("Flexible Financial Options")
              .deleteAll()
              .typeString("Se habla Español ")
              .pauseFor(1000)

              .callFunction(() => {
                console.log("All strings were deleted");
              })
              .start();
          }}
        />
      </div>
    </div>
  );
};
