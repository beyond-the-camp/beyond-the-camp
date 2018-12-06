import * as React from 'react';

import '../styles/all.scss';
import { getTextDirection } from '../utils/languages';
import LanguageSelector, { LinksData } from './LanguageSelector';

interface Props {
  currentLocale?: string;
  children?: React.ReactNode;
  links?: LinksData;
}

const Layout = ({ children, currentLocale, links }: Props) => {
  const directionClass =
    getTextDirection(currentLocale) === 'rtl' ? 'translated_rtl' : '';

  return (
    <div className={`${directionClass}`}>
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <div className="navbar-item has-text-white">BeyondMoria</div>

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
              <LanguageSelector currentLocale={currentLocale} links={links} />
            )}
          </div>
        </div>
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
