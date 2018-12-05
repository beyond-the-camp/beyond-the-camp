import * as React from 'react';

import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/Layout';
import * as routes from '../utils/routes';

interface Props {
  data: {
    project: {
      title: string;
      content: string;
      polylang_current_lang: string;
      featured_media: {
        localFile: {
          childImageSharp: {
            fluid: object;
          };
        };
      };
    };
  };
  pageContext: {
    category: {
      name: string;
      slug: string;
    };
  };
}

export default ({ data, pageContext }: Props) => {
  const featureMedia = data.project.featured_media;
  return (
    <Layout currentLocale={data.project.polylang_current_lang}>
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

      <section className="hero is-medium">
        <div className="hero-body feature_container">
          <div className="container">
            <h1 className="title has-text-white">{data.project.title}</h1>
          </div>
          {featureMedia && (
            <Img
              fluid={featureMedia.localFile.childImageSharp.fluid}
              className="feature_image"
              style={{ position: 'absolute' }}
            />
          )}
        </div>
      </section>
      <article
        className="content"
        dangerouslySetInnerHTML={{
          __html: data.project.content
        }}
      />
    </Layout>
  );
};

export const query = graphql`
  query ProjectPageQuery($id: String!) {
    project: wordpressWpProject(id: { eq: $id }) {
      title
      content
      polylang_current_lang
      featured_media {
        localFile {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
