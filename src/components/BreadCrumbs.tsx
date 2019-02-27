import * as React from 'react';

import { Link } from 'gatsby';

interface Props {
  crumbs: Array<{
    text: string | JSX.Element;
    link?: string;
  }>;
}

export const BreadCrumbs = ({ crumbs }: Props) => (
  <nav className="my-4">
    <ul className="container mx-auto my-0 list-reset flex items-start justify-start flex-wrap">
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
              <Link
                to={crumb.link}
                className="text-blue hover:text-blue-darker no-underline"
              >
                {linkComponent}
              </Link>
            ) : (
              linkComponent
            )}
          </li>
        );
      })}
    </ul>
  </nav>
);
