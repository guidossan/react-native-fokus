/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
   theme: {
    extend: {
      colors: {
        brand: "#021123",
      },
      fontFamily: {
        sans: ["Inter"],
      },
    },
  },
  plugins: [],
};