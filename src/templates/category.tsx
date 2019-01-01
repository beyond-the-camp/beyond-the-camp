import * as React from 'react';

import { graphql, Link } from 'gatsby';

import { FormattedMessage } from 'react-intl';
import BreadCrumbs from '../components/BreadCrumbs';
import { LocaleLinks } from '../components/LanguageSelector';
import Layout from '../components/Layout';
import * as routes from '../utils/routes';
import { LocaleType } from '../utils/types';

interface CategoryNode {
  name: string;
  slug: string;
  polylang_current_lang: LocaleType;
  polylang_translations: Array<{
    polylang_current_lang: LocaleType;
    slug: string;
  }>;
}

interface ProjectNode {
  wordpress_id: number;
  slug: string;
  polylang_current_lang: string;
  title: string;
}

const getProjectPath = (category: CategoryNode, project: ProjectNode): string =>
  routes.getProjectPath(
    project.polylang_current_lang,
    category.slug,
    project.slug
  );

const getLocaleLinks = ({ data }: Props): LocaleLinks => {
  const links: Partial<LocaleLinks> = {
    [data.category.polylang_current_lang]: routes.getCategoryPath(
      data.category.polylang_current_lang,
      data.category.slug
    )
  };

  data.category.polylang_translations.forEach(translation => {
    const lang = translation.polylang_current_lang;
    const category = translation.slug;
    links[lang] = routes.getCategoryPath(lang, category);
  });

  return links as LocaleLinks;
};

interface Props {
  data: {
    category: CategoryNode;

    projects?: {
      edges: Array<{
        node: ProjectNode;
      }>;
    };
  };
}

export default (props: Props) => {
  const { data } = props;
  return (
    <Layout
      currentLocale={data.category.polylang_current_lang}
      localeLinks={getLocaleLinks(props)}
    >
      <BreadCrumbs
        crumbs={[
          {
            text: <FormattedMessage id="HOME" />,
            link: routes.getHomePath(data.category.polylang_current_lang)
          },
          {
            text: data.category.name
          }
        ]}
      />

      <div className="container">
        <h1 className="title">{data.category.name}</h1>
        {data.projects &&
          data.projects.edges.map(({ node }) => (
            <Link
              to={getProjectPath(data.category, node)}
              key={node.wordpress_id}
            >
              <div className="card">
                <div className="card-content">
                  <div
                    className="content"
                    dangerouslySetInnerHTML={{ __html: node.title }}
                  />
                </div>
              </div>
            </Link>
          ))}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query CategoryPageQuery($id: String!) {
    category: wordpressCategory(id: { eq: $id }) {
      name
      slug
      polylang_current_lang
      polylang_translations {
        polylang_current_lang
        slug
      }
    }

    projects: allWordpressWpProject(
      filter: { categories: { elemMatch: { id: { eq: $id } } } }
    ) {
      edges {
        node {
          wordpress_id
          slug
          polylang_current_lang
          title
          categories {
            id
            name
          }
        }
      }
    }
  }
`;
