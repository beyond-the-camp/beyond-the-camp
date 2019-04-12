/*eslint-env node*/

const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`);
const { fmImagesToRelative } = require('gatsby-remark-relative-images');
// const routes = require('./src/utils/routes');
// const { getLocaleList, getPrimaryLocale } = require('./src/utils/languages');

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  fmImagesToRelative(node); // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({
      node,
      getNode
    });
    createNodeField({
      node,
      name: `slug`,
      value: slug
    });

    const pathSegments = node.fileAbsolutePath.split(path.sep);
    const contentIndex = pathSegments.indexOf('content');
    if (contentIndex !== -1) {
      const [contentType, language] = pathSegments.slice(contentIndex + 1);
      createNodeField({
        node,
        name: `language`,
        value: language
      });
      createNodeField({
        node,
        name: `contentType`,
        value: contentType
      });
    }
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const projectResult = await graphql(`
    {
      projects: allMarkdownRemark(
        filter: { fields: { contentType: { eq: "projects" } } }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  const projectEdges = projectResult.data.projects.edges;
  const component = path.resolve('./src/templates/project.tsx');

  projectEdges.forEach(edge => {
    const id = edge.node.id;
    const path = edge.node.fields.slug;

    createPage({
      path,
      component,
      context: {
        id
      }
    });
  });
};
