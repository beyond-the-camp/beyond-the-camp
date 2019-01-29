import * as React from 'react';

import { graphql, Link } from 'gatsby';
import { FormattedMessage } from 'react-intl';

import BreadCrumbs from '../components/BreadCrumbs';
import { LocaleLinks } from '../components/LanguageSelector';
import Layout from '../components/Layout';
import ListCard from '../components/ListCard';
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

      <div className="container mx-auto">
        <h1>{data.category.name}</h1>
        <ul className="list-reset flex flex-wrap -mx-2 mt-4">
          {data.projects &&
            data.projects.edges.map(({ node }) => (
              <li
                key={node.wordpress_id}
                className="w-full max-w-sm md:w-1/2 px-2 mb-2"
              >
                <Link
                  to={getProjectPath(data.category, node)}
                  className="no-underline"
                >
                  <ListCard>
                    <div dangerouslySetInnerHTML={{ __html: node.title }} />
                  </ListCard>
                </Link>
              </li>
            ))}
        </ul>
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
