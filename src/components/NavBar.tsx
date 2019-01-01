import * as React from 'react';

import { LocaleType } from '../utils/types';
import LanguageSelector, { LocaleLinks } from './LanguageSelector';

interface Props {
  currentLocale?: LocaleType;
  localeLinks?: LocaleLinks;
}

const NavBar = ({ currentLocale, localeLinks }: Props) => (
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="container">
      <div className="navbar-brand">
        <div className="navbar-item">
          <p className="has-text-white title is-size-5">BeyondMoria</p>
        </div>

        <a
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="burgerMenu"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>
      <div id="burgerMenu" className="navbar-menu">
        <div className="navbar-end">
          {currentLocale && (
            <LanguageSelector
              currentLocale={currentLocale}
              links={localeLinks}
            />
          )}
        </div>
      </div>
    </div>
  </nav>
);

export default NavBar;
