/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1360px",
      },
    },
    extend: {
      fontFamily: {
        kittithada: ['kittithada', 'sans-serif']
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        'c-gray' : {
          "100" : "#F4F4F4",
          "200" : "#dadada",
          "500" : "#5f5f5f",
          "800" : "#3C3C3C"
        },
        'c-blue' : {
          "500" : "#1e73be",
          "700" : "#185c98"
        },
        'c-green' : {
          "500" : "#00a8a9"
        },
        'c-orange': {
          "500" : "#FF6600"
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}