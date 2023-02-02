/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'card-top' : 'linear-gradient(180deg, rgba(43,43,43,0.4) 0%, rgba(0,0,0,0) 13%)',
        'card-bottom' : 'linear-gradient(180deg, rgba(43,43,43,0.4) 0%, rgba(0,0,0,0) 13%, rgba(0,0,0,0) 54%, rgba(43,43,43,0.5) 100%)',
        }
      },
      fontFamily: {
        sans : ['Noto Sans', 'sans-serif'],
        logo : ['Balsamiq Sans', 'cursive'],
      }
    },
  plugins: [require('prettier-plugin-tailwindcss')],
}
