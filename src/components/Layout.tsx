import * as React from 'react';

import '../styles/all.scss';
import { getTextDirection } from '../utils/languages';
import LanguageSelector from './LanguageSelector';

interface Props {
  currentLocale?: string;
  children?: React.ReactNode;
}

const Layout = ({ children, currentLocale }: Props) => {
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
          <div className="navbar-item">BeyondMoria</div>

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
          <div className="navbar-start">
            {currentLocale && (
              <LanguageSelector currentLocale={currentLocale} />
            )}
          </div>
        </div>
      </nav>
      <main className="container">{children}</main>
    </div>
  );
};

export default Layout;
