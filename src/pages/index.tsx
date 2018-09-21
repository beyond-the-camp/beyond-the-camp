import * as React from 'react';
import { graphql, Link } from 'gatsby';

interface LanguageNode {
  id: string;
  name: string;
  locale: string;
}

interface Props {
  data: {
    language: {
      edges: Array<{
        node: LanguageNode;
      }>;
    };
  };
}

export default ({ data }: Props) => (
  <section>
    <ul>
      {data.language.edges.map(({ node }) => (
        <li key={node.id}>
          <Link to={node.locale}>{node.name}</Link>
        </li>
      ))}
    </ul>
  </section>
);

export const query = graphql`
  query Languages {
    language: allDatoCmsLanguage {
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
