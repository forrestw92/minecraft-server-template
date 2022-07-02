/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "bright_squares": "url('./images/bright-squares.png')",
      },
    },
  },
  plugins: [],
}
