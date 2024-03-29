import * as React from 'react';

import { graphql, HeadProps, Link } from 'gatsby';

import { Layout, ListCard } from '../components';
import { LocaleType } from '../utils/types';
import { getTextDirection } from '../utils/languages';

interface ProjectNode {
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
    projects?: {
      edges: Array<{
        node: ProjectNode;
      }>;
    };
  };
  pageContext: {
    language: LocaleType;
    category: string;
  };
}

export const Head = ({
  pageContext,
}: HeadProps<unknown, Props['pageContext']>) => {
  const { language } = pageContext;

  return (
    <>
      <title>BeyondMoria</title>
      <html lang={language} dir={getTextDirection(language)} />
      <link
        href="https://fonts.googleapis.com/css?family=Quicksand:400,700&display=swap"
        rel="stylesheet"
      />
    </>
  );
};

const Category = (props: Props) => {
  const { data, pageContext } = props;

  return (
    <Layout language={pageContext.language}>
      <div className="container text-center">
        <h1>{pageContext.category}</h1>
        <ul className="flex flex-wrap">
          {data.projects &&
            data.projects.edges.map(({ node }) => (
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
};

export default Category;

export const query = graphql`
  query CategoryQuery($language: String!, $category: String!) {
    projects: allMarkdownRemark(
      filter: {
        fields: { contentType: { eq: "projects" }, language: { eq: $language } }
        frontmatter: { categories: { in: [$category] } }
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
