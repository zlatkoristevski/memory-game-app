/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px"
    },
    colors: {
      blue: "#1fb6ff",
      plava: "#ff0000",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      white: "#fff",
      black: "#000",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6"
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"]
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem"
      },
      borderRadius: {
        "4xl": "2rem"
      }
    }
  },
  screens: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
    "3xl": "1800px",
    "4xl": "2000px",
    "max-sm": { max: "640px" },
    "max-md": { max: "768px" },
    "max-lg": { max: "1024px" },
    "max-xl": { max: "1280px" },
    "max-2xl": { max: "1536px" },
    "max-3xl": { max: "1800px" },
    "max-4xl": { max: "2000px" }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
