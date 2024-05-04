/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000',
        secondary: '#fff',
        accent: '#f00',
      },
      fontFamily: {
        display: ['Alfa Slab One'],
      },
      boxShadow: {
        neo: '4px 4px 0px #000',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}

