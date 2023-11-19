import * as React from 'react';

import { HeadProps, PageProps, graphql } from 'gatsby';
import { getTextDirection } from '../utils/languages';
import { LocaleType } from '../utils/types';

import { HeroMedia } from '../components/HeroTitle';
import {
  HeroTitle,
  Layout,
  OpeningTimes,
  Location,
  Information,
} from '../components';

interface OpeningTime {
  day: string;
  open: string;
  close: string;
}

interface TemplateProps {
  title: string;
  cover: HeroMedia | string;
  openingTimes: OpeningTime[];
  location?: {
    description: string;
  };
  html?: string;
  children?: React.ReactNode;
}

export const ProjectTemplate = (props: TemplateProps) => {
  const { title, cover, openingTimes, location, html } = props;

  const locationText = location && location.description;

  return (
    <div className="-mt-8">
      <HeroTitle media={cover} title={title} />

      <div className="max-w-3xl mx-auto px-4 text-center">
        <article className="mb-4">
          <Information html={html}>{props.children}</Information>
        </article>
        <aside className="md:flex flex-row flex-wrap justify-between">
          <div className="mb-4 md:w-2/5 h-full md:mr-4 flex-grow">
            <OpeningTimes days={openingTimes} />
          </div>
          <div className="md:w-2/5 h-full flex-grow text-center">
            <Location text={locationText} />
          </div>
        </aside>
      </div>
    </div>
  );
};

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
        }
      }
      html
    }
  }
`;

interface ProjectQueryResult {
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
      };
    };
    html: string;
  };
}

const Project = ({ data }: PageProps<ProjectQueryResult>) => {
  const project = data.project;
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

export const Head = ({ data }: HeadProps<ProjectQueryResult>) => {
  const language = data.project.fields.language;

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
