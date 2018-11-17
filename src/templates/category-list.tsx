import * as React from 'react';

import { Card, CardContent, Content, Title } from 'bloomer';
import { graphql, Link } from 'gatsby';

import Layout from '../components/Layout';

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
    <Title>Categories</Title>
    {data.categories.edges.map(({ node }) => (
      <Link to={getCategoryPath(node)}>
        <Card>
          <CardContent>
            <Content>{node.name}</Content>
          </CardContent>
        </Card>
      </Link>
    ))}
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
