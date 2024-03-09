import React from 'react'

export const CardPricing = ({ title, description }) => {
    return (
        <div
            className="service-card w-[300px] h-auto shadow-xl cursor-pointer snap-start shrink-0 py-8 px-6 bg-white flex flex-col items-start gap-3 transition-all duration-300 group hover:bg-[#0b4088] lg:w-[40vw] "
        >

            <h3 className="font-bold text-3xl font-zen group-hover:text-[#f9fcff] text-[#0b4088] lg:text-5xl lg:p-2">
                {title}
            </h3>
            <p className="text-gray-400 text-xl font-roboto group-hover:text-[#aab4c4] lg:text-3xl lg:p-8 ">
                {description}
            </p>

        </div>

    )
}
