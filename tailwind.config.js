/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
    "./*.{html,js}",
    "./**/*.{html,js}",
    "!./node_modules/**/*", 
  ],
  theme: {
    extend: {
  colors: {
    'primary': '#171717',
    'secondary': '#262626',
    'ternary' : '#EABE6C',
    'bg-utama' : '#000000',
    'bg-lapisan' : '#7bfc59'
    },
  },
  plugins: [],
}
}

