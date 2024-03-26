import React from 'react'
import qr from '/src/assets/qr.png'

export const CallUsToday = () => {
  return (
    <div className='hidden lg:block'>
                        <h4 className='font-bold text-primary h-1/5 text-xl font-roboto text-center'>Call us today</h4>
                        <div className='grid grid-cols-2 h-4/5'>
                             <div className=' grid grid-cols-1 gap-3 h-[60%]'> 
                        
                                <button
                                    class="bg-lime-500 text-lg text-white text-roboto mx-4 rounded-full transition duration-200 ease-in-out hover:bg-lime-400 focus:outline-none"
                                >
                                    Refer Now
                                </button>
                                <button
                                    class="bg-primary text-lg text-white text-roboto mx-4 rounded-full transition duration-200 ease-in-out hover:bg-[#0b4088] focus:outline-none"
                                >
                                    Refering Doctor
                                </button>
                                <button
                                    class="bg-primary text-lg text-white text-roboto mx-4 rounded-full transition duration-200 ease-in-out hover:bg-[#0b4088] focus:outline-none"
                                >
                                    Patient Login
                                </button>

                            </div>
                            <div className='flex flex-col items-center content-center h-[80%]'>
                                <img src={qr} className='h-[100%] w-full' alt="" />
                            </div>
                        </div>
                    </div>
  )
}
