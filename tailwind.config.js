 /** @type {import('tailwindcss').Config} */
 export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        libre: ["'Libre Franklin'", "sans-serif"],
        poppins: ["'Poppins'", "sans-serif"],
        sumana: ["'Sumana'", "serif"],
      },
    },
  },
  plugins: [],
}