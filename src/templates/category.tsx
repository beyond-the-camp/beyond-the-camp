import * as React from 'react';

import { graphql, Link } from 'gatsby';

interface IProjectNode {
  id: string;
  locale: string;
  title: string;
  slug: string;
}

function getProjectPath(project: IProjectNode): string {
  return `${project.locale}/projects/${project.slug}`;
}

interface IProps {
  data: {
    category: {
      title: string;
    };

    project?: {
      edges: Array<{
        node: IProjectNode;
      }>;
    };
  };
}

export default ({ data }: IProps) => (
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
