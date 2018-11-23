const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const routes = require('./src/utils/routes');

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
            categories {
              slug
              name
            }
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
      './src/templates/categories.tsx'
    );
    ['en_GB', 'af'].map(language => {
      createPage({
        path: routes.getHomePath(language),
        component: categoryListPageTemplate,
        context: {
          language: language
        }
      });
    });

    const projectListPageTemplate = path.resolve(
      './src/templates/projects.tsx'
    );
    result.data.categories.edges.map(({ node: category }) => {
      createPage({
        path: routes.getCategoryPath(
          category.polylang_current_lang,
          category.slug
        ),
        component: projectListPageTemplate,
        context: {
          id: category.id
        }
      });
    });

    const projectPageTemplate = path.resolve('./src/templates/project.tsx');
    result.data.projects.edges.map(({ node: project }) => {
      project.categories.map(category => {
        createPage({
          path: routes.getProjectPath(
            project.polylang_current_lang,
            category.slug,
            project.slug
          ),
          component: projectPageTemplate,
          context: {
            id: project.id,
            category: category
          }
        });
      });
    });
  });
};
