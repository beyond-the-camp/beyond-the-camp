import * as React from 'react';

import { graphql, Link } from 'gatsby';

import { FormattedMessage } from 'react-intl';
import BreadCrumbs from '../components/BreadCrumbs';
import Layout from '../components/Layout';
import * as routes from '../utils/routes';
import { LocaleType } from '../utils/types';

interface CategoryNode {
  id: string;
  polylang_current_lang: string;
  slug: string;
  name: string;
  count: number;
}

const getCategoryPath = (category: CategoryNode): string =>
  routes.getCategoryPath(category.polylang_current_lang, category.slug);

interface Props {
  data: {
    categories: {
      edges: Array<{
        node: CategoryNode;
      }>;
    };
  };
  pageContext: {
    language: LocaleType;
  };
}

export default ({ data, pageContext }: Props) => (
  <Layout currentLocale={pageContext.language}>
    <BreadCrumbs crumbs={[{ text: <FormattedMessage id="HOME" /> }]} />
    <div className="container">
      {data.categories.edges
        .filter(({ node }) => node.count > 0)
        .map(({ node }) => (
          <Link to={getCategoryPath(node)} key={node.id}>
            <div className="card">
              <div className="card-content">
                <div
                  className="content"
                  dangerouslySetInnerHTML={{
                    __html: node.name + ' (' + node.count + ')'
                  }}
                />
              </div>
            </div>
          </Link>
        ))}
    </div>
  </Layout>
);

export const query = graphql`
  query CategoryListPageQuery($language: String!) {
    categories: allWordpressCategory(
      filter: { polylang_current_lang: { eq: $language } }
    ) {
      edges {
        node {
          id
          slug
          name
          polylang_current_lang
          count
        }
      }
    }
  }
`;
