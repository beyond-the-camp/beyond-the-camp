import * as React from 'react';

import { graphql } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';

export interface HeroMedia {
  childImageSharp: {
    fluid: FluidObject;
  };
}

interface Props {
  media?: HeroMedia | string;
  title: string;
}

function isFluidMedia(media: HeroMedia | string): media is HeroMedia {
  return (media as HeroMedia).childImageSharp !== undefined;
}

export const HeroTitle = ({ media, title }: Props) => (
  <section className="relative flex items-stretch flex-col content-between py-12 md:py-32 mb-6 text-center">
    <div className="absolute inset-0">
      {media && isFluidMedia(media) && (
        <Img className="w-full h-full" fluid={media.childImageSharp.fluid} />
      )}
      {media && !isFluidMedia(media) && (
        <img
          className="absolute top-0 left-0 object-cover object-center w-full h-full"
          src={media}
        />
      )}
    </div>
    <div className="absolute inset-0 bg-black opacity-50 w-full h-full" />
    <div className="container z-10">
      <h1
        className="text-5xl text-white mb-0"
        dangerouslySetInnerHTML={{ __html: title }}
      />
    </div>
  </section>
);

export const query = graphql`
  fragment HeroMediaFragment on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;
