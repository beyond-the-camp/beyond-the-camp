/*eslint-env node*/

const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`);
const { getLocaleList } = require('./src/utils/languages');
// const routes = require('./src/utils/routes');

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

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
    const indexOfPrefix = pathSegments.indexOf('pages');
    if (indexOfPrefix !== -1) {
      // E.g. "/pages/en/projects" -> [ "en", "projects" ]
      const [language, contentType] = pathSegments.slice(indexOfPrefix + 1);
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

  // Create project pages
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
  const projectComponent = path.resolve('./src/templates/project.tsx');

  projectEdges.forEach(edge => {
    const id = edge.node.id;
    const path = edge.node.fields.slug;

    createPage({
      path,
      component: projectComponent,
      context: {
        id
      }
    });
  });

  // Create Categories page
  const categoriesComponent = path.resolve('./src/templates/categories.tsx');
  getLocaleList().forEach(language => {
    const path = `/${language}`;

    createPage({
      path,
      component: categoriesComponent,
      context: {
        language
      }
    });
  });

  // Create individual category pages
  const categoriesResult = await graphql(`
    {
      categories: allMarkdownRemark(
        filter: { fields: { contentType: { eq: "categories" } } }
      ) {
        edges {
          node {
            fields {
              slug
              language
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `);

  const categoryEdges = categoriesResult.data.categories.edges;
  const categoryComponent = path.resolve('./src/templates/category.tsx');

  categoryEdges.forEach(edge => {
    const path = edge.node.fields.slug;
    const language = edge.node.fields.language;
    const category = edge.node.frontmatter.title;

    createPage({
      path,
      component: categoryComponent,
      context: {
        language,
        category
      }
    });
  });
};
