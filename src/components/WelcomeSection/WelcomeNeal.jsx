import React from "react";
import nealHorn from "/src/assets/Neal.jpeg";
import line from "/src/assets/icons/line.svg";
import '../../App.css'

export const WelcomeNeal = () => {
  return (
    <section className="lg:pl-20 md:mt-10 lg:mt-40">
  
    <div className="pb-4 lg:py-0 md:py-4 bg-[#e2e4e6] w-[90vw] lg:w-[80vw] rounded-2xl bg-trasparent mx-auto flex items-center justify-center flex-col lg:flex-row lg:pl-6 ">
   
   

       <div className="m-6 md:m-0 md:h-[55vh] lg:h-[45vh] z-10 "> 
        <img
          src={nealHorn}
          alt=""
          className="h-full mx-auto rounded-lg"
        />
      </div>
      <div className="mt-6 lg:h-[45vh] lg:w-[55vw] flex flex-col items-center lg:flex-row ">
      
        <div className="bg-white w-[75vw] my-auto h-[45vh] md:h-[35vh] flex flex-col justify-center -mt-[6vh] p-6 lg:w-[50vw] lg:h-[40vh] md:p-10 lg:-ml-4 lg:mt-0 rounded-lg shadow-lg z-0">
          <h4 className="text-3xl md:text-4xl lg:text-5xl font-zen py-2 font-bold text-secondary">
            <img src={line} className="h-10 -mt-10 hover:rotate-180" />
            Neal Horn, DDS, MS
          </h4>
          <p className="text-xl md:text-2xl text-gray font-light font-roboto py-2">
            Endodontics - Root Canal Specialist
          </p>
          <p className="text-xl md:text-2xl lg:text-3xl text-gray text-normal pt-2 font-roboto">
            "I know that most people are not excited about getting a root canal,
            so my goal is to make it as comfortable as possible."
          </p>
        </div>
      </div>
    </div>
    </section>
  );
};