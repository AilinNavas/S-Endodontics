import React, { useState } from 'react';
import blogData from './blogData.json';

export const Blog = () => {
  const ARTICLES_PER_PAGE = 2; // Ajusta este valor según tus necesidades
  const [currentPage, setCurrentPage] = useState(1);

  const totalArticles = blogData.length;
  const totalPages = Math.ceil(totalArticles / ARTICLES_PER_PAGE);

  // Calcular el índice inicial y final para la paginación
  const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
  const endIndex = startIndex + ARTICLES_PER_PAGE;

  // Obtener los artículos para la página actual
  const currentArticles = blogData.slice(startIndex, endIndex);

  // Manejar el clic en el botón "siguiente"
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Manejar el clic en el botón "anterior"
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Manejar el clic en una página específica
  const handleGoToPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      {currentArticles.map((article) => (
        <div key={article.id} className="border p-4 mb-4">
          <h2 className="text-2xl font-semibold">{article.title}</h2>
          <p className="text-sm text-gray-500">
            Por {article.author} el {article.date}
          </p>
          <p className="mt-2">{article.content}</p>
        </div>
      ))}
      <div className="flex justify-between items-center mt-4">
        <button
          className="bg-gray-200 px-4 py-2 rounded"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          Anterior
        </button>
        
        {/* Listado de números de página */}
        <div className="flex space-x-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handleGoToPage(index + 1)}
              className={`px-3 py-1 rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            >
              {index + 1}
            </button>
          ))}
        </div>

        <button
          className="bg-gray-200 px-4 py-2 rounded"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

