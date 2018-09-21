import * as React from 'react';

import { graphql, Link } from 'gatsby';

interface IProjectNode {
  id: string;
  locale: string;
  slug: string;
  title: string;
}

function getProjectPath(project: IProjectNode): string {
  return `${project.locale}/projects/${project.slug}`;
}

const ProjectItem = ({ node }: { node: IProjectNode }) => (
  <li key={node.id}>
    <Link to={getProjectPath(node)}>{node.title}</Link>
  </li>
);

interface IProps {
  data: {
    home: {
      categoriesTitle: string;
    };
    project: {
      edges: Array<{
        node: IProjectNode;
      }>;
    };
  };
}

export default ({ data }: IProps) => (
  <section>
    <h1>{data.home.categoriesTitle}</h1>
    <ul>
      {data.project.edges.map(({ node }) => (
        <ProjectItem node={node} />
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
