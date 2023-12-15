/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        'Tomato': 'hsl(4, 100%, 67%)',
        'Dark-slate-gray': 'hsl(234, 29%, 20%)',
        'Charcoal-gray': 'hsl(235, 18%, 26%)',
        'grey': 'hsl(231, 7%, 60%)',
      },
      screens: {
        'xsm': '400px',
      },
    },
  },
  plugins: [],
}

