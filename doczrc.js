module.exports = {
  typescript: true,
  dest: '/docs',
  base: '/beyondthecamp',
  modifyBabelRc: babelrc => ({
    ...babelrc,
    plugins: [...babelrc.plugins, 'emotion']
  })
};
