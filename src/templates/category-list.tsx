import * as React from 'react';

import { graphql, Link } from 'gatsby';

import { Card, Layout, PlainList } from '../components';

interface CategoryNode {
  id: string;
  polylang_current_lang: string;
  slug: string;
  name: string;
}

function getCategoryPath(category: CategoryNode): string {
  return `${category.polylang_current_lang}/categories/${category.slug}`;
}

interface Props {
  data: {
    categories: {
      edges: Array<{
        node: CategoryNode;
      }>;
    };
  };
}

export default ({ data }: Props) => (
  <Layout>
    <section>
      <h2>Categories</h2>
      <PlainList>
        {data.categories.edges.map(({ node }) => (
          <li key={node.id}>
            <Link to={getCategoryPath(node)}>
              <Card title={node.name} />
            </Link>
          </li>
        ))}
      </PlainList>
    </section>
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
