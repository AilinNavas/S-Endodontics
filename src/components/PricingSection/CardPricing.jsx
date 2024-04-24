import React, { useState } from "react";
import '../../index.css'

export const CardPricing = ({ title, description, icon }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const conicGradientStyle = {

    background: isHovered
      ? "conic-gradient(#78CE88 20deg, transparent 120deg)"
      : "conic-gradient(#78CE88 0deg, transparent 0deg)", // Ajustar los ángulos según sea necesario
    width: "950px",
    height: "950px",
    top: "-50%",
    left: "-50%",
    position: "absolute",
  };

  return (
    <div
      className="box relative w-[320px] h-[180px] bg-white overflow-hidden shadow-xl md:w-[40vw] md:h-[40vh] lg:w-[35vw] lg:h-[45vh] "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        className="conic-gradient-box"
        style={conicGradientStyle}></div>
      <div className="text-white w-[98%] h-[98%] bg-white absolute top-[1%] left-[1%] flex justify-center items-center font-medium">
        <div className="flex flex-col items-center content-center md:p-4">
          <h3 className="font-bold flex md:flex-col md:items-center text-2xl font-zen mt-2 lg:mt-4 text-[#0b4088] md:text-3xl lg:text-4xl text-center">
            {title}
            <img src={icon} alt="" className="w-6 h-6 mt-2 ml-2 md:w-8 md:h-8 lg:w-10 lg:h-10 lg:mt-4 md:ml-0" />
          </h3>
          

          <p className="text-gray-dark font-roboto text-center font-normal p-2 lg:p-4 text-lg md:text-2xl lg:text-2xl">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
