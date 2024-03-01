import React from 'react'

export const Button = ( {src, text1, text2, size} ) => {
    return (
        <div className={size}>
            <a href={src} target='_blank'>
                <button
                    class="overflow-hidden w-auto p-2 h-12 font-roboto shadow-md bg-[#c6cbcf] text-primary border-none rounded-md text-xl font-bold cursor-pointer relative left-[30vw] top-[10vh] z-10 group"
                >
                    {text1}
                    <span
                        class="absolute w-full h-32 -top-8 -left-2 bg-[#9bc2f7] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-bottom"
                    ></span>
                    <span
                        class="absolute w-full h-32 -top-8 -left-2 bg-[#3c89f0] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-bottom"
                    ></span>
                    <span
                        class="absolute w-full h-32 -top-8 -left-2 bg-[#0e57b8] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-bottom"
                    ></span>
                    <span
                        class="w-full group-hover:opacity-100 text-white group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10"
                    >{text2}
                    </span>
                </button>

            </a>
        </div>
    )
}
