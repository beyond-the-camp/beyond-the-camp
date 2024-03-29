/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/*.{js,jsx,ts,tsx}",
    "./src/templates/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#07BEB8',
        secondary: '#0CF574',
        tertiary: '#f9f9f9'
      },
      fontFamily: {
        sans: ['Quicksand', 'sans-serif']
      },
      container: {
        center: true,
        padding: '20px',
        sm: 'max-width: 700px',
        lg: 'max-width: 800px',
        xl: 'max-width: 800px'
      },
      screens: {
        lg: '960px',
        xl: '960px'
      },
      flex: {
        '2': '2 2 0%',
        '3': '3 3 0%'
      }
    },
  },
  plugins: [],
}

