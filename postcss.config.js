/*eslint-env node*/

const postcssPresetEnv = require(`postcss-preset-env`);
const postcssImport = require('postcss-import');

module.exports = () => ({
  plugins: [
    postcssPresetEnv({
      stage: 0
    }),
    postcssImport({
      path: ['src/styles']
    }),
    require('tailwindcss'),
    require('autoprefixer')
  ]
});

// module.exports = {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//   },
// }
