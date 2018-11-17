import * as React from 'react';

import { graphql, Link } from 'gatsby';

import { Card, CardContent, Container, Content, Section, Title } from 'bloomer';

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
  <Section>
    <Container>
      <Title>{data.category.name}</Title>
      {data.projects &&
        data.projects.edges.map(({ node }) => (
          <Link to={getProjectPath(node)}>
            <Card>
              <CardContent>
                <Content>{node.title}</Content>
              </CardContent>
            </Card>
          </Link>
        ))}
    </Container>
  </Section>
);

export const query = graphql`
  query CategoryPageQuery($id: String!) {
    category: wordpressCategory(id: { eq: $id }) {
      name
    }

    projects: allWordpressWpProject(
      filter: { categories: { elemMatch: { id: { eq: $id } } } }
    ) {
      edges {
        node {
          wordpress_id
          slug
          polylang_current_lang
          title
          categories {
            id
            name
          }
        }
      }
    }
  }
`;
