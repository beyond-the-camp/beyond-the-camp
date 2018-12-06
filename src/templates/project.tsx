import * as React from 'react';

import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import { LinksData } from '../components/LanguageSelector';
import Layout from '../components/Layout';
import * as routes from '../utils/routes';

const getLinks = (props: Props): LinksData => {
  const links: { [locale: string]: string } = {
    [props.data.project.polylang_current_lang]: routes.getProjectPath(
      props.data.project.polylang_current_lang,
      props.data.category.slug,
      props.data.project.slug
    )
  };

  props.data.project.polylang_translations.forEach(translation => {
    const lang = translation.polylang_current_lang;
    const project = translation.slug;
    const category = props.data.category.polylang_translations.find(
      cat => cat.polylang_current_lang === lang
    ).slug;

    if (category) {
      links[lang] = routes.getProjectPath(lang, category, project);
    }
  });

  return links;
};

interface Props {
  data: {
    project: {
      slug: string;
      title: string;
      content: string;
      polylang_current_lang: string;
      polylang_translations: Array<{
        polylang_current_lang: string;
        slug: string;
      }>;
      featured_media: {
        localFile: {
          childImageSharp: {
            fluid: object;
          };
        };
      };
    };

    category: {
      name: string;
      slug: string;
      polylang_translations: Array<{
        polylang_current_lang: string;
        slug: string;
      }>;
    };
  };
}

export default (props: Props) => {
  const { data } = props;
  const featuredMedia = data.project.featured_media;
  return (
    <Layout
      currentLocale={data.project.polylang_current_lang}
      links={getLinks(props)}
    >
      <div className="container">
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
                  data.category.slug
                )}
              >
                {data.category.name}
              </Link>
            </li>
            <li className="is-active">
              <Link to="">{data.project.title}</Link>
            </li>
          </ul>
        </nav>
      </div>

      <section className="hero is-medium">
        <div className="hero-body feature_container">
          <div className="container">
            <h1 className="title has-text-white">{data.project.title}</h1>
          </div>
          {featuredMedia && (
            <Img
              fluid={featuredMedia.localFile.childImageSharp.fluid}
              className="feature_image"
              style={{ position: 'absolute' }}
            />
          )}
        </div>
      </section>
      <article
        className="container content"
        dangerouslySetInnerHTML={{
          __html: data.project.content
        }}
      />
    </Layout>
  );
};

export const query = graphql`
  query ProjectPageQuery($id: String!, $categoryId: String!) {
    project: wordpressWpProject(id: { eq: $id }) {
      slug
      title
      content
      polylang_current_lang
      polylang_translations {
        polylang_current_lang
        slug
      }
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

    category: wordpressCategory(id: { eq: $categoryId }) {
      name
      slug
      polylang_translations {
        polylang_current_lang
        slug
      }
    }
  }
`;
