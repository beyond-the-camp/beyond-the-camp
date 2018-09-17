const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

const locales = ['en', 'fr'];

const defaultLocale = locales[0];

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allDatoCmsProject {
          edges {
            node {
              locale
              slug
            }
          }
        }
      }
    `).then(result => {
      result.data.allDatoCmsProject.edges.map(({ node: project }) => {
        const pathElements = [];
        if (project.locale !== 'en') {
          pathElements.push(project.locale);
        }
        pathElements.push('projects', project.slug);
        createPage({
          path: `${pathElements.join('/')}`,
          component: path.resolve(`./src/templates/project.tsx`),
          context: {
            slug: project.slug,
            locale: project.locale
          }
        });
      });
      resolve();
    });
  });
};
