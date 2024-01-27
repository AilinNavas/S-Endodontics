import React from 'react';

function CardImage() {
  const originalImages = [
    { src: '/src/assets/slider/1.png', alt: 'Testimonial' },
    { src: '/src/assets/slider/2.png', alt: 'Testimonial' },
    { src: '/src/assets/slider/3.png', alt: 'Testimonial' },
    { src: '/src/assets/slider/4.png', alt: 'Testimonial' },
  ];


  return (
    <div className='h-screen overflow-hidden py-20'>

      {/* Aqui comienza el contenedor del carrousel  */}

      <div className='wrappe w-450 h-50 relative m-auto bg-gray overflow-hidden'>
     
        <div className='boxes relative left-[-50px]'>
          <div className='box w-50 h-50 absolute bg-red-500 text-white text-2xl leading-50 text-center   '>1</div>
          <div className='box w-50 h-50 absolute bg-red-500 text-white text-2xl leading-50 text-center '>2</div>
          <div className='box w-50 h-50 absolute bg-red-500 text-white text-2xl leading-50 text-center  '>3</div>
          <div className='box w-50 h-50 absolute bg-red-500 text-white text-2xl leading-50 text-center  '>4</div>
          <div className='box w-50 h-50 absolute bg-red-500 text-white text-2xl leading-50 text-center  '>5</div>
          <div className='box w-50 h-50 absolute bg-red-500 text-white text-2xl leading-50 text-center  '>6</div>
          <div className='box w-50 h-50 absolute bg-red-500 text-white text-2xl leading-50 text-center  '>7</div>
          <div className='box w-50 h-50 absolute bg-red-500 text-white text-2xl leading-50 text-center '>8</div>
          <div className='box w-50 h-50 absolute bg-red-500 text-white text-2xl leading-50 text-center '>9</div>
          <div className='box w-50 h-50 absolute bg-red-500 text-white text-2xl leading-50 text-center '>10</div>
        </div>

        <div class="absolute after:border-solid after:border-white after:w-448 after:h-48"></div>
      </div>


    </div>
  );
}

export default CardImage;


//  const imageTestimonial = [
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