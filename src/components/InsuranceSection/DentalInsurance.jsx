import InsuranceList from './InsuranceList';
import { useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";


const text1 = "We are in-network with most traditional PPO dental insurance plans, and select DMO, HMO and discount plans. We also accept all insurance plans that provide out-of-network benefits.We are in network with the following insurance providers:"

const text2 = "If we are not in-network with your plan, the percentage that insurance pays for out-of-network treatment is oftentimes the same as for in-network, so don't hesitate to schedule with us, even if we are not in-network with your insurance. We will do everything possible to maximize your benefits."


const DentalInsurance = () => {

  const contenedor = useRef();

  useGSAP(() => {
    gsap.set("#dental-insurance", {
      backgroundColor: 'white'
    });
    // gsap code here...
    gsap.to("#dental-insurance", {
      // backgroundColor: '#afcadb',
      duration: 1.5,
      delay: 5
    });
    gsap.set("#info", {
      opacity: 0,
    });
    gsap.to('#info', {
      y: 10,
      autoAlpha: 1,
      // rotationY: 360,
      stagger: 13,
      duration:2.5,
      delay:3,
    
    
    })
    // <-- automatically reverted
  }, { scope: contenedor })

  return (

    <div ref={contenedor} className='flex flex-col items-start md:pt-20' >
      <div id='dental-insurance' className='h-screen m-auto overflow-hidden pt-8 px-10 md:pl-24 mt-6'>
        <p id='info' className='text-primary px-6 bg-transparent text-xl m-auto md:text-3xl lg:text-5xl lg:px-10' dangerouslySetInnerHTML={{ __html: text1 }} />

        <InsuranceList />
        <p id='info' className='text-primary bg-transparent px-6 text-xl  md:text-2xl lg:text-5xl lg:px-10 md:py-10' dangerouslySetInnerHTML={{ __html: text2 }} />


      </div>
    </div>

  );
};


export default DentalInsurance