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
    <div className="container mx-auto text-center">
      <p>Please select a category</p>

      <ul className="flex flex-wrap">
        {data.categories.edges.map(({ node }) => (
          <li key={node.id} className="w-full sm:w-1/2">
            <Link
              to={node.fields.slug}
              className="no-underline p-1 block md:p-3 h-full"
            >
              <ListCard>{node.frontmatter.title}</ListCard>
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
