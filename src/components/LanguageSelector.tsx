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
        className="font-bold c-language-selector"
      >
        {getLanguageName(currentLocale)}
      </button>
      {showMenu && (
        <ul className="c-language-menu absolute block bg-primary z-50 shadow-md">
          {getLocaleList().map(locale => (
            <li key={locale} className="text-center text-bold">
              <Link
                className="block py-2 px-5 hover:bg-secondary"
                to={getLink(locale, links)}
              >
                {getLanguageName(locale)}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
