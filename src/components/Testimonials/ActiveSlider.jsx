import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'

import { FreeMode, Pagination } from 'swiper/modules'

const ActiveSlider = () => {

    const imageTestimonial = [
        { index: 1, src: 'src/assets/slider/1.png', alt: 'Testimonial' },
        { index: 2, src: 'src/assets/slider/2.png', alt: 'Testimonial' },
        { index: 3, src: 'src/assets/slider/3.png', alt: 'Testimonial' },
        { index: 4, src: 'src/assets/slider/4.png', alt: 'Testimonial' },
     
     ]

    return (
        <div className='flex item-center justify-center flex-col h-screen bg-white '>
            <Swiper
                breakpoints={{
                    340: {
                        slidesPerView: 2,
                        spaceBetween: 15
                    },
                    700: {
                        slidesPerView: 3,
                        spaceBetween: 15
                    }
                }}
                freeMode= {true}
                pagination= {{
                    clickable: true
                }}
                modules={[FreeMode, Pagination]}
                className='max-w-[90%] lg:max-w-[80%]'
            >
                {imageTestimonial.map((image) =>
                <SwiperSlide key={image.index} >
                <img className='relative shadow-lg rounded-xl px-6 py-8 h-[200px] lg:h-[400px]' src={image.src} alt={image.alt} />
                </SwiperSlide>
                )}

            </Swiper>


        </div>
    )
}

export default ActiveSlider