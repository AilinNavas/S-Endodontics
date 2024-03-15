import React from "react";
import Typewriter from "typewriter-effect";

export const TypewriterText = () => {
  return (
    <div className="lg:-mt-2">
      <div className="text-2xl mt-[5vh] font-roboto text-transform:capitalize font-bold text-secondary mb-[3vh] md:text-3xl lg:mt-0 ">
        <Typewriter
          options={{
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
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
