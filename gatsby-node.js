const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const routes = require('./src/utils/routes');
const { getLocaleList, getPrimaryLocale } = require('./src/utils/languages');

const createCategoryPage = (createPage, category) => {
  const categoryPageTemplate = path.resolve('./src/templates/category.tsx');
  createPage({
    path: routes.getCategoryPath(
      category.polylang_current_lang,
      decodeURIComponent(category.slug)
    ),
    component: categoryPageTemplate,
    context: {
      id: category.id
    }
  });
};

const createProjectPage = (createPage, project, category) => {
  const projectPageTemplate = path.resolve('./src/templates/project.tsx');
  createPage({
    path: routes.getProjectPath(
      project.polylang_current_lang,
      decodeURIComponent(category.slug),
      decodeURIComponent(project.slug)
    ),
    component: projectPageTemplate,
    context: {
      id: project.id,
      categoryId: category.id
    }
  });
};

/**
 * Create static site pages using page templates and data from a GraphQL queries.
 */
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  /**
   * Create Home pages - one for each supported language.
   */
  const homePageTemplate = path.resolve('./src/templates/home.tsx');
  getLocaleList().map(language => {
    createPage({
      path: routes.getHomePath(language),
      component: homePageTemplate,
      context: {
        language
      }
    });
  });

  /**
   * Create category pages - for each category create one page for
   * primary language and one for each translation.
   */
  const categoriesResult = await graphql(
    `
      fragment CategoryFieldsFragment on wordpress__CATEGORY {
        id
        slug
        polylang_current_lang
        count
      }

      query CategoryPagesQuery($primaryLocale: String!) {
        categories: allWordpressCategory(
          filter: { polylang_current_lang: { eq: $primaryLocale } }
        ) {
          edges {
            node {
              ...CategoryFieldsFragment
              polylang_translations {
                ...CategoryFieldsFragment
              }
            }
          }
        }
      }
    `,
    {
      primaryLocale: getPrimaryLocale()
    }
  );

  categoriesResult.data.categories.edges
    .filter(({ node }) => node.count > 0)
    .forEach(({ node }) => {
      createCategoryPage(createPage, node);

      const translations = node.polylang_translations || [];
      translations
        .filter(translation => translation.count > 0)
        .map(translation => {
          createCategoryPage(createPage, translation);
        });
    });

  /**
   * Create project pages - for each project create one page for
   * primary language, one for each translation, and one copy for each category
   * it belongs to.
   */
  const projectsResult = await graphql(
    `
      fragment ProjectFieldsFragment on wordpress__wp_project {
        id
        slug
        polylang_current_lang
        categories {
          id
          slug
          name
        }
      }

      query ProjectPagesQuery($primaryLocale: String!) {
        projects: allWordpressWpProject(
          filter: { polylang_current_lang: { eq: $primaryLocale } }
        ) {
          edges {
            node {
              ...ProjectFieldsFragment
              polylang_translations {
                ...ProjectFieldsFragment
              }
            }
          }
        }
      }
    `,
    {
      primaryLocale: getPrimaryLocale()
    }
  );

  projectsResult.data.projects.edges.map(({ node: project }) => {
    const categories = project.categories || [];
    categories.map(category => {
      createProjectPage(createPage, project, category);
    });

    const translations = project.polylang_translations || [];
    translations.map(translation => {
      const categories = translation.categories || [];
      categories.map(category => {
        createProjectPage(createPage, translation, category);
      });
    });
  });
};
