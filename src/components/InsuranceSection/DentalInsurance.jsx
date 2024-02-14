import InsuranceList from './InsuranceList';
import React from "react";

// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { TextInsurance } from './TextInsurance';

const text1 = "We welcome a wide range of dental insurance plans, whether in-network or out-of-network."
const text2= "Frequently, out-of-network treatments receive similar coverage percentages as in-network ones.Our commitment is to optimize your benefits, and we'll provide a detailed breakdown before proceeding with any treatment."



// gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
const DentalInsurance = () => {


  // useLayoutEffect(() => {
  //   let ctx = gsap.context(() => {
  //     let words = info.current.textContent.split(/\s+/);
  //     info.current.innerHTML = words
  //       .map((word) => `<span>${word}</span>`)
  //       .join(" ");
  //     let spans = info.current.querySelectorAll("span");
  //     gsap.set(spans, { autoAlpha: 0 });
  //     let tl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: container.current,
  //         start: "top bottom",
  //         end: "bottom top",
  //         scrub: true,
  //          markers: true,
  //       },
  //     });
  //     tl.to(spans, { autoAlpha: 1, stagger: 0.1 });
  //   }, container);
  //   return () => ctx.revert();
  // }, []);

  return (

    <div className='h-screen flex flex-col items-start' >
      <TextInsurance text={text1}/>
      <InsuranceList />
      <TextInsurance text={text2} />

    </div>


  );
};


export default DentalInsurance