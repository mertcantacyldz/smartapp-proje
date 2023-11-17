/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'inter' : [ 'Inter', 'sans-serif']
       },

       colors:{
        'bg-gray' : 'rgba(196, 195, 195, 0.4)'
       },
       backgroundImage: {
        back: "url('../public/images-vectors/bg-image.jpg')",
      },
      screens: {
       
        '3xl': '1920px',
        '4xl': '2300px',
        'tablet': '769px'
       
      },
      fontSize: {
        'mini': '10px',
       
      },
    },
  },
  plugins: [],
}

