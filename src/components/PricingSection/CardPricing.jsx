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
    // background: isHovered
    //   ? "conic-gradient(#78CE88 20deg, transparent 120deg)"
    //   : "conic-gradient(#78CE88 0deg, transparent 0deg)",
    // width: "900px",
    // height: "900px",
    // top: "-25%",
    // left: "-25%",
    // position: "absolute",
    // animation: isHovered ? "fullSpin 3s linear infinite" : "none",
    background: isHovered
      ? "conic-gradient(#78CE88 20deg, transparent 120deg)"
      : "conic-gradient(#78CE88 0deg, transparent 0deg)", // Ajustar los ángulos según sea necesario
    width: "900px",
    height: "900px",
    top: "-50%",
    left: "-50%",
    position: "absolute",
  };

  return (
    <div
      className="box relative w-[300px] h-[350px] bg-white overflow-hidden shadow-xl md:w-[60vw] md:h-[40vh] lg:w-[35vw] lg:h-[60vh]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        className="conic-gradient-box"
        style={conicGradientStyle}></div>
      <div className="text-white w-[98%] h-[98%] bg-white absolute top-[1%] left-[1%] flex justify-center items-center font-medium">
        <div className="flex flex-col items-center content-center mx- md:p-4">
          <h3 className="font-bold text-3xl font-zen mt-4 text-[#0b4088] md:text-5xl lg:text-6xl md:p-2 text-center">
            {title}
          </h3>
          <img src={icon} alt="" className="w-10 h-10 mt-4" />

          <p className="text-gray-dark text-xl font-roboto text-center font-normal p-4 md:text-3xl lg:text-4xl ">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
