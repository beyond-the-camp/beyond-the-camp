import * as React from 'react';

import { graphql } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';

import { FormattedMessage } from 'react-intl';
import BreadCrumbs from '../components/BreadCrumbs';
import HeroTitle from '../components/HeroTitle';
import { LocaleLinks } from '../components/LanguageSelector';
import Layout from '../components/Layout';
import LocationInfo from '../components/LocationInfo';
import OpeningTimes, { OpeningDays } from '../components/OpeningTimes';
import { getPrimaryLocale } from '../utils/languages';
import * as routes from '../utils/routes';
import { LocaleType } from '../utils/types';

const getLocaleLinks = (props: Props): LocaleLinks => {
  const links: Partial<LocaleLinks> = {
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

  return links as LocaleLinks;
};

interface FeaturedMedia {
  localFile: {
    childImageSharp: {
      fluid: FluidObject;
    };
  };
}

interface Props {
  data: {
    project: {
      slug: string;
      title: string;
      content: string;
      polylang_current_lang: LocaleType;
      polylang_translations: Array<{
        polylang_current_lang: LocaleType;
        slug: string;
        featured_media: FeaturedMedia | null;
      }>;
      opening_times: OpeningDays;
      featured_media: FeaturedMedia | null;
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

const getFeaturedMedia = (props: Props): FeaturedMedia => {
  const featuredMedia = props.data.project.featured_media;
  if (featuredMedia) {
    return featuredMedia;
  }

  const projectEnglish = props.data.project.polylang_translations.find(
    translation => translation.polylang_current_lang === getPrimaryLocale()
  );
  if (projectEnglish) {
    return projectEnglish.featured_media;
  }

  return null;
};

export default (props: Props) => {
  const { data } = props;
  const { opening_times } = data.project;
  const featuredMedia = getFeaturedMedia(props);

  return (
    <Layout
      currentLocale={data.project.polylang_current_lang}
      localeLinks={getLocaleLinks(props)}
    >
      <BreadCrumbs
        crumbs={[
          {
            text: <FormattedMessage id="HOME" />,
            link: routes.getHomePath(data.project.polylang_current_lang)
          },
          {
            text: data.category.name,
            link: routes.getCategoryPath(
              data.project.polylang_current_lang,
              data.category.slug
            )
          },
          {
            text: data.project.title
          }
        ]}
      />

      <HeroTitle media={featuredMedia} title={data.project.title} />

      <section className="mt-3 flex flex-row flex-wrap justify-between">
        <article
          className="w-full md:w-1/2 flex-grow bg-white border rounded p-4 mx-2 mb-4"
          dangerouslySetInnerHTML={{
            __html: data.project.content
          }}
        />
        <aside className="w-full md:w-1/3 mx-2">
          <div className="flex flex-col">
            <section className="bg-white border rounded p-4 mb-4">
              <OpeningTimes days={opening_times} />
            </section>
            <section className="bg-white border rounded p-4">
              <LocationInfo />
            </section>
          </div>
        </aside>
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
        featured_media {
          ...HeroMediaFragment
        }
        opening_times: acf {
          ...OpeningTimesFragment
        }
      }
      featured_media {
        ...HeroMediaFragment
      }
      opening_times: acf {
        ...OpeningTimesFragment
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
