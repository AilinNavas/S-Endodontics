
import React from "react";
import InsuranceList from './InsuranceList';


const text1 = "We accept most dental insurance, including out-of-network, so dont hesitate to schedule with us.Insurance often pays the same for out-of-network treatment as in-network.We are in network with the following insurance providers:"

const text4 = "We will do everything possible to maximize your benefits and we can give you a breakdown of those benefits before we do treatment."

const DentalInsurance = () => {

  return (

    <div className='h-screen m-auto bg-secondary overflow-hidden flex flex-col items-start md:pt-20' >
      <div className='px-10 md:pl-24 mt-6'>
        <p className='info text-primary px-6 bg-white text-xl m-auto md:text-2xl lg:text-4xl lg:px-10 '>
          {text1}
        </p>

        <InsuranceList />
        <p className='text-primary bg-white px-6 text-xl  md:text-2xl lg:text-4xl lg:px-10 md:py-10'>
          {text4}
        </p>

      </div>
    </div>



  );
};


export default DentalInsurance