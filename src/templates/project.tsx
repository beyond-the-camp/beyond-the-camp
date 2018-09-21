import * as React from 'react';

import { graphql } from 'gatsby';

interface IProps {
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

export default ({ data }: IProps) => (
  <article>
    <h1>{data.project.title}</h1>
    <section
      dangerouslySetInnerHTML={{
        __html: data.project.descriptionNode.childMarkdownRemark.html
      }}
    />
  </article>
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
