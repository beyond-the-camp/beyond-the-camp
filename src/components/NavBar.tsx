import * as React from 'react';

import { LocaleType } from '../utils/types';
import LanguageSelector, { LocaleLinks } from './LanguageSelector';

interface Props {
  currentLocale?: LocaleType;
  localeLinks?: LocaleLinks;
}

const NavBar = ({ currentLocale, localeLinks }: Props) => (
  <nav
    className="flex items-center justify-between flex-wrap bg-teal h-16 px-6"
    role="navigation"
    aria-label="main navigation"
  >
    <div className="flex items-center flex-no-shrink text-white mr-6">
      <p className="font-semibold text-xl tracking-tight">BeyondMoria</p>
    </div>

    <div>
      {currentLocale && (
        <LanguageSelector currentLocale={currentLocale} links={localeLinks} />
      )}
    </div>
  </nav>
);

export default NavBar;
