/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        custom:["Poppins","sans-serif"],
        noto:['"Noto Sans Mono"' , ...defaultTheme.fontFamily.sans],
      },

    },
  },
  plugins: [
  ],
}