const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return graphql(`
    {
      projects: allWordpressWpProject {
        edges {
          node {
            id
            slug
            polylang_current_lang
          }
        }
      }

      categories: allWordpressCategory {
        edges {
          node {
            id
            slug
            polylang_current_lang
          }
        }
      }
    }
  `).then(result => {
    const categoryListPageTemplate = path.resolve(
      './src/templates/category-list.tsx'
    );
    ['en_GB', 'af'].map(language => {
      createPage({
        path: `${language}`,
        component: categoryListPageTemplate,
        context: {
          language: language
        }
      });
    });

    const categoryPageTemplate = path.resolve(
      './src/templates/category-content.tsx'
    );
    result.data.categories.edges.map(({ node: category }) => {
      createPage({
        path: `${category.polylang_current_lang}/categories/${category.slug}`,
        component: categoryPageTemplate,
        context: {
          id: category.id
        }
      });
    });

    const projectPageTemplate = path.resolve('./src/templates/project.tsx');
    result.data.projects.edges.map(({ node: project }) => {
      createPage({
        path: `${project.polylang_current_lang}/projects/${project.slug}`,
        component: projectPageTemplate,
        context: {
          id: project.id
        }
      });
    });
  });
};
