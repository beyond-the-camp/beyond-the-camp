import * as React from 'react';

import { graphql, Link } from 'gatsby';

import { Layout } from '../components/Layout';
import { ListCard } from '../components/ListCard';
import { LocaleType } from '../utils/types';

interface CategoryNode {
  id: string;
  fields: {
    slug: string;
  };
  frontmatter: {
    title: string;
  };
}

interface Props {
  data: {
    categories: {
      edges: Array<{
        node: CategoryNode;
      }>;
    };
  };
  pageContext: {
    language: LocaleType;
  };
}

const Categories = ({ data, pageContext }: Props) => (
  <Layout language={pageContext.language}>
    <div className="container mx-auto">
      <ul className="list-reset flex flex-wrap -mx-2">
        {data.categories.edges.map(({ node }) => (
          <li key={node.id} className="w-full max-w-sm md:w-1/2 px-2 mb-2">
            <Link to={node.fields.slug} className="no-underline">
              <ListCard>
                <div>{node.frontmatter.title}</div>
              </ListCard>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </Layout>
);

export default Categories;

export const query = graphql`
  query CategoriesQuery($language: String!) {
    categories: allMarkdownRemark(
      filter: {
        fields: {
          contentType: { eq: "categories" }
          language: { eq: $language }
        }
      }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
