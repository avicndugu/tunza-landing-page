/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "./src/**/*.html",
    "./**/*.html",
    "!./node_modules/*",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

