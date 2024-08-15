/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "jost": ["jost", "sans-serif"],
      },
      colors: {
        "burnt-sienna": "#E37D67",
        redwood: "#98574D",
        timberwolf: "#D2D3CF",
      },
    },
  },
  plugins: [],
};
