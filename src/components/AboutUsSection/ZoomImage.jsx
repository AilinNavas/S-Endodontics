import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import prev from '/src/assets/icons/arrow-prev.svg'
import next from '/src/assets/icons/arrow-next.svg'

gsap.registerPlugin(ScrollTrigger);

const ZoomImage = ({
  images = [],
  scale = 4.5,
  duration = 1,
  ease = "power2.Out",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [controlsVisible, setControlsVisible] = useState(false);
  const imageRef = useRef();

  useEffect(() => {
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
  }, [currentIndex, scale, ease, duration]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative">
      <img
        ref={imageRef}
        src={images[currentIndex]}
        alt=""
        className="max-w-xs md:max-w-[620px] lg:max-w-xl object-cover shadow-md rounded-xl drop-shadow-2xl"
      />
      <div className={`absolute top-1/2 transform -translate-y-1/2 left-0 ${controlsVisible ? 'block' : 'hidden'}`}>
        <button onClick={prevImage}>
          <img src={prev} alt="Previous" />
        </button>
      </div>
      <div className={`absolute top-1/2 transform -translate-y-1/2 right-0 ${controlsVisible ? 'block' : 'hidden'}`}>
        <button onClick={nextImage}>
          <img src={next} alt="Next" />
        </button>
      </div>
    </div>
  );
};

export default ZoomImage;















// import React, { useRef, useLayoutEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);
// const ZoomImage = ({ src, scale = 4.5, duration = 1, ease = "power2.Out" }) => {
//   const imageRef = useRef();

//   useLayoutEffect(() => {
//     let ctx = gsap.context(() => {
//       gsap.from(imageRef.current, {
//         scale: 1 / scale,
//         opacity: 0,
//         ease: ease,
//         duration: duration,
//         scrollTrigger: {
//           trigger: imageRef.current,
//           scrub: 1,
//           start: "top 80%",
//           end: "bottom 80%",
//         },
//       });
//     }, imageRef);
//     return () => ctx.revert();
//   });
//   return (
//     <img
//       ref={imageRef}
//       src={src}
//       alt=""
//       className="max-w-xs md:max-w-lg lg:max-w-xl object-cover shadow-md rounded-xl drop-shadow-2xl"
//     />
//   );
// };

// export default ZoomImage;