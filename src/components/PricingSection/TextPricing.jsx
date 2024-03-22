import React from 'react'

export const TextPricing = ({textPricing}) => {
    return (
        <div className='w-[80vw] ml-[10vw] p-2 text-center h-auto border-2 border-blue-800'>
          {textPricing.split(' ').map((word, index) => {
            let wordStyle = ''; // Define el estilo para cada palabra
    
            // Aquí puedes definir tus condiciones para aplicar diferentes estilos a palabras específicas
            if (word.includes('Southside') || word.includes('Endodontics')) {
              wordStyle = 'font-zen font-black text-[#0b4088] text-xl md:text-2xl lg:text-3xl';
            } else if (word.includes('transparent') || word.includes('accessible')|| word.includes('pricing')){
              wordStyle = 'font-roboto font-normal text-xl md:text-2xl lg:text-3xl text-gray-dark';
            } else if (word.includes('$800') || word.includes('$1500')){
                wordStyle = 'font-roboto font-normal md:text-2xl lg:text-3xl';
            } else {
              // Estilo predeterminado para otras palabras
              wordStyle = 'font-roboto text-xl text-gray-dark md:text-2xl lg:text-3xl text-center';
            }
    
            return (
              <span key={index} className={`text-center ${wordStyle}`}>
                {word}{' '}
              </span>
            );
          })}
        </div>
      );
    };
    
