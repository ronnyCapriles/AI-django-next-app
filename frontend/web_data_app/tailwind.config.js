/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

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
            'Contact-Button': '2px 2px 4px 3px #CCC',
        },
        colors: {
            'gris-descripcion': '#CCC',
          },
        fontFamily: {
          montserrat: ['MONTSERRAT', ...defaultTheme.fontFamily.sans],
          roboto: ['ROBOTO', ...defaultTheme.fontFamily.sans],
        }
    },
  },
  plugins: [],
}
