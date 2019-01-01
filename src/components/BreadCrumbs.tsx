import * as React from 'react';

import { Link } from 'gatsby';

interface Props {
  crumbs: Array<{
    text: string | JSX.Element;
    link?: string;
  }>;
}

const BreadCrumbs = ({ crumbs }: Props) => (
  <div className="container">
    <nav className="breadcrumb">
      <ul>
        {crumbs.map((crumb, index) => {
          const activeClass = crumb.link ? '' : 'is-active';

          const linkComponent =
            typeof crumb.text === 'string' ? (
              <div dangerouslySetInnerHTML={{ __html: crumb.text }} />
            ) : (
              crumb.text
            );

          return (
            <li key={`crumb_${index}`} className={activeClass}>
              <Link to={crumb.link || ''}>{linkComponent}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  </div>
);

export default BreadCrumbs;
