import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import prev from "/src/assets/icons/arrow-prev.svg";
import next from "/src/assets/icons/arrow-next.svg";

gsap.registerPlugin(ScrollTrigger);

const ZoomImage = ({
  images = [],
  scale = 4.5,
  duration = 1,
  ease = "none",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [controlsVisible, setControlsVisible] = useState(false);
  const imageRef = useRef();
  const wrapper2 = useRef();

  useGSAP(
    () => {
      let ctx = gsap.context(() => {
        gsap.from(imageRef.current, {
          scale: 1 / scale,
          opacity: 0,
          ease: ease,
          duration: duration,
          scrollTrigger: {
            trigger: imageRef.current,
            scrub: 1,
            start: "top 80%",
            end: "bottom 80%",
          },
          onComplete: () => {
            setControlsVisible(true); // Mostrar los controles cuando el efecto de zoom haya terminado
          },
        });
      }, imageRef);
      return () => ctx.revert();
    },
    { dependencies: [currentIndex, scale, ease, duration], scope: wrapper2 },
  );

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  return (
    <div ref={wrapper2} className="relative">
      <img
        ref={imageRef}
        src={images[currentIndex].src}
        alt={images[currentIndex].alt}
        className="max-w-xs object-cover shadow-md rounded-xl drop-shadow-2xl md:max-w-[620px] lg:max-w-xl"
      />
      <div
        className={`absolute top-1/2 transform -translate-y-1/2 left-0 ${controlsVisible ? "block" : "hidden"}`}
      >
        <button onClick={prevImage}>
          <img src={prev} alt="Previous" />
        </button>
      </div>
      <div
        className={`absolute top-1/2 transform -translate-y-1/2 right-0 ${controlsVisible ? "block" : "hidden"}`}
      >
        <button onClick={nextImage}>
          <img src={next} alt="Next" />
        </button>
      </div>
    </div>
  );
};

export default ZoomImage;