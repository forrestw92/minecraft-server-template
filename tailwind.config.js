/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "bright_squares": "url('./images/bright-squares.png')",
      },
      colors: {
        "map-plum": "#866e7c",
        "discord-blue": "#4b6492",
        "donate-purple": "#645974",
      },
      borderColor: {
        "map-plum": "#866e7c",
        "discord-blue": "#4b6492",
        "donate-purple": "#645974",
      }
    },
  },
  plugins: [],
}
