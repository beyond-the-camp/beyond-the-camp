import * as React from 'react';

import { Link } from 'gatsby';

import { getLanguageName, getLocaleList } from '../utils/languages';

interface Props {
  currentLocale: string;
}

const LanguageSelector = ({ currentLocale }: Props) => (
  <div className="navbar-item has-dropdown is-hoverable">
    <a className="navbar-link">{getLanguageName(currentLocale)}</a>

    <div className="navbar-dropdown">
      {getLocaleList().map(locale => (
        <Link className="navbar-item" to={`/${locale}`}>
          {getLanguageName(locale)}
        </Link>
      ))}
    </div>
  </div>
);

export default LanguageSelector;
