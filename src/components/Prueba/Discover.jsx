import React, { useLayoutEffect, useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const places = [
  {
    image: "/src/assets/slider/1.png",

  },
  {
    image: "/src/assets/slider/2.png",
   
  },
  {
    image:"/src/assets/slider/3.png",
    
  },
  {
    image:"/src/assets/slider/4.png",
  
  },
  {
    image:"/src/assets/slider/1.png",
  
  },
  {
    image:"/src/assets/slider/2.png",
  
  },
  {
    image:"/src/assets/slider/3.png",
    
  },
  {
    image:"/src/assets/slider/4.png",
    
  },
];
const Discover = () => {
  const component = useRef(null);
  const slider = useRef();
  const padre= useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let places = gsap.utils.toArray(".place");
      gsap.to(places, {
        xPercent: -100 * (places.length - 1),
        ease: "none",
        duration: 5,
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 1,
          snap: 1 / (places.length - 1),
          start: "center center",
          end: () => "+=" + slider.current.offsetWidth,
        },
      });
      gsap.fromTo(padre.current,
        {backgroundColor:'#cfe3fc'},
        {
       backgroundColor: '#f2ea55',
       duration: 10,
       ease: 'back',
        scrollTrigger: {
          trigger: padre.current,
          start: "30% bottom",
          end: "20% bottom",
          scrub: true,
          endTrigger: padre.current,
          
        },
      });
    }, padre );
    return () => ctx.revert();
  });
  return (
    <section ref={padre}>
    <div className="py-[200px]">
      <div className=" lg:ml-24 space-y-5 text-primary">
      
      </div>
      <div ref={component}>
        <div
          ref={slider}
          className="p-4 overflow-x-scroll whitespace-nowrap space-x-10"
        >
          {places &&
            places.map((place) => {
              return (
                <div className="place ml-24 p-2 flex-nowrap w-[400px] h-[350px] shadow-md shadow-gray-100 inline-block relative">
                  <img
                    src={place.image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                
                </div>
              );
            })}
        </div>
      </div>
    </div>
    </section>
  );
};

export default Discover;