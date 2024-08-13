/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        seashell: "#fcf3f0ff",
        "white-smoke": "#f5f3f2ff",
        white: "#ffffffff",
        "tropical-indigo": "#aa9aebff",
        platinum: "#e7e2e0ff",
        "antiflash-white": "#ececf1ff",
      },
    },
  },
  plugins: [],
};
