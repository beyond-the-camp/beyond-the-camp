import * as React from 'react';

import { graphql, Link } from 'gatsby';

import Layout from '../components/Layout';
import * as routes from '../utils/routes';

interface CategoryNode {
  name: string;
  slug: string;
  polylang_current_lang: string;
}

interface ProjectNode {
  wordpress_id: number;
  slug: string;
  polylang_current_lang: string;
  title: string;
}

const getProjectPath = (category: CategoryNode, project: ProjectNode): string =>
  routes.getProjectPath(
    project.polylang_current_lang,
    category.slug,
    project.slug
  );

interface Props {
  data: {
    category: CategoryNode;

    projects?: {
      edges: Array<{
        node: ProjectNode;
      }>;
    };
  };
}

export default ({ data }: Props) => (
  <Layout>
    <nav className="breadcrumb">
      <ul>
        <li>
          <Link to={routes.getHomePath(data.category.polylang_current_lang)}>
            Home
          </Link>
        </li>
        <li className="is-active">
          <Link to="">{data.category.name}</Link>
        </li>
      </ul>
    </nav>
    <h1 className="title">{data.category.name}</h1>
    {data.projects &&
      data.projects.edges.map(({ node }) => (
        <Link to={getProjectPath(data.category, node)}>
          <div className="card">
            <div className="card-content">
              <div className="content">{node.title}</div>
            </div>
          </div>
        </Link>
      ))}
  </Layout>
);

export const query = graphql`
  query CategoryPageQuery($id: String!) {
    category: wordpressCategory(id: { eq: $id }) {
      name
      slug
      polylang_current_lang
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
