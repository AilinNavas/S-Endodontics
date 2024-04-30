import React, { useState, useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom"; // Para el enlace "Leer más"
import blogData from "./blogData.json";
import blog from '/src/assets/bannerBlog.jpeg'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import home from '/src/assets/icons/home.svg'


export const Blog = () => {

  // useLayoutEffect(() => {
  //   window.scrollTo(0, 0); // Asegurarte de que se desplaza al principio
  // }, []);

  const ARTICLES_PER_PAGE = 6;
  const [currentPage, setCurrentPage] = useState(1);

  // Asegúrate de que al cambiar de página, el desplazamiento se restablezca al inicio
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const totalArticles = blogData.length;
  const totalPages = Math.ceil(totalArticles / ARTICLES_PER_PAGE);

  const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
  const endIndex = startIndex + ARTICLES_PER_PAGE;

  const currentArticles = blogData.slice(startIndex, endIndex);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const blogContainer = useRef();


  useGSAP(() => {
    gsap.fromTo('#imgBlog',
      { opacity: 0.3, duration: 2 },
      { opacity: 1, }),
      gsap.fromTo('#info',
        { opacity: 0, duration: 2 },
        {
          opacity: 1, stagger: {
            each: 0.5,
          },
        }, '<1'),
      gsap.fromTo('#articleBlog',
        { opacity: 0, },
        {
          opacity: 1, delay: 1, duration: 2, ease: "power2",
          stagger: {
            each: 0.5,
            from: 'start'

          },
        })


  }, { scope: blogContainer });

  return (
    <section ref={blogContainer}>


      <a href="/"><img id='imgBlog' src={blog} alt="" />
        <div className="w-[90vw] lg:w-[80vw] mx-auto flex items-end justify-end mt-4">
          <p className="opacity-80 text-roboto text-lg p-1 flex justify-end text-primary lg:text-2xl font-semibold bg-[#f9fcff] hover:shadow-lg lg:p-2 rounded-xl">
            <img src={home} alt="" className="w-6" />
            Homepage</p>
        </div></a>

      <div className="h-auto w-[90vw] mx-auto lg:w-[80vw] mb-28">
        <div className="p-4">
          <div className="flex justify-between items-center">
            <Link to="/blog">
              <h3 id="info" className="text-3xl font-extrabold text-[#0b4088] font-zen md:text-4xl lg:text-5xl">
                Blog
              </h3>
            </Link>
          </div>

          <p id='info' className="font-roboto text-gray-dark my-6 font-normal text-xl md:text-2xl lg:text-3xl">
            Explore our blog to learn about endodontic treatments, tips for
            dental care, and the latest in root canal technology.{" "}
          </p>
          <div className=" md:grid md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4 lg:mt-4">
            {currentArticles.map((article) => (
              <Link to={`/article/${article.id}`}>
                <div
                  key={article.id}
                  id='articleBlog'
                  className="relative h-[350px] md:h-[450px] border-t-8 flex flex-col border-[#0b4088] hover:scale-95 transition-all duration-300 rounded-xl shadow-lg p-4 mb-4 lg:hover:bg-[#f9fcff] "
                >
                  <h4 className="text-2xl h-[100px] md:h-[150px] md:text-3xl font-roboto text-[#0b4088] p-2">
                    {article.title}
                  </h4>
                  <p className="h-[50px] text-sm md:text-lg text-gray font-roboto px-2">
                    By {article.author} | {article.date}
                  </p>
                  <p className=" mt-2 px-2 h-[200px] md:h-[250px] lg:h-[320px] text-xl md:text-2xl text-wrap text-gray-dark font-roboto">
                    {article.content.slice(0, 100)} ...{" "}
                  </p>
                  <Link
                    to={`/article/${article.id}`}
                    className="text-secondary font-roboto text-xs"
                  >
                    <p className="p-2 text-right absolute bottom-4 right-2">
                      Read more →
                    </p>
                  </Link>
                </div>
              </Link>
            ))}
          </div>

          <div className="flex justify-between items-center mt-4 ">
            <button
              className="lg:hover:text-secondary px-4 py-2 rounded font-roboto text-gray"
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
            >
              Former
            </button>
            <div className="flex space-x-2 font-roboto">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`px-3 py-1 rounded lg:hover:bg-[#e2e4e6] ${currentPage === index + 1 ? "border-[#e2e4e6] border-b-2 shadow-md" : "bg-gray-200"}`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            <button
              className="lg:hover:text-secondary text-gray px-4 py-2 rounded font-roboto"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};