import * as React from 'react';
import { graphql, Link } from 'gatsby';

interface Props {
  data: {
    allDatoCmsProject: {
      edges: Array<{
        node: {
          id: string;
          slug: string;
          title: string;
        };
      }>;
    };
  };
}

export default ({ data }: Props) => (
  <section>
    <h1>Available projects:</h1>
    <ul>
      {data.allDatoCmsProject.edges.map(({ node }) => (
        <li key={node.id}>
          <Link to={`/projects/${node.slug}`}>{node.title}</Link>
        </li>
      ))}
    </ul>
  </section>
);

export const pageQuery = graphql`
  query AllProjectsQuery {
    allDatoCmsProject(filter: { locale: { eq: "en" } }) {
      edges {
        node {
          id
          slug
          title
        }
      }
    }
  }
`;
