import React from 'react'

export const BussinesInformation = () => {
    return (
        <div className='h-[90%] border-2 border-lime-400'>
            <h4 className='font-bold text-gray-dark h-1/5 text-xl font-zen underline underline-offset-4 mb-2 lg:mb-0'>Bussines information</h4>
            <div className='flex flex-col h-4/5'>
                <div className='flex mb-2'>
                    <p className='font-bold font-zen text-lg mr-1'>Address: </p>
                    <p className='font-zen text-lg'> 1307 8th Ave #303,<br/> Fort Worth, TX</p>
                </div>
                <div className='flex mb-2'>
                    <p className='font-bold text-lg font-zen mr-1'>Hours:</p>
                    {/* <div className='grid grid-cols-2'> */}
                    <div className='flex space-x-10 lg:space-x-20'>
                        <ul className='font-zen ml-2 text-lg'>
                            <li>Monday</li>
                            <li>Tuesday</li>
                            <li>Wednesday</li>
                            <li>Thursday</li>
                            <li>Friday</li>
                            <li>Saturday</li>
                            <li>Sunday</li>
                        </ul>
                        <ul className='font-zen ml-4 text-lg text-right'>
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
                <div className='flex mb-2'>
                    <p className='font-bold text-lg font-zen mr-1'>Phone:</p>
                    <p className='text-lg font-zen'> +1 817-386-9007</p>
                </div>
            </div>
        </div>
    )
}
