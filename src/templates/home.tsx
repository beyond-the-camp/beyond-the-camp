import * as React from 'react';

import { graphql, Link } from 'gatsby';

import { FormattedMessage } from 'react-intl';
import BreadCrumbs from '../components/BreadCrumbs';
import Layout from '../components/Layout';
import ListCard from '../components/ListCard';
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

    <div className="flex flex-wrap -mx-2">
      {data.categories.edges
        .filter(({ node }) => node.count > 0)
        .map(({ node }) => (
          <div key={node.id} className="w-full max-w-sm md:w-1/2 px-2 mb-2">
            <Link to={getCategoryPath(node)} className="no-underline">
              <ListCard>
                <div
                  dangerouslySetInnerHTML={{
                    __html: node.name + ' (' + node.count + ')'
                  }}
                />
              </ListCard>
            </Link>
          </div>
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
