import * as React from 'react';

import { graphql } from 'gatsby';
import { FluidObject } from 'gatsby-image';

import { HeroTitle } from '../components/HeroTitle';
import { Layout } from '../components/Layout';
import { LocationInfo } from '../components/LocationInfo';
import { OpeningTimes } from '../components/OpeningTimes';
import { LocaleType } from '../utils/types';

interface CoverImage {
  childImageSharp: {
    fluid: FluidObject;
  };
}

interface Props {
  data: {
    project: {
      fields: {
        slug: string;
        language: LocaleType;
      };
      frontmatter: {
        title: string;
        cover: CoverImage;
        categories: string[];
      };
      html: string;
    };
  };
}

const Project = (props: Props) => {
  const { data } = props;

  return (
    <Layout language={data.project.fields.language}>
      <HeroTitle
        media={data.project.frontmatter.cover}
        title={data.project.frontmatter.title}
      />

      <div className="mx-auto container mt-3">
        <section className="-mx-2 flex flex-row flex-wrap justify-between">
          <article
            className="w-full md:w-1/2 flex-grow bg-white border rounded p-4 mx-2 my-2"
            dangerouslySetInnerHTML={{
              __html: data.project.html
            }}
          />
          <aside className="w-full md:w-1/3 mx-2 my-2">
            <div className="flex flex-col">
              <section className="bg-white border rounded p-4 mb-4">
                <OpeningTimes days={{}} />
              </section>
              <section className="bg-white border rounded p-4">
                <LocationInfo />
              </section>
            </div>
          </aside>
        </section>
      </div>
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
      }
      html
    }
  }
`;
