/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./demo/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        bgcolor: '#d4d4d4',
        mainshadow: '#404040',
        oren: '#f97316',
        border: '#737373',
        operator: '#f1f5f9',
        inputbox: '#d6d3d1'
      },
      gridAutoRows: {
        '5fr': 'minmax(0, 5fr)',
      }
    },
  },
  plugins: [],
}
