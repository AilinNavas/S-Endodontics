import React from "react";
import { TypewriterText } from "./TypewriterText";
import { AnimatedButton } from "./AnimatedButton";
import torito from "/src/assets/torito2.svg";
import appointment from "/src/assets/icons/appointment.svg"


export const Hero2 = () => {

  return (
    <div
      className=" w-[100vw] h-[100vh] flex flex-col place-items-center"
    >
      <div id="bg_color" className="h-full w-full absolute -z-10"></div>

      <div className="max-w-[90vw] my-20 text-center flex flex-col justify-center lg:max-w-[800px] lg:my-20">
        <p
          id="info"
          className="text-transform: capitalize text-2xl font-roboto font-bold text-gray p-2 md:text-3xl "
        >
          Neal Horn, DDS, MS
        </p>

        <h1
          id="title"
          className="text-5xl font-black font-zen p-4 text-primary lg:text-8xl"
        >
          ENDODONTICS FORT WORTH
        </h1>

        <div className="lg:max-w-[100vw] mt-[-10vh] lg:text-center lg:mt-[-18vh]">
          <img src={torito} alt="" className="w-[100%]" />
        </div>
        <TypewriterText />

        <div className="hidden lg:flex lg:space-x-4  lg:items-center lg:text-center lg:mx-auto">
          <AnimatedButton
            text="Refer Now"
            textColor='white'
            color="primary"
            backgroundColor="primary"
          />
          <AnimatedButton
            text="Schedule Appointment"
            color="secondary"
            textColor= "celeste"
            backgroundColor="secondary"
            icon={appointment}
          />
        </div>
      </div>
    </div>
  );
}

