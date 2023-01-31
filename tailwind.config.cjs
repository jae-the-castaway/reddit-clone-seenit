/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'card' : 'linear-gradient(180deg, rgba(43,43,43,1) 0%, rgba(0,0,0,0) 20%, rgba(0,0,0,0) 54%, rgba(43,43,43,1) 100%)',
        }
      },
      fontFamily: {
        sans : ['Noto Sans', 'sans-serif'],
        logo : ['Balsamiq Sans', 'cursive'],
      }
    },
  plugins: [],
}
