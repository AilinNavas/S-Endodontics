import React from 'react'
import { Link, useParams } from 'react-router-dom';
import blogData from './blogData.json';

export const ArticleDetail = () => {
    const { id } = useParams(); // Obtener el ID del parámetro de la URL
    const articleId = parseInt(id); // Convertir el ID a número
    const article = blogData.find((a) => a.id === articleId); // Buscar el artículo por ID

    if (!article) {
        return <p>Artículo no encontrado.</p>;
    }

    // Determinar los índices del artículo actual, anterior y siguiente
    const currentIndex = blogData.findIndex((a) => a.id === articleId);
    const previousArticle = blogData[currentIndex - 1];
    const nextArticle = blogData[currentIndex + 1];

    return (

        <section>
            <div className='h-auto w-[90vw] mx-auto lg:w-[80vw]'>

                <div className="p-4 border-2 border-yellow-400 my-12">
                <Link to='/blog'><h3 className="text-3xl font-extrabold mb-4 border-2 border-gray text-[#0b4088] font-zen md:text-4xl lg:text-5xl">Blog</h3></Link>
                    <div className="border-b-2 rounded-xl shadow-lg p-4 md:p-8 border-[#e2e4e6]">
                        <h4 className="text-2xl md:text-3xl lg:text-4xl font-roboto text-[#0b4088] py-2 text-wrap">{article.title}</h4>
                        <p className="text-lg text-gray font-roboto px-2">
                            By {article.author} | {article.date}
                        </p>
                        <p className="mt-4 text-xl md:text-2xl  text-gray-dark font-normal font-roboto">{article.content}</p>
                        <Link to='/blog' className="text-secondary font-roboto text-xs md:text-lg"><p className='p-2 text-right'>← Return</p></Link>

                    </div>
                    <div className="flex justify-between mt-8">
                        {/* Enlace al artículo anterior, deshabilitado si no existe */}
                        {previousArticle ? (
                            <Link to={`/article/${previousArticle.id}`} className="text-secondary">
                                ← {previousArticle.title}
                            </Link>
                        ) : (
                            <span className="text-gray-400 text-left">← There is no previous article</span>
                        )}

                        {/* Enlace al artículo siguiente, deshabilitado si no existe */}
                        {nextArticle ? (
                            <Link to={`/article/${nextArticle.id}`} className="text-secondary text-right">
                                {nextArticle.title} →
                            </Link>
                        ) : (
                            <span className="text-gray-400">There is no next article →</span>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};