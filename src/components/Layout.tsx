import * as React from 'react';

import '../styles/all.scss';

interface Props {
  children?: React.ReactNode;
}

const Layout = ({ children }: Props) => (
  <div>
    <nav
      className="navbar level"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand level-item">
        <div className="navbar-item">BeyondMoria</div>
      </div>
    </nav>
    <section className="container">{children}</section>
  </div>
);

export default Layout;
