import * as React from 'react';

import { graphql, Link } from 'gatsby';

import Layout from '../components/Layout';
import * as routes from '../utils/routes';

interface Props {
  data: {
    project: {
      title: string;
      content: string;
      polylang_current_lang: string;
    };
  };
  pageContext: {
    category: {
      name: string;
      slug: string;
    };
  };
}

export default ({ data, pageContext }: Props) => (
  <Layout>
    <nav className="breadcrumb">
      <ul>
        <li>
          <Link to={routes.getHomePath(data.project.polylang_current_lang)}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to={routes.getCategoryPath(
              data.project.polylang_current_lang,
              pageContext.category.slug
            )}
          >
            {pageContext.category.name}
          </Link>
        </li>
        <li className="is-active">
          <Link to="">{data.project.title}</Link>
        </li>
      </ul>
    </nav>

    <h1 className="title">{data.project.title}</h1>
    <div className="content">
      <section
        dangerouslySetInnerHTML={{
          __html: data.project.content
        }}
      />
    </div>
  </Layout>
);

export const query = graphql`
  query ProjectPageQuery($id: String!) {
    project: wordpressWpProject(id: { eq: $id }) {
      title
      content
      polylang_current_lang
    }
  }
`;
