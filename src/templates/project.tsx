import * as React from 'react';

import { Container, Content, Section, Title } from 'bloomer';
import { graphql } from 'gatsby';

interface Props {
  data: {
    project: {
      title: string;
      content: string;
    };
  };
}

export default ({ data }: Props) => (
  <Section>
    <Container>
      <Title>{data.project.title}</Title>
      <Content>
        <section
          dangerouslySetInnerHTML={{
            __html: data.project.content
          }}
        />
      </Content>
    </Container>
  </Section>
);

export const query = graphql`
  query ProjectPageQuery($id: String!) {
    project: wordpressWpProject(id: { eq: $id }) {
      title
      content
    }
  }
`;
