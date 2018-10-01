import * as React from 'react';

import { graphql } from 'gatsby';
import { Layout } from '../components/Layout';

interface Props {
  data: {
    project: {
      title: string;
      descriptionNode: {
        childMarkdownRemark: {
          html: string;
        };
      };
    };
  };
}

export default ({ data }: Props) => (
  <Layout>
    <article>
      <h2>{data.project.title}</h2>
      <section
        dangerouslySetInnerHTML={{
          __html: data.project.descriptionNode.childMarkdownRemark.html
        }}
      />
    </article>
  </Layout>
);

export const query = graphql`
  query ProjectPageQuery($slug: String!, $locale: String!) {
    project: datoCmsProject(slug: { eq: $slug }, locale: { eq: $locale }) {
      title
      descriptionNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
