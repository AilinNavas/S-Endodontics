import React, { useLayoutEffect, useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const AnimatedText = ( {title, description }) => {
  const component = useRef();
  const text = useRef();
  const txtdiv = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let words = text.current.textContent.split(/\s+/);
      text.current.innerHTML = words
        .map((word) => `<span>${word}</span>`)
        .join(" ");
      let spans = text.current.querySelectorAll("span");
      gsap.set(spans, { autoAlpha: 0 });
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: text.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
      tl.to(spans, { autoAlpha: 1, stagger: 0.2 });
    }, component);
    return () => ctx.revert();
  }, []);
  return (
    <div ref={component} className="lg:w-1/2">
      <div ref={txtdiv} className="space-y-5 lg:mx-6">
        <h1 ref={text} className="text-7xl text-primary font-semibold py-6">
        {title}
        </h1>
        <p ref={text} className="text-3xl text-grey-300 ">
        {description}
        </p>
      </div>
    </div>
  );
};

export default AnimatedText;