import * as React from 'react';
import { graphql, Link } from 'gatsby';

interface Project {
  id: string;
  locale: string;
  slug: string;
  title: string;
}

function getProjectPath(project: Project): string {
  const prefix = project.locale !== 'en' ? `/${project.locale}` : '';
  return `${prefix}/projects/${project.slug}`;
}

interface Props {
  data: {
    allDatoCmsProject: {
      edges: Array<{
        node: Project;
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
          <Link to={getProjectPath(node)}>{node.title}</Link>
        </li>
      ))}
    </ul>
  </section>
);

export const pageQuery = graphql`
  query AllProjectsQuery {
    allDatoCmsProject {
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
