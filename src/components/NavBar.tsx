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
    className="flex items-center justify-between flex-wrap bg-primary h-12 px-6"
    role="navigation"
    aria-label="main navigation"
  >
    <div className="flex items-center flex-no-shrink mr-6">
      <Link
        to={getHomePath(currentLocale)}
        className="font-semibold no-underline text-xl text-white hover:opacity-50 tracking-wide"
      >
        BeyondMoria
      </Link>
    </div>

    <div>
      {currentLocale && (
        <LanguageSelector currentLocale={currentLocale} links={localeLinks} />
      )}
    </div>
  </nav>
);

export default NavBar;
