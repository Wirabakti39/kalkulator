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
        exborder: '#292524'
      },
      width: {
        hp: '90%',
        tablet: '60%',
      },
      minWidth: {
        vsm: '270px',
      },
      maxWidth: {
        sedang: '448px',
      },
      height: {
        fullScreen: '100vh',
      },
      minHeight: {
        pendek: '500px',
      },
      screens: {
        miniScreen: '350px',
      }
    },
  },
  plugins: ["autoprefixer", "postcss"]
}
