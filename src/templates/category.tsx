import * as React from 'react';

import { graphql, Link } from 'gatsby';

interface ProjectNode {
  id: string;
  locale: string;
  title: string;
  slug: string;
}

function getProjectPath(project: ProjectNode): string {
  return `${project.locale}/projects/${project.slug}`;
}

interface Props {
  data: {
    category: {
      title: string;
    };

    project?: {
      edges: Array<{
        node: ProjectNode;
      }>;
    };
  };
}

export default ({ data }: Props) => (
  <article>
    <h1>{data.category.title}</h1>
    <section>
      <ul>
        {data.project &&
          data.project.edges.map(({ node }) => (
            <li key={node.id}>
              <Link to={getProjectPath(node)}>{node.title}</Link>
            </li>
          ))}
      </ul>
    </section>
  </article>
);

export const query = graphql`
  query CategoryPageQuery($slug: String!, $locale: String!) {
    category: datoCmsCategory(slug: { eq: $slug }, locale: { eq: $locale }) {
      title
    }

    project: allDatoCmsProject(
      filter: { category: { slug: { eq: $slug } }, locale: { eq: $locale } }
    ) {
      edges {
        node {
          id
          locale
          title
          slug
        }
      }
    }
  }
`;
