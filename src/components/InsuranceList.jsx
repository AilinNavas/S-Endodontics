import React from 'react';
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



const InsuranceItem = ({ src, alt }) => (

  <div className='logos-insurances'><img src={src} alt={alt} /></div>
);

const InsuranceList = () => {
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
    <div className='sm:grid gap-2 place-items-center py-10 px-8 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7'>
      {insuranceItems.map((item, index) => (
        <InsuranceItem key={index} src={item.src} alt={item.alt} />
      ))}
    </div>
  );
};

export default InsuranceList;


{/* <div>

{
  'Texto'.split('').map(word) => {
    return word === ' '? <div className='word'>&nbsp;</div> : <div className='word'>{word}</div>
  }
}

</div> */}