import * as React from 'react';

import { graphql, Link } from 'gatsby';

interface ICategoryNode {
  id: string;
  locale: string;
  slug: string;
  title: string;
}

function getCategoryPath(category: ICategoryNode): string {
  return `${category.locale}/category/${category.slug}`;
}

interface IProps {
  data: {
    home: {
      categoriesTitle: string;
    };
    category: {
      edges: Array<{
        node: ICategoryNode;
      }>;
    };
  };
}

export default ({ data }: IProps) => (
  <section>
    <h1>{data.home.categoriesTitle}</h1>
    <ul>
      {data.category.edges.map(({ node }) => (
        <li key={node.id}>
          <Link to={getCategoryPath(node)}>{node.title}</Link>
        </li>
      ))}
    </ul>
  </section>
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
