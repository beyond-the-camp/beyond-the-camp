import * as React from 'react';

import { graphql, Link } from 'gatsby';

interface ILanguageNode {
  id: string;
  name: string;
  locale: string;
}

interface IProps {
  data: {
    language: {
      edges: Array<{
        node: ILanguageNode;
      }>;
    };
  };
}

export default ({ data }: IProps) => (
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
