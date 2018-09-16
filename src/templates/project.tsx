import * as React from 'react';
import { graphql } from 'gatsby';

interface Props {
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

export default ({ data }: Props) => (
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
  query ProjectQuery($slug: String!) {
    datoCmsProject(slug: { eq: $slug }) {
      title
      descriptionNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
