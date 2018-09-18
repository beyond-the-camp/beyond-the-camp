import * as React from 'react';
import { graphql, Link } from 'gatsby';

interface Language {
  id: string;
  name: string;
  locale: string;
}

interface Props {
  data: {
    allDatoCmsLanguage: {
      edges: Array<{
        node: Language;
      }>;
    };
  };
}

export default ({ data }: Props) => (
  <section>
    <ul>
      {data.allDatoCmsLanguage.edges.map(({ node }) => (
        <li key={node.id}>
          <Link to={node.locale}>{node.name}</Link>
        </li>
      ))}
    </ul>
  </section>
);

export const query = graphql`
  query Languages {
    allDatoCmsLanguage {
      edges {
        node {
          id
          name
          locale
        }
      }
    }
  }
`;
