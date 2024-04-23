import React from "react";
import nealHorn from "/src/assets/Neal.jpeg";
import line from "/src/assets/icons/line.svg"

export const WelcomeNeal = () => {
  return (
    <div className="h-[90vh] lg:h-[80vh] w-[90vw] bg-[#0e57b8] mx-auto flex items-center flex-col lg:flex-row">
      <div className="md:h-[50vh] lg:h-[60vh] lg:ml-[5vw] border-2 border-yellow-300">
        <img
          src={nealHorn}
          alt=""
          className="h-full border-2 border-red-500 mx-auto"
        />
      </div>
      <div className="lg:h-[60vh] lg:w-[55vw] border-2 border-green-500 flex flex-col items-center lg:flex-row">
        <div className="bg-white w-[75vw] h-[50vh] md:h-[35vh] flex flex-col justify-center -mt-[4vh] p-6 lg:w-[50vw] md:p-10 lg:-ml-[5vw] lg:mt-0 border-2 ">
          <h4 className="text-3xl md:text-4xl lg:text-5xl font-zen py-2 font-extrabold text-secondary border-2 border-purple-500">
           <img src={line} className="h-10 -mt-10" />
            Neal Horn, DDS, MS
          </h4>
          <p className="text-xl md:text-2xl text-gray font-light font-roboto py-2 border-2 border-blue-500">
            Endodontics - Root Canal Specialist
          </p>
          <p className="text-xl md:text-2xl text-gray text-normal pt-2 font-roboto border-2 border-yellow-300">
            "I know that most people are not excited about getting a root canal,
            so my goal is to make it as comfortable as possible."
          </p>
        </div>
      </div>
    </div>
  );
};