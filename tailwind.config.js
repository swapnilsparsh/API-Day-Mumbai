/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./section/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      robo: ["Roboto Mono", "monospace"],
    },
    extend: {
      colors: {
        primary: "#FF5733",
        secondary: "#C70039",
        background: "#232531",
      },
    },
  },
  plugins: [],
};
