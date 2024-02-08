import InsuranceList from './InsuranceList';
import React, { useLayoutEffect, useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";



const text1 = "We are in-network with most traditional PPO dental insurance plans, and select DMO, HMO and discount plans. We also accept all insurance plans that provide out-of-network benefits.We are in network with the following insurance providers:"

const text2 = "If we are not in-network with your plan, the percentage that insurance pays for out-of-network treatment is oftentimes the same as for in-network, so don't hesitate to schedule with us, even if we are not in-network with your insurance. We will do everything possible to maximize your benefits."

gsap.registerPlugin(ScrollTrigger);
const DentalInsurance = () => {


  const container = useRef();
  const info= useRef();
  

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let words = info.current.textContent.split(/\s+/);
      info.current.innerHTML = words
        .map((word) => `<span>${word}</span>`)
        .join(" ");
      let spans = info.current.querySelectorAll("span");
      gsap.set(spans, { autoAlpha: 0 });
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: info.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
      tl.to(spans, { autoAlpha: 1, stagger: 0.2 });
    }, container);
    return () => ctx.revert();
  }, []);

  return (

    <div ref={container} className='flex flex-col items-start md:pt-20' >
      <div className='h-screen m-auto overflow-hidden pt-8 px-10 md:pl-24 mt-6'>
        <p ref={info} className='text-primary px-6 bg-transparent text-xl m-auto md:text-3xl lg:text-5xl lg:px-10' dangerouslySetInnerHTML={{ __html: text1 }} />

        <InsuranceList />
        <p ref={info} className='text-primary bg-transparent px-6 text-xl  md:text-2xl lg:text-5xl lg:px-10 md:py-10' dangerouslySetInnerHTML={{ __html: text2 }} />


      </div>
    </div>

  );
};


export default DentalInsurance