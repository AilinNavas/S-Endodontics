import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";


import img1 from '/src/assets/insurances/1.png'
import img2 from '/src/assets/insurances/2.png'
import img3 from '/src/assets/insurances/3.png'
import img4 from '/src/assets/insurances/4.png'
import img5 from '/src/assets/insurances/5.png'
import img6 from '/src/assets/insurances/6.png'
import img7 from '/src/assets/insurances/7.png'
import img8 from '/src/assets/insurances/8.png'
import img9 from '/src/assets/insurances/9.png'
import img10 from '/src/assets/insurances/10.png'
import img11 from '/src/assets/insurances/11.png'
import img12 from '/src/assets/insurances/12.png'
import img13 from '/src/assets/insurances/13.png'
import img14 from '/src/assets/insurances/14.png'



const InsuranceList = () => {

  const container = useRef();

  useGSAP(() => {
    gsap.set("#logos-insurances", { opacity:0,transformPerspective: 500
      // , rotation: 120,
      // y: 50
     });
    // gsap code here...
    gsap.to("#logos-insurances", {
      translateX: '-5px',
      scale:1.5,
      transformOrigin: "center 20%",
      duration: 1.5,
      stagger: 0.5,
      yoyo: true,
      boxShadow: "0px 0px 10px 10px rgb(223, 230, 230)",
      borderRadius: "50% 50%",
      border: "3px solid rgb(153, 255, 255)",
      duration: 2,
      rotationY: 360,
      x: 10,
      y: 0,
      z: -300, 
      transformOrigin: "50px 20px -100px",
      autoAlpha: 1,
      delay:5,
     
    }); // <-- automatically reverted
  }, { scope: container })
 

  const InsuranceItem = ({ src, alt }) => (

    <div ><img id='logos-insurances' src={src} alt={alt} className='lg:w-36 lg:h-36 hover:scale-200' /></div>
  );


  const insuranceItems = [
    { src: img1, alt: 'PPOAmeritas Insurance' },
    { src: img2, alt: 'Aetna' },
    { src: img3, alt: 'Cigna PPO' },
    { src: img4, alt: 'Careington' },
    { src: img5, alt: 'United Healthcare' },
    { src: img6, alt: 'Guardian PPO' },
    { src: img7, alt: 'GEHA' },
    { src: img8, alt: 'Care/UNUMBCBS' },
    { src: img9, alt: 'Humana PPO' },
    { src: img10, alt: 'Delta Dental' },
    { src: img11, alt: 'Delta Care' },
    { src: img12, alt: 'Metlife DHMO' },
    { src: img13, alt: 'United Healthcare PPO' },
    { src: img14, alt: 'PPOAlways' },

  ];

  return (
    <div ref={container} className='sm:grid gap-2 place-items-center py-10 px-8 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7'>
      {insuranceItems.map((item, index) => (
        <InsuranceItem key={index} src={item.src} alt={item.alt} />
      ))}
    </div>
  );
};

export default InsuranceList;
