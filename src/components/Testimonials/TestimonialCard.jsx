import React from 'react';
import star from '/src/assets/icons/stars.svg';
import google from '/src/assets/icons/google.svg'

export const TestimonialCard = ({ name, testimonial, initials, bgColor }) => {
    return (
        <div className='w-80 h-96 rounded-lg border-inherit font-sans shadow-lg border-gray border-1 bg-white lg:w-[370px] lg:h-[440px]'>
            <div className='rounded-t-md shadow-md shadow-top-left shadow-top-right w-full h-20 flex justify-start pl-5 items-center text-3xl '>
                <span className={`${bgColor} w-12 h-12 flex justify-center items-center text-white text-3xl rounded-full`}>{initials}</span>
                <h4 className='text-tartiary ml-1'>{name}</h4>
            </div>
            <p className='m-5 text-gray-dark'>{testimonial}</p>
                <p className='flex justify-start items-end m-5'>
                    <img src={google} className='mx-2' alt=""/>
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                </p>

        </div>
    )
};
