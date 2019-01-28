import * as React from 'react';

import { graphql } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';

interface Props {
  media?: {
    localFile: {
      childImageSharp: {
        fluid: FluidObject;
      };
    };
  };
  title: string;
}

const HeroTitle = ({ media, title }: Props) => (
  <section className="relative flex items-stretch flex-col content-between px-4 py-12 md:py-32">
    <div className="absolute pin">
      {media && (
        <Img
          className="w-full h-full"
          fluid={media.localFile.childImageSharp.fluid}
        />
      )}
    </div>
    <div className="absolute pin bg-black opacity-50 w-full h-full" />
    <h1
      className="z-10 text-white mb-0"
      dangerouslySetInnerHTML={{ __html: title }}
    />
  </section>
);

export default HeroTitle;

export const query = graphql`
  fragment HeroMediaFragment on wordpress__wp_media {
    localFile {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
