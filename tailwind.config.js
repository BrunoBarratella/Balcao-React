/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'Poppins': ['Poppins', 'sans-serif']
      },
      colors:{
        'verdinho': '#009e9d', 
        'botaoBusca': '#6C58F7',
      }
    },
  },
  plugins: [],
}

