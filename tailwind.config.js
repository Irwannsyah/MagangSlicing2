/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      fontFamily:{
        fira : ["Fira Sans", "sans-serif"],
        montserrat : [ "Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [
  ],
}

