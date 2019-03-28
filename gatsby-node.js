/*eslint-env node*/

const { createFilePath } = require(`gatsby-source-filesystem`);
// const path = require(`path`);
// const routes = require('./src/utils/routes');
// const { getLocaleList, getPrimaryLocale } = require('./src/utils/languages');

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({
      node,
      getNode,
      basePath: `content/categories/en`
    });
    createNodeField({
      node,
      name: `slug`,
      value: slug
    });
  }
};
