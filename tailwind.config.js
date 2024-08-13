/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'seashell': "#fcf3f0ff",
        "white-smoke": "#f5f3f2ff",
        white: "#ffffffff",
        "tropical-indigo": "#aa9aebff",
        platinum: "#e7e2e0ff",
        "antiflash-white": "#ececf1ff",
        buff: "#d69c5aff",
        snow: "#fdf8f6ff",
        'periwinkle': "#cdc7f0ff",
        "air-superiority-blue": "#87a6bdff",
        "battleship-gray": "#79898cff",
      },
    },
  },
  plugins: [],
};
