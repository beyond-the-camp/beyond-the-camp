import * as React from 'react';

import { useState } from 'react';
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

export const LanguageSelector = (props: Props) => {
  const [showMenu, setShowMenu] = useState(false);
  const { currentLocale, links } = props;

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setShowMenu(prevShowMenu => !prevShowMenu)}
        className="hover:opacity-50 text-white"
      >
        {getLanguageName(currentLocale)}
      </button>
      {showMenu && (
        <div className="absolute block right-0 bg-white p-3 z-50 border-black shadow-md">
          {getLocaleList().map(locale => (
            <p key={locale} className="m-0">
              <Link to={getLink(locale, links)}>{getLanguageName(locale)}</Link>
            </p>
          ))}
        </div>
      )}
    </div>
  );
};
