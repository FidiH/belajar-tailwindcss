/** @type {import('tailwindcss').Config} */

const path = require("path");

module.exports = {
  content: [path.join(__dirname, 'src/**/*.{html,js}'),
    path.join(__dirname, 'dist/**/*.html')],
  theme: {
    extend: {},
  },
  plugins: [],
}

