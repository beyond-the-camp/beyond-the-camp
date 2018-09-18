const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return graphql(`
    {
      home: allDatoCmsHome {
        edges {
          node {
            locale
            categoriesTitle
          }
        }
      }

      projects: allDatoCmsProject {
        edges {
          node {
            locale
            slug
          }
        }
      }
    }
  `).then(result => {
    const homePageTemplate = path.resolve(`./src/templates/index.tsx`);
    result.data.home.edges.map(({ node: home }) => {
      createPage({
        path: `${home.locale}`,
        component: homePageTemplate,
        context: {
          locale: home.locale
        }
      });
    });

    const projectPageTemplate = path.resolve(`./src/templates/project.tsx`);
    result.data.projects.edges.map(({ node: project }) => {
      createPage({
        path: `${project.locale}/projects/${project.slug}`,
        component: projectPageTemplate,
        context: {
          slug: project.slug,
          locale: project.locale
        }
      });
    });
  });
};
