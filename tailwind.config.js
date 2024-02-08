/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
       
        'sm': '390px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 1024px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1280px) { ... }
      },
      colors: {
        "primary": "#0a2d5b",
        "secondary" : "#6495ed",
        "tartiary" : "#808080",
        "gray" : " #b6b9ba",
        "blue" : "#09274f",
        "celeste" : "#3498db",
        "gradiente" : "background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(150,196,255,1) 46%, rgba(255,255,255,1) 99%);"
        }, 
    },
  },
  plugins: [],
}

