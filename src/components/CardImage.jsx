import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

function ImageCarousel({ src, alt }) {
  return (
    <div className='h-full w-[400px] m-2 flex shrink-0 cursor-pointer'>
      <div className='rounded-3xl overflow-hidden mb-4 relative h-[350px]'>
        <img src={src} alt={alt} />
      </div>
    </div>
  );
}

function CardImage() {
  const originalImages = [
    { src: 'src/assets/slider/1.png', alt: 'Testimonial' },
    { src: 'src/assets/slider/2.png', alt: 'Testimonial' },
    { src: 'src/assets/slider/3.png', alt: 'Testimonial' },
    { src: 'src/assets/slider/4.png', alt: 'Testimonial' },
  ];

  const imageTestimonial = [...originalImages, ...originalImages,...originalImages, ...originalImages];

  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;

    if (slider) {
     

  
      // Configuración de la animación infinita
      gsap.to(slider, {
        x: -slider.offsetWidth * originalImages.length, // Ajusta la duración de la animación al número original de imágenes
        duration: originalImages.length * 20,
        ease: 'power1.inOut',
        repeat: -1,
      });

    }
  }, [imageTestimonial]);

  return (
    <div className='h-screen overflow-hidden py-20'>
      <div className='container my-5'>
        <div className='overflow-hidden w-full'>
          <div
            ref={sliderRef}
            className='flex whitespace-nowrap'
            style={{ display: 'inline-flex' }}
          >
            {imageTestimonial.map((image, index) => (
              <ImageCarousel key={index} {...image} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardImage;


// const imageTestimonial = [
//   { src: 'src/assets/slider/1.png', alt: 'Testimonial' },
//   { src: 'src/assets/slider/2.png', alt: 'Testimonial' },
//   { src: 'src/assets/slider/3.png', alt: 'Testimonial' },
//   { src: 'src/assets/slider/4.png', alt: 'Testimonial' },
//   { src: 'src/assets/slider/1.png', alt: 'Testimonial' },
//   { src: 'src/assets/slider/2.png', alt: 'Testimonial' },
//   { src: 'src/assets/slider/3.png', alt: 'Testimonial' },
//   { src: 'src/assets/slider/4.png', alt: 'Testimonial' },
// ]


// return (

//   <div className='dental h-screen bg-secondary overflow-hidden py-20 flex flex-col'>
//   <div className='container my-5'>
//     <div className='overflow-hidden w-full'>
//       <div className='flex animate-scroll'>
//         {imageTestimonial.map((image, index) => (
//           <ImageCarousel key={index} {...image} />
//         ))}
//       </div>
//     </div>
//   </div>
// </div>

// )
// }



// export default CardImage