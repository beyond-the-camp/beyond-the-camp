import * as React from 'react';

import { Link } from 'gatsby';

import { getHomePath } from '../utils/routes';
import { LocaleType } from '../utils/types';
import LanguageSelector, { LocaleLinks } from './LanguageSelector';

interface Props {
  currentLocale?: LocaleType;
  localeLinks?: LocaleLinks;
}

const NavBar = ({ currentLocale, localeLinks }: Props) => (
  <nav
    className="bg-primary py-3"
    role="navigation"
    aria-label="main navigation"
  >
    <div className="container mx-auto flex items-center justify-between flex-wrap ">
      <div className="flex items-center flex-no-shrink mr-6">
        <Link to={getHomePath(currentLocale)} className="no-underline ">
          <h3 className="m-0 text-white hover:opacity-50">BeyondMoria</h3>
        </Link>
      </div>

      <div>
        {currentLocale && (
          <LanguageSelector currentLocale={currentLocale} links={localeLinks} />
        )}
      </div>
    </div>
  </nav>
);

export default NavBar;
