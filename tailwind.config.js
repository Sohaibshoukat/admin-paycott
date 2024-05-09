/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        lightGrey: "#868686",
        tealGreen: "#ADE4B6",
        primarygreen: "#63D577",
        light: "#E9E9E9"
      },
      fontFamily: {
        pop: "Poppins"
      },
      backgroundImage:{
        gradientdata:"linear-gradient(45deg, #63D577 0%, #2A6935 100%)"
      }
    }
  },
  plugins: [],
}

