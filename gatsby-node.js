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

      categories: allDatoCmsCategory {
        edges {
          node {
            locale
            slug
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

    const categoryPageTemplate = path.resolve(`./src/templates/category.tsx`);
    result.data.categories.edges.map(({ node: category }) => {
      createPage({
        path: `${category.locale}/category/${category.slug}`,
        component: categoryPageTemplate,
        context: {
          locale: category.locale,
          slug: category.slug
        }
      });
    });

    const projectPageTemplate = path.resolve(`./src/templates/project.tsx`);
    result.data.projects.edges.map(({ node: project }) => {
      createPage({
        path: `${project.locale}/projects/${project.slug}`,
        component: projectPageTemplate,
        context: {
          locale: project.locale,
          slug: project.slug
        }
      });
    });
  });
};
