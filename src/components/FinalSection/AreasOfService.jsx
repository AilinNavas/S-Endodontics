import React from 'react'

export const AreasOfService = () => {
  return (
    <div className='max-h-full hidden lg:block'>
    <h4 className='font-bold text-gray-dark h-1/5 text-xl font-roboto text-center'>Areas of Service</h4>
    <div className='grid grid-cols-2 h-4/5'>
        {/* <ul className='grid grid-cols-1 gap-5 text-lg h-[80%] font-roboto'> */}
        <ul className='flex flex-col text-lg h-[80%] font-roboto items-end'>
            <li className='my-1'>Benbrook</li>
            <li className='my-1'>Saginaw</li>
            <li className='my-1'>Mansfield</li>
            <li className='my-1'>Burleson</li>
            <li className='my-1'>Crowley</li>
        </ul>

        <ul className='flex flex-col text-lg h-[80%] font-roboto ml-6 items-start'>
            <li className='my-1'>Lake Worth</li>
            <li className='my-1'>Weatherford</li>
            <li className='my-1'>Aledo</li>
            <li className='my-1'>Arlington</li>
            <li className='my-1'>Cleburne</li>
        </ul>
    </div>
</div>
  )
}
