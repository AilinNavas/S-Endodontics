import InsuranceList from './InsuranceList';
import React from "react";
import { TextInsurance } from './TextInsurance';

const text1 = "We welcome a wide range of dental insurance plans, whether in-network or out-of-network."
const text2 = "Frequently, out-of-network treatments receive similar coverage percentages as in-network ones.Our commitment is to optimize your benefits, and we'll provide a detailed breakdown before proceeding with any treatment."


const DentalInsurance = () => {

  return (

    <div className='h-auto flex flex-col items-start' >
      <TextInsurance text={text1} />
      <InsuranceList />
      <TextInsurance text={text2} />
    </div>

  );
};


export default DentalInsurance