import * as React from 'react';

import { graphql } from 'gatsby';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

export interface HeroMedia {
  childImageSharp: {
    gatsbyImageData: IGatsbyImageData;
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
      {media &&
        (isFluidMedia(media) ? (
          <GatsbyImage
            alt="Hero image"
            image={media.childImageSharp.gatsbyImageData}
            className="w-full h-full"
          />
        ) : (
          <img
            alt=""
            className="absolute top-0 left-0 object-cover object-center w-full h-full"
            src={media}
          />
        ))}
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
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
`;
