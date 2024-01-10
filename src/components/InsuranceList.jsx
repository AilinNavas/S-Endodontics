import React from 'react';

const InsuranceItem = ({ src, alt }) => (
  <div className=''><img src={src} alt={alt} /></div>
);

const InsuranceList = () => {
  const insuranceItems = [
    { src: 'src/assets/insurances/1.png', alt: 'PPOAmeritas Insurance' },
    { src: 'src/assets/insurances/2.png', alt: 'Aetna' },
    { src: 'src/assets/insurances/3.png', alt: 'Cigna PPO' },
    { src: 'src/assets/insurances/4.png', alt: 'Careington' },
    { src: 'src/assets/insurances/5.png', alt: 'United Healthcare' },
    { src: 'src/assets/insurances/6.png', alt: 'Guardian PPO' },
    { src: 'src/assets/insurances/7.png', alt: 'GEHA' },
    { src: 'src/assets/insurances/8.png', alt: 'Care/UNUMBCBS' },
    { src: 'src/assets/insurances/9.png', alt: 'Humana PPO' },
    { src: 'src/assets/insurances/10.png', alt: 'Delta Dental' },
    { src: 'src/assets/insurances/11.png', alt: 'Delta Care' },
    { src: 'src/assets/insurances/12.png', alt: 'Metlife DHMO' },
    { src: 'src/assets/insurances/13.png', alt: 'United Healthcare PPO' },
    { src: 'src/assets/insurances/14.png', alt: 'PPOAlways' },
    

  ];

  return (
    <div className='sm:grid grid-cols-3 gap-3 place-items-center px-8 md:grid-cols-7 '>
      {insuranceItems.map((item, index) => (
        <InsuranceItem key={index} src={item.src} alt={item.alt} />
      ))}
    </div>
  );
};

export default InsuranceList;