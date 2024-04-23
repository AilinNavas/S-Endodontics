import React, { useRef, useEffect } from 'react';
// @ts-ignore
import WAVES from 'vanta/dist/vanta.waves.min';
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

export const Bg = () => {
  const myRef = useRef(null);

  useEffect(() => {
    // Código Vanta.js para inicializar el fondo
    WAVES({
      el: myRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x9b9ba2,
      shininess: 8.00,
      waveHeight: 6.00,
      zoom: 0.84
    });

    // Función de limpieza para detener el fondo cuando el componente se desmonta
    return () => {
      if (myRef.current.vanta) myRef.current.vanta.destroy();
    };
  }, []);

  return (
    <div className='h-[100vh] w-[100vw] absolute -z-10' ref={myRef}>
      {/* Contenido de tu componente Hero */}
    </div>
  );
};

