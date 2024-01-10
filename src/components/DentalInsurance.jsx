import React from 'react';
import InsuranceList from './InsuranceList'
import { motion as m } from 'framer-motion'


const DentalInsurance = () => {

    return (
        <m.div className='bg-primary h-screen'>
          <div className='max-w-[1200px] text-center m-auto'>
            <h2 className='text-4xl text-white text-center py-5 md:text-5xl lg:text-6xl lg:mb-10 pt-14'>Dental Insurance</h2>
            <p className='text-xl text-white text-center mb-4 px-8 md:text-2xl lg:text-4xl lg:px-20 '>We accept most dental insurance, including out-of-network, so don't hesitate to schedule with us.</p>
            <p className='text-xl text-white text-center mb-4 px-8 md:text-2xl lg:text-4xl lg:px-20 '>Insurance often pays the same for out-of-network treatment as in-network.</p>
            <p className='text-xl text-white text-center mb-10 px-8 md:text-2xl lg:text-4xl lg:px-20 lg:pb-6'> We are in network with the following insurance providers:</p>
            <InsuranceList />
            <p className='pt-16 text-xl text-white text-center mb-10 px-8 md:text-2xl lg:text-4xl lg:px-20 lg:pt-20'>We will do everything possible to maximize your benefits and we can give you a breakdown of those benefits before we do treatment.</p>
          </div>
        </m.div>
      );
    };


export default DentalInsurance