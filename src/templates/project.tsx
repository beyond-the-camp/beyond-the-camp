import * as React from 'react';

import { graphql, Link } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

import BreadCrumbs from '../components/BreadCrumbs';
import { LocaleLinks } from '../components/LanguageSelector';
import Layout from '../components/Layout';
import * as routes from '../utils/routes';

const getLocaleLinks = (props: Props): LocaleLinks => {
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

const getDayElement = (day: string, times?: OpeningTimes) => {
  return {
    day,
    times: times
      ? {
          open: times.open,
          close: times.close
        }
      : { open: '', close: '' }
  };
};

const getOpeningTimeData = (
  days: OpeningDays
): Array<{ day: string; times: OpeningTimes }> => {
  // return [
  //   getDayElement('Monday', days.monday),
  //   getDayElement('Tuesday', days.tuesday),
  //   getDayElement('Wednesday', days.wednesday),
  //   getDayElement('Thursday', days.thursday),
  //   getDayElement('Friday', days.friday),
  //   getDayElement('Saturday', days.saturday),
  //   getDayElement('Sunday', days.sunday)
  // ];
  return sampleDays;
};

const sampleDays: Array<{ day: string; times: OpeningTimes }> = [
  { day: 'Monday', times: { open: '', close: '' } },
  { day: 'Tuesday', times: { open: '', close: '' } },
  { day: 'Wednesday', times: { open: '', close: '' } },
  { day: 'Thursday', times: { open: '', close: '' } },
  { day: 'Friday', times: { open: '', close: '' } },
  { day: 'Saturday', times: { open: '', close: '' } },
  { day: 'Sunday', times: { open: '', close: '' } }
];

interface OpeningTimes {
  open: string;
  close: string;
}

interface OpeningDays {
  monday?: OpeningTimes;
  tuesday?: OpeningTimes;
  wednesday?: OpeningTimes;
  thursday?: OpeningTimes;
  friday?: OpeningTimes;
  saturday?: OpeningTimes;
  sunday?: OpeningTimes;
}

const LocationMap = () => {
  if (typeof window !== 'undefined') {
    return (
      <Map center={[51.505, -0.09]} zoom={13}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </Map>
    );
  }
  return null;
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
            fluid: FluidObject;
          };
        };
      };
      acf: OpeningDays;
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
  const { acf } = data.project;
  const featuredMedia = data.project.featured_media;
  return (
    <Layout
      currentLocale={data.project.polylang_current_lang}
      localeLinks={getLocaleLinks(props)}
    >
      <BreadCrumbs
        crumbs={[
          {
            name: 'Home',
            link: routes.getHomePath(data.project.polylang_current_lang)
          },
          {
            name: data.category.name,
            link: routes.getCategoryPath(
              data.project.polylang_current_lang,
              data.category.slug
            )
          },
          {
            name: data.project.title
          }
        ]}
      />

      <section className="hero is-medium">
        <div className="hero-body" style={{ position: 'relative' }}>
          <div className="overlay_dim" />
          {featuredMedia && (
            <Img
              fluid={featuredMedia.localFile.childImageSharp.fluid}
              className="feature_image"
              style={{ position: 'absolute' }}
            />
          )}
          <div className="container feature_text">
            <h1
              className="title has-text-white"
              dangerouslySetInnerHTML={{ __html: data.project.title }}
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="tile is-ancestor">
            <div className="tile is-parent is-8">
              <div className="tile is-child box">
                <article
                  className="content"
                  dangerouslySetInnerHTML={{
                    __html: data.project.content
                  }}
                />
              </div>
            </div>
            <aside className="tile is-parent is-vertical">
              <section className="tile is-child box">
                <p className="title is-5">Opening Times</p>
                {getOpeningTimeData(acf).map(day => (
                  <p key={day.day}>{`${day.day}: ${day.times.open} - ${
                    day.times.close
                  }`}</p>
                ))}
              </section>
              <section className="tile is-child box">
                <p className="title is-5">Location</p>
                <p>Find us here</p>
                <LocationMap />
              </section>
            </aside>
          </div>
        </div>
      </section>
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
