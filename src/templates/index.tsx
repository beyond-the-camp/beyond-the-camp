import * as React from 'react';
import { graphql, Link } from 'gatsby';

interface Project {
  id: string;
  locale: string;
  slug: string;
  title: string;
}

function getProjectPath(project: Project): string {
  return `${project.locale}/projects/${project.slug}`;
}

interface Props {
  data: {
    home: {
      categoriesTitle: string;
    };
    project: {
      edges: Array<{
        node: Project;
      }>;
    };
  };
}

export default ({ data }: Props) => (
  <section>
    <h1>{data.home.categoriesTitle}</h1>
    <ul>
      {data.project.edges.map(({ node }) => (
        <li key={node.id}>
          <Link to={getProjectPath(node)}>{node.title}</Link>
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

    project: allDatoCmsProject(filter: { locale: { eq: $locale } }) {
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
