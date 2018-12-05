const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const routes = require('./src/utils/routes');
const { getLocaleList, getPrimaryLocale } = require('./src/utils/languages');

const createCategoryPage = (createPage, category) => {
  const categoryPageTemplate = path.resolve('./src/templates/category.tsx');
  createPage({
    path: routes.getCategoryPath(category.polylang_current_lang, category.slug),
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
      category.slug,
      project.slug
    ),
    component: projectPageTemplate,
    context: {
      id: project.id,
      categoryId: category.id
    }
  });
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

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

  const graphQLresult = await graphql(
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

      fragment CategoryFieldsFragment on wordpress__CATEGORY {
        id
        slug
        polylang_current_lang
      }

      query MasterQuery($primaryLocale: String!) {
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

  graphQLresult.data.categories.edges.map(({ node: category }) => {
    createCategoryPage(createPage, category);

    const translations = category.polylang_translations || [];
    translations.map(translation => {
      createCategoryPage(createPage, translation);
    });
  });

  graphQLresult.data.projects.edges.map(({ node: project }) => {
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
