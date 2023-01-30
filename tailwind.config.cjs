/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    },
    fontFamily: {
      sans : ['Noto Sans', 'sans-serif'],
      logo : ['Balsamiq Sans', 'cursive'],
    }
  },
  plugins: [],
}
