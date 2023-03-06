/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      robo: ["Roboto Mono", "monospace"],
    },
    extend: {
      colors: {
        primary: "#FF6C37",
        secondary: "#050C19",
        red: "#C70039",
      },
    },
  },
  plugins: [],
};
