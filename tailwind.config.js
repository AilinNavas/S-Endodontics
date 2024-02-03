/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
       
        'sm': '320px',
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
        "gradiente" : "conic-gradient(at center top, rgb(17, 24, 39), rgb(243, 244, 246), rgb(17, 24, 39))"
        }, 
    },
  },
  plugins: [],
}

