import * as React from 'react';

import { Link } from 'gatsby';

import { getLanguageName, getLocaleList } from '../utils/languages';

export interface LinksData {
  [locale: string]: string;
}

const getLink = (locale: string, links?: LinksData): string => {
  if (links && links[locale]) {
    return links[locale];
  }
  return `/${locale}`;
};

interface Props {
  currentLocale: string;
  links?: LinksData;
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
