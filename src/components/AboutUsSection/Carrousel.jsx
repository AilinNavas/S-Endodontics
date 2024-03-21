import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Carrousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const slideVariants = {
    hiddenRight: {
      x: "100%",
      opacity: 0,
    },
    hiddenLeft: {
      x: "-100%",
      opacity: 0,
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.5,
      },
    },
  };
  const slidersVariants = {
    hover: {
      scale: 1.1,
      backgroundColor: "#454b51",
      opacity: 0.8
    },
  };
  const dotsVariants = {
    initial: {
      y: 0,
    },
    animate: {
      y: -5,
      scale: 1.1,
      transition: { type: "spring", stiffness: 1000, damping: "10" },
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.2 },
    },
  };

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setDirection("left");

    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index) => {
    setDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
  };

  return (
    <div className="carousel">
      {/* <div className="relative rounded-lg h-[300px] max-w-xs m-auto overflow-hidden md:w-[620px] lg:w-xl"> */}
      <div className="relative rounded-lg h-[300px] overflow-hidden md:h-[500px]">
        <AnimatePresence>
          <motion.img
            key={currentIndex}
            src={images[currentIndex].src}
            // className="w-[99%] h-[99%] rounded-lg border-[#c3baee8e] border-2"
            className="rounded-lg border-[#c3baee8e] border-2 max-w-xs h-full md:max-w-[620px] lg:max-w-xl"
            initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
            animate="visible"
            exit="exit"
            variants={slideVariants}
          />
        </AnimatePresence>
        <div className="flex justify-between">
          <motion.div
            variants={slidersVariants}
            whileHover="hover"
            className="left flex justify-center items-center fill-[#fff] mx-[20px] p-2 rounded-xl absolute top-[0] bottom-[0] my-[auto] h-[25px] w-[25px] left-0"
            onClick={handlePrevious}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox="0 96 960 960"
              width="20"
            >
              <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
            </svg>
          </motion.div>
          <motion.div
            variants={slidersVariants}
            whileHover="hover"
            className="right flex justify-center items-center fill-[#fff] mx-[20px] p-2 rounded-xl absolute top-[0] bottom-[0] my-[auto] h-[25px] w-[25px] right-0"
            onClick={handleNext}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox="0 96 960 960"
              width="20"
              className=""
            >
              <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
            </svg>
          </motion.div>
        </div>
      </div>
      <div className="mt-[20px] flex justify-center gap-[20px]">
        {images.map((_, index) => (
          <motion.div
            key={index}
            className={`dot bg-[#333] w-[15px] h-[15px] rounded-lg ${currentIndex === index ? "bg-[#0e57b8]" : ""}`}

            onClick={() => handleDotClick(index)}
            initial="initial"
            animate={currentIndex === index ? "animate" : ""}
            whileHover="hover"
            variants={dotsVariants}
          ></motion.div>
        ))}
      </div>
    </div>
  );
};
