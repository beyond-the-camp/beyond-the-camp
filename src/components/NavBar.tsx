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
    <div className="container mx-auto flex items-center justify-between flex-wrap ">
      <div className="flex items-center flex-shrink-0 mr-6">
        <Link to={getHomePath(language)} className="no-underline ">
          <h3 className="m-0 text-xl font-semibold text-white hover:opacity-50">
            BeyondMoria
          </h3>
        </Link>
      </div>

      <div>{language && <LanguageSelector currentLocale={language} />}</div>
    </div>
  </nav>
);
