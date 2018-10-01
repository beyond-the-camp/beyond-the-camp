import * as React from 'react';

import { graphql, Link } from 'gatsby';

import { Card, Layout, PlainList } from '../components';

interface CategoryNode {
  id: string;
  locale: string;
  slug: string;
  title: string;
}

function getCategoryPath(category: CategoryNode): string {
  return `${category.locale}/category/${category.slug}`;
}

interface Props {
  data: {
    home: {
      categoriesTitle: string;
    };
    category: {
      edges: Array<{
        node: CategoryNode;
      }>;
    };
  };
}

export default ({ data }: Props) => (
  <Layout>
    <section>
      <h2>{data.home.categoriesTitle}</h2>
      <PlainList>
        {data.category.edges.map(({ node }) => (
          <li key={node.id}>
            <Link to={getCategoryPath(node)}>
              <Card title={node.title} />
            </Link>
          </li>
        ))}
      </PlainList>
    </section>
  </Layout>
);

export const query = graphql`
  query HomeDataQuery($locale: String!) {
    home: datoCmsHome(locale: { eq: $locale }) {
      categoriesTitle
    }

    category: allDatoCmsCategory(filter: { locale: { eq: $locale } }) {
      edges {
        node {
          id
          locale
          slug
          title
        }
      }
    }
  }
`;
