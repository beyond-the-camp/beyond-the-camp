import * as React from 'react';

import { graphql } from 'gatsby';
import { Layout } from '../components/Layout';

interface Props {
  data: {
    project: {
      title: string;
      content: string;
    };
  };
}

export default ({ data }: Props) => (
  <Layout>
    <article>
      <h1>{data.project.title}</h1>
      <section
        dangerouslySetInnerHTML={{
          __html: data.project.content
        }}
      />
    </article>
  </Layout>
);

export const query = graphql`
  query ProjectPageQuery($id: String!) {
    project: wordpressWpProject(id: { eq: $id }) {
      title
      content
    }
  }
`;
