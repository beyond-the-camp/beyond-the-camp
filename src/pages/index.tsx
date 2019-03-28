/* eslint-env browser */

import * as React from 'react';

import { Link } from 'gatsby';

import { Layout } from '../components/Layout';
import { ListCard } from '../components/ListCard';
import { getLanguageName, getLocaleList } from '../utils/languages';

const LanguagePage = () => (
  <Layout>
    <div className="container mx-auto">
      <ul className="list-reset flex flex-wrap -mx-2 mt-4">
        {getLocaleList().map(locale => (
          <li key={locale} className="w-full max-w-sm md:w-1/2 px-2 mb-2">
            <Link
              to={locale}
              onClick={() => LanguagePage.storeLocale(locale)}
              className="no-underline"
            >
              <ListCard>
                <div>{getLanguageName(locale)}</div>
              </ListCard>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </Layout>
);

export default LanguagePage;
