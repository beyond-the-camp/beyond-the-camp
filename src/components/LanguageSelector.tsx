import * as React from 'react';

import { Link } from 'gatsby';

import { getLanguageName, getLocaleList } from '../utils/languages';
import { LocaleType } from '../utils/types';

export type LocaleLinks = Record<LocaleType, string>;

const getLink = (locale: LocaleType, links?: LocaleLinks): string => {
  if (links && links[locale]) {
    return links[locale];
  }
  return `/${locale}`;
};

interface Props {
  currentLocale: LocaleType;
  links?: LocaleLinks;
}

const LanguageSelector = ({ currentLocale, links }: Props) => (
  <div className="navbar-item has-dropdown is-hoverable">
    <a className="navbar-link has-text-white">
      {getLanguageName(currentLocale)}
    </a>

    <div className="navbar-dropdown">
      {getLocaleList().map(locale => (
        <Link key={locale} className="navbar-item" to={getLink(locale, links)}>
          {getLanguageName(locale)}
        </Link>
      ))}
    </div>
  </div>
);

export default LanguageSelector;
