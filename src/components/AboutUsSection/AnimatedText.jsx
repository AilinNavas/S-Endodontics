import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const AnimatedText = ({ title, description }) => {
  const component = useRef();
  const text = useRef();
  const txtdiv = useRef();

  useGSAP(() => {
    let ctx = gsap.context(() => {
      let words = text.current.textContent.split(/\s+/);
      text.current.innerHTML = words
        .map((word) => `<span>${word}</span>`)
        .join(" ");
      let spans = text.current.querySelectorAll("span");
      gsap.set(spans, { autoAlpha: 0.5 });
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: text.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,

        },
      });
      tl.to(spans, { autoAlpha: 1, stagger: 0.2, duration: 1 });
    }, component);
    return () => ctx.revert();
  });

  return (
    <div ref={component} className="lg:w-1/2">
      <div ref={txtdiv} className="space-y-5 lg:mx-6">
        <h3 ref={text} className="text-5xl text-[#0b4088] font-semibold font-zen py-6 md:text-6xl lg:text-7xl">
          {title}
        </h3>
        <p ref={text} className="text-xl text-gray-dark font-normal font-roboto md:text-2xl">
          {description}
        </p>
      </div>
    </div>
  );
};

export default AnimatedText;