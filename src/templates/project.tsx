import * as React from 'react';

import { graphql } from 'gatsby';

interface IProps {
  data: {
    datoCmsProject: {
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
    <h1>{data.datoCmsProject.title}</h1>
    <section
      dangerouslySetInnerHTML={{
        __html: data.datoCmsProject.descriptionNode.childMarkdownRemark.html
      }}
    />
  </article>
);

export const query = graphql`
  query ProjectQuery($slug: String!, $locale: String!) {
    datoCmsProject(slug: { eq: $slug }, locale: { eq: $locale }) {
      title
      descriptionNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
