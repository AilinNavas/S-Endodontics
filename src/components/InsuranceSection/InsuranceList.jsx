import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";



import img1 from '/src/assets/insurances/1.jpeg'
import img2 from '/src/assets/insurances/2.jpeg'
import img3 from '/src/assets/insurances/3.jpeg'
import img4 from '/src/assets/insurances/4.jpeg'
import img5 from '/src/assets/insurances/5.jpeg'
import img6 from '/src/assets/insurances/6.jpeg'
import img7 from '/src/assets/insurances/7.jpeg'
import img8 from '/src/assets/insurances/8.jpeg'
import img9 from '/src/assets/insurances/9.jpeg'
import img10 from '/src/assets/insurances/10.jpeg'
import img11 from '/src/assets/insurances/11.jpeg'
import img12 from '/src/assets/insurances/12.jpeg'
import img13 from '/src/assets/insurances/13.jpeg'
import img14 from '/src/assets/insurances/14.jpeg'



const InsuranceList = () => {

  const container = useRef();


  useGSAP(() => {
    gsap.set("#logos-insurances", {
     transformPerspective: 500

    });
    // gsap code here...
    gsap.fromTo("#logos-insurances", {
      opacity: 0,
      scale: 0.5
    }, {
      translateX: '-5px',
      scale: 1.5,
      stagger: {
        each: 0.5,
        from: "start"
      },
      boxShadow: "0px 0px 3px 5px rgb(223, 230, 230)",
      borderRadius: "50% 50%",
      border: "3px solid rgb(255, 255, 255)",
      duration: 2,
      rotationY: 360,
      ease: "circ.out",
      x: 10,
      y: 0,
      z: -300,
      transformOrigin: "50px 20px -100px",
      autoAlpha: 1,
      delay: 3,
      repeat: -1

    }); // <-- automatically reverted
  }, { scope: container })


  const InsuranceItem = ({ src, alt }) => (

    <div><img id='logos-insurances' src={src} alt={alt} className='w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32' /></div>
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

    <div ref={container} className='h-[70vh] lg:h-[50vh] m-auto my-0 grid gap-3 grid-cols-3 md:grid-cols-4 md:gap-4 lg:grid-cols-7 lg:gap-4 lg:px-[5vw]'>
      {insuranceItems.map((item, index) => (
        <InsuranceItem key={index} src={item.src} alt={item.alt} />
      ))}
    </div>
  );
};

export default InsuranceList;
