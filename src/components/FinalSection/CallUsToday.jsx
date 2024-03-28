import React from 'react'
import qr from '/src/assets/qr.png'

export const CallUsToday = () => {
  return (
    <div className='hidden lg:block'>
                        <h4 className='font-bold text-[#0b4088]  h-1/5 text-xl font-roboto text-right mr-2 underline underline-offset-4'>Call us today</h4>
                        <div className='grid grid-cols-2 h-4/5 justify-items-end '>
                             <div className=' grid grid-cols-1 gap-3 h-[60%]'> 
                        
                                <button
                                    class="bg-secondary text-lg text-white text-zen px-3 mx-4 rounded-full transition duration-200 ease-in-out hover:bg-[#3c89f0] hover:scale-105 focus:outline-none"
                                ><a href="https://securesite1246.tdo4endo.com/RefDocsLogin.aspx" target='_blank'>
                                    Refer Now</a>
                                </button>
                                <button
                                    class="bg-primary text-lg text-white text-zen px-3 mx-4 rounded-full transition duration-200 ease-in-out hover:bg-[#0b4088] hover:scale-105 focus:outline-none"
                                ><a href="https://securesite1246.tdo4endo.com/RefDocsLogin.aspx" target='_blank'>
                                    Refering Doctor</a>
                                </button>
                                <button
                                    class="bg-primary text-lg text-white text-zen px-3 mx-4 rounded-full transition duration-200 ease-in-out hover:bg-[#0b4088] hover:scale-105 focus:outline-none"
                                ><a href="https://securesite1246.tdo4endo.com/PatientsLogin.aspx" target='_blank'>
                                    Patient Login</a>
                                </button>

                            </div>
                            <div className='flex flex-col h-[150px] w-[150px]'>
                                <img src={qr} className='h-[100%] w-full' alt="" />
                            </div>
                        </div>
                    </div>
  )
}
