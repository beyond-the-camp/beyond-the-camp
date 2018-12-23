import * as React from 'react';

import { getTextDirection } from '../utils/languages';
import LanguageSelector, { LocaleLinks } from './LanguageSelector';

interface Props {
  currentLocale?: string;
  children?: React.ReactNode;
  localeLinks?: LocaleLinks;
}

const Layout = ({ children, currentLocale, localeLinks }: Props) => {
  const directionClass =
    getTextDirection(currentLocale) === 'rtl' ? 'layout-rtl' : '';

  return (
    <div className={`${directionClass} background`}>
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
      <main>{children}</main>
    </div>
  );
};

export default Layout;
