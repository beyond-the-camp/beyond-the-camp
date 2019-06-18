/*eslint-env node*/

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#07BEB8',
        secondary: '#0CF574',
        tertiary: '#f9f9f9'
      },
      container: {
        center: true,
        padding: '20px',
        lg: 'max-width: 800px',
        xl: 'max-width: 800px'
      },
      screens: {
        lg: '960px',
        xl: '960px'
      }
    }
  },
  variants: {
    opacity: ['responsive', 'hover']
  },
  plugins: []
};
