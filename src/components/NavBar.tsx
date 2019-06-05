import * as React from 'react';

import { Link } from 'gatsby';

import { getHomePath } from '../utils/routes';
import { LocaleType } from '../utils/types';
import { LanguageSelector } from './LanguageSelector';

interface Props {
  language?: LocaleType;
}

export const NavBar = ({ language }: Props) => (
  <nav
    className="bg-primary py-3"
    role="navigation"
    aria-label="main navigation"
  >
    <div className="flex justify-between flex-wrap container">
      <Link to={getHomePath(language)} className="font-bold">
        BeyondMoria
      </Link>
      {language && <LanguageSelector currentLocale={language} />}
    </div>
  </nav>
);
