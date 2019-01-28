import * as React from 'react';

import { Link } from 'gatsby';

interface Props {
  crumbs: Array<{
    text: string | JSX.Element;
    link?: string;
  }>;
}

const BreadCrumbs = ({ crumbs }: Props) => (
  <nav className="m-4">
    <ul className="list-reset flex items-start justify-start flex-wrap m-0">
      {crumbs.map((crumb, index) => {
        const linkComponent =
          typeof crumb.text === 'string' ? (
            <div dangerouslySetInnerHTML={{ __html: crumb.text }} />
          ) : (
            crumb.text
          );

        return (
          <li key={`crumb_${index}`} className="flex items-center crumb m-0">
            {crumb.link ? (
              <Link to={crumb.link}>{linkComponent}</Link>
            ) : (
              linkComponent
            )}
          </li>
        );
      })}
    </ul>
  </nav>
);

export default BreadCrumbs;
