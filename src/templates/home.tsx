import * as React from 'react';

import { graphql, Link } from 'gatsby';

import BreadCrumbs from '../components/BreadCrumbs';
import Layout from '../components/Layout';
import * as routes from '../utils/routes';

interface CategoryNode {
  id: string;
  polylang_current_lang: string;
  slug: string;
  name: string;
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
    language: string;
  };
}

export default ({ data, pageContext }: Props) => (
  <Layout currentLocale={pageContext.language}>
    <BreadCrumbs crumbs={[{ name: 'Home' }]} />

    <div className="container">
      {data.categories.edges.map(({ node }) => (
        <Link to={getCategoryPath(node)} key={node.id}>
          <div className="card">
            <div className="card-content">
              <div className="content">{node.name}</div>
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
        }
      }
    }
  }
`;
