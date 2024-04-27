import React from "react";
import Slider from "react-slick"; // Componente para el carrusel
import "slick-carousel/slick/slick.css"; // Estilos del carrusel
import "slick-carousel/slick/slick-theme.css"; // Tema del carrusel
import { Link } from "react-router-dom"; // Enlaces para navegación
import blogData from "./blogData.json"; // Archivo JSON con datos del blog

export const BlogCarrousel = () => {
    // Ordena el blogData por fecha (en orden descendente)
    const sortedBlogData = [...blogData].sort(
        (a, b) => new Date(b.date) - new Date(a.date) // Orden descendente por fecha
    );

    // Toma solo los primeros 10 artículos
    const recentArticles = sortedBlogData.slice(0, 10);

    const settings = {
        dots: false, // Mostrar puntos de navegación
        infinite: true, // Desplazamiento infinito
        speed: 1000, // Velocidad de animación
        slidesToShow: 3, // Cuántas tarjetas se muestran por vista
        slidesToScroll: 1, // Cuántas tarjetas se desplazan por movimiento
        autoplay: true, // Desplazamiento automático
        autoplaySpeed: 2000, // Tiempo entre movimientos automáticos
        responsive: [
            {
                breakpoint: 1024, // Ajuste para pantallas medianas
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600, // Ajuste para móviles
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false, // Mantener puntos de navegación
                },
            },
        ],
    };

    return (
        <section className="lg:pl-20 my-[15vh] border-2">
            <div className="w-[90vw] mx-auto lg:w-[75vw] my-28 ">
                <h3 className="text-3xl font-semibold mb-4 text-[#0b4088] font-zen md:text-4xl lg:text-5xl">
                    Latest Blog Posts
                </h3>
                <Slider {...settings}>
                    {recentArticles.map((article) => (
                        <Link to={`/article/${article.id}`} key={article.id}>
                            <div className="border-t-8 h-[370px] md:h-[470px] lg:h-[480px] border-[#0b4088] scale-95 hover:scale-90 transition-all duration-300 rounded-xl shadow-sm shadow-secondary p-4">
                                <h4 className="text-2xl h-[100px] md:h-[150px] md:text-3xl font-roboto text-[#0b4088] p-2">
                                    {article.title}
                                </h4>
                                <p className=" h-[50px] text-sm md:text-lg text-gray font-roboto px-2">
                                    By {article.author} | {article.date}
                                </p>
                                <p className=" mt-2 px-2 h-[150px] md:h-[200px] text-xl md:text-2xl text-wrap text-gray-dark font-roboto">
                                    {article.content.slice(0, 100)}... {/* Texto resumido */}
                                </p>
                                <Link to={`/article/${article.id}`} className="text-secondary font-roboto text-xs">
                                    Read more →
                                </Link>
                            </div>
                        </Link>
                    ))}
                </Slider>
                <div id='readBlog' className='w-[90vw] lg:w-[80vw] flex justify-end my-6'>
                    <Link to='/blog' className=" text-secondary text-xl md:text-2xl lg:text-3xl font-zen font-extrabold hover:text-primary">
                        Go to blog →
                    </Link>
                </div>

            </div>
        </section>
    );
};





// import React from "react";
// import Slider from "react-slick"; // Componente para el carrusel
// import "slick-carousel/slick/slick.css"; // Estilos del carrusel
// import "slick-carousel/slick/slick-theme.css"; // Tema del carrusel
// import { Link } from "react-router-dom";
// import blogData from "./blogData.json"; // Datos del blog



// export const BlogCarrousel = () => {

//     const settings = {
//         dots: false, // Muestra puntos de navegación
//         infinite: true, // Desplazamiento infinito
//         speed: 500, // Velocidad de animación
//         slidesToShow: 3, // Cuántas tarjetas se muestran por vista
//         slidesToScroll: 1, // Cuántas tarjetas se desplazan con cada movimiento
//         autoplay: true, // Habilita desplazamiento automático
//         autoplaySpeed: 3000, // Tiempo entre movimientos automáticos (3 segundos)
//         responsive: [
//             {
//                 breakpoint: 1024, // Ajuste para pantallas más pequeñas
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 1,
//                 },
//             },
//             {
//                 breakpoint: 600, // Ajuste para móviles
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                 },
//             },
//         ],
//     };

//     return (
//         <section className="lg:pl-20 border-2 border-yellow-300">
//             <div className="w-[90vw] mx-auto lg:w-[80vw] mb-28 border-2 border-green-400">
//                 <h3 className="text-3xl font-extrabold mb-4 text-[#0b4088] font-zen md:text-4xl lg:text-5xl border-2 border-gray">
//                     Featured Blog Posts
//                 </h3>
//                 <Slider className="border-2 h-[300px]" {...settings}>
//                     {blogData.map((article) => (
//                         <Link to={`/article/${article.id}`} key={article.id}>
//                             <div className="border-t-8 border-[#0b4088] hover:scale-105 transition-all duration-300 rounded-xl shadow-lg p-4">
//                                 <h4 className="text-2xl md:text-3xl font-roboto text-[#0b4088]">
//                                     {article.title}
//                                 </h4>
//                                 <p>
//                                     By {article.author} | {article.date}
//                                 </p>
//                                 <p>
//                                     {article.content.slice(0, 100)}...
//                                 </p>
//                                 <Link to={`/article/${article.id}`} className="text-secondary font-roboto text-xs">
//                                     Read more →
//                                 </Link>
//                             </div>
//                         </Link>
//                     ))}
//                 </Slider>
//             </div>
//         </section>
//     );


// }
