/*eslint-env node*/

const postcssPresetEnv = require(`postcss-preset-env`);
const postcssImport = require('postcss-import');
const tailwindcss = require('tailwindcss');

module.exports = () => ({
  plugins: [
    postcssPresetEnv({
      stage: 0
    }),
    postcssImport({
      path: ['src/styles']
    }),
    tailwindcss('./tailwind.js'),
    require('autoprefixer')
  ]
});
