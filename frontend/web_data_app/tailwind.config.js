/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
        boxShadow: {
            'logo': '0px 0px 0px 5px #CCC',
        },
        colors: {
            'gris-descripcion': '#CCC',
          },
    },
  },
  plugins: [],
}
