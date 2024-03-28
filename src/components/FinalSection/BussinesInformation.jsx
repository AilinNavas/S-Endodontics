import React from 'react'

export const BussinesInformation = () => {
    return (
        <div className='h-[90%]'>
            <h4 className='font-bold text-[#0b4088] h-1/5 text-xl font-roboto underline underline-offset-4 mb-2 lg:mb-0'>Bussines information</h4>
            <div className='flex flex-col h-4/5'>
                <div className='flex mb-2'>
                    <p className='font-bold font-roboto text-lg mr-1 text-[#0b4088]'>Address: </p>
                    <p className='font-roboto text-lg text-gray-dark'> 1307 8th Ave #303,<br/> Fort Worth, TX</p>
                </div>
                <div className='flex mb-2'>
                    <p className='font-bold text-lg font-roboto mr-1 text-[#0b4088]'>Hours:</p>
                    {/* <div className='grid grid-cols-2'> */}
                    <div className='flex space-x-10 lg:space-x-20 text-gray-dark'>
                        <ul className='font-roboto ml-2 text-lg'>
                            <li>Monday</li>
                            <li>Tuesday</li>
                            <li>Wednesday</li>
                            <li>Thursday</li>
                            <li>Friday</li>
                            <li>Saturday</li>
                            <li>Sunday</li>
                        </ul>
                        <ul className='font-roboto ml-4 text-lg text-right text-gray-dark'>
                            <li>8 AM-5 PM</li>
                            <li>8 AM-5 PM</li>
                            <li>8 AM-5 PM</li>
                            <li>8 AM-5 PM</li>
                            <li>Closed</li>
                            <li>Closed</li>
                            <li>Closed</li>
                        </ul>
                    </div>

                </div>
                <div className='flex'>
                    <p className='font-bold text-lg font-roboto mr-1 text-[#0b4088]'>Phone:</p>
                    <p className='text-lg font-roboto text-gray-dark'> +1 817-386-9007</p>
                </div>
            </div>
        </div>
    )
}
