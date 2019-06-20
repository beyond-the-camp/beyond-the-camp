import * as React from 'react';

import { graphql } from 'gatsby';

import { HeroTitle, HeroMedia } from '../components/HeroTitle';
import { Layout } from '../components/Layout';
import { LocationInfo } from '../components/LocationInfo';
import { OpeningTimes } from '../components/OpeningTimes';
import { LocaleType } from '../utils/types';

interface OpeningTime {
  day: string;
  open: string;
  close: string;
}

interface TemplateProps {
  title: string;
  cover: HeroMedia;
  openingTimes: OpeningTime[];
  location?: {
    description: string;
    showMap: boolean;
    geo: string;
  };
  html: string;
}

export const ProjectTemplate = (props: TemplateProps) => {
  const { title, cover, openingTimes, location, html } = props;

  const showMap = location && location.showMap;
  const mapText = location && location.description;
  const mapGeo: { coordinates: [number, number] } =
    location && location.geo && JSON.parse(location.geo);
  const mapCoordinates = showMap && mapGeo ? mapGeo.coordinates : null;

  return (
    <div className="-mt-8">
      <HeroTitle media={cover} title={title} />

      <div className="max-w-3xl mx-auto px-4 text-center">
        <article className="bg-white border p-4 mb-4">
          <h3 className="text-center">Information</h3>
          <div
            dangerouslySetInnerHTML={{
              __html: html
            }}
          />
        </article>
        <aside className="md:flex flex-row flex-wrap justify-between">
          <div className="bg-white border p-4 mb-4 md:w-2/5 h-full md:mr-4 flex-grow">
            <OpeningTimes days={openingTimes} />
          </div>
          <div className="bg-white border p-4 md:w-2/5 h-full flex-grow text-center">
            <LocationInfo text={mapText} position={mapCoordinates} />
          </div>
        </aside>
      </div>
    </div>
  );
};

interface PageProps {
  data: {
    project: {
      fields: {
        slug: string;
        language: LocaleType;
      };
      frontmatter: {
        title: string;
        cover: HeroMedia;
        categories: string[];
        openingTimes: OpeningTime[];
        location?: {
          description: string;
          showMap: boolean;
          geo: string;
        };
      };
      html: string;
    };
  };
}

const Project = (props: PageProps) => {
  const {
    data: { project }
  } = props;
  const { html, frontmatter, fields } = project;
  const { title, cover, openingTimes, location } = frontmatter;

  return (
    <Layout language={fields.language}>
      <ProjectTemplate
        title={title}
        cover={cover}
        html={html}
        openingTimes={openingTimes}
        location={location}
      />
    </Layout>
  );
};

export default Project;

export const projectQuery = graphql`
  query ProjectPageQuery($id: String!) {
    project: markdownRemark(id: { eq: $id }) {
      fields {
        slug
        language
      }
      frontmatter {
        title
        cover {
          ...HeroMediaFragment
        }
        categories
        openingTimes {
          day
          open
          close
        }
        location {
          description
          showMap
          geo
        }
      }
      html
    }
  }
`;
