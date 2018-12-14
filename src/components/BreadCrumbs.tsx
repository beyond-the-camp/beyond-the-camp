import * as React from 'react';

import { Link } from 'gatsby';

interface Props {
  crumbs: Array<{
    name: string;
    link?: string;
  }>;
}

const BreadCrumbs = ({ crumbs }: Props) => (
  <div className="container">
    <nav className="breadcrumb">
      <ul>
        {crumbs.map(crumb => {
          const activeClass = crumb.link ? '' : 'is-active';
          return (
            <li key={crumb.name} className={activeClass}>
              <Link
                to={crumb.link || ''}
                dangerouslySetInnerHTML={{ __html: crumb.name }}
              />
            </li>
          );
        })}
      </ul>
    </nav>
  </div>
);

export default BreadCrumbs;
