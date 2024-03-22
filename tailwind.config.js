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
        'xl': '1600px',
        // => @media (min-width: 1600px) { ... }
      },
      colors: {
        "primary": "#072a59",
        "secondary" : "#126de7",
        "tartiary" : "#16181a",
        "gray" : " #90989f",
        "gray-dark" : "#2e3135",
        "celeste" : "#3c89f0",
        "gradiente" : "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(150,196,255,1) 46%, rgba(255,255,255,1) 99%);"
        }, 
      fontFamily: {
        "roboto": "Roboto Slab", 
        "zen" : "Zen Maru Gothic",
        "jost" :"Jost"
      },
      
    },
  },
  plugins: [

  ],
}

