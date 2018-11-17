import * as React from 'react';

import { graphql, Link } from 'gatsby';

import { Card, Layout, PlainList } from '../components';

interface ProjectNode {
  wordpress_id: number;
  slug: string;
  polylang_current_lang: string;
  title: string;
}

function getProjectPath(project: ProjectNode): string {
  return `${project.polylang_current_lang}/projects/${project.slug}`;
}

interface Props {
  data: {
    category: {
      name: string;
    };

    projects?: {
      edges: Array<{
        node: ProjectNode;
      }>;
    };
  };
}

export default ({ data }: Props) => (
  <Layout>
    <article>
      <h2>{data.category.name}</h2>
      <section>
        <PlainList>
          {data.projects &&
            data.projects.edges.map(({ node }) => (
              <li key={node.wordpress_id}>
                <Link to={getProjectPath(node)}>
                  <Card title={node.title} />
                </Link>
              </li>
            ))}
        </PlainList>
      </section>
    </article>
  </Layout>
);

export const query = graphql`
  query CategoryPageQuery($id: String!) {
    category: wordpressCategory(id: { eq: $id }) {
      name
    }

    projects: allWordpressWpProject(
      filter: { categories: { id: { eq: $id } } }
    ) {
      edges {
        node {
          wordpress_id
          slug
          polylang_current_lang
          title
        }
      }
    }
  }
`;
