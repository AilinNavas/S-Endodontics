import React, { useState } from "react";
import { Link } from "react-router-dom"; // Para el enlace "Leer más"
import blogData from "./blogData.json";

export const Blog = () => {
  const ARTICLES_PER_PAGE = 6;
  const [currentPage, setCurrentPage] = useState(1);

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

  return (
    <section>
      <div className="h-auto w-[90vw] mx-auto lg:w-[80vw]">
        <div className="p-4 border-2 border-yellow-400 my-12">
          <Link to="/blog">
            <h3 className="text-3xl font-extrabold mb-4 border-2 border-gray text-[#0b4088] font-zen md:text-4xl lg:text-5xl">
              Blog
            </h3>
          </Link>
          <p className="font-roboto text-gray-dark px-2 font-normal text-xl md:text-2xl lg:text-3xl">
            Explore our blog to learn about endodontic treatments, tips for
            dental care, and the latest in root canal technology.{" "}
          </p>
          <div className="border-2 border-red-500 md:grid md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4 lg:mt-4">
            {currentArticles.map((article) => (
              <Link to={`/article/${article.id}`}>
                <div
                  key={article.id}
                  className="relative h-[350px] md:h-[450px] border-t-8 flex flex-col border-[#0b4088] hover:scale-105 transition-all duration-300 rounded-xl shadow-lg p-4 mb-4 lg:hover:bg-[#f9fcff] "
                >
                  <h4 className="text-2xl border-2 h-[100px] md:h-[150px] border-yellow-300 md:text-3xl font-roboto text-[#0b4088] p-2">
                    {article.title}
                  </h4>
                  <p className=" border-2 border-red-300 h-[50px] text-sm md:text-lg text-gray font-roboto px-2">
                    By {article.author} | {article.date}
                  </p>
                  <p className=" border-2 border-green-400 mt-2 px-2 h-[200px] md:h-[250px] lg:h-[320px] text-xl md:text-2xl text-wrap text-gray-dark font-roboto">
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

          <div className="flex justify-between items-center mt-4 border-2 border-green-600">
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