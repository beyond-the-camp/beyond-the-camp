/* eslint-env browser */

import * as React from 'react';

import { Link } from 'gatsby';

import { Layout } from '../components/Layout';
import { ListCard } from '../components/ListCard';
import { getLanguageName, getLocaleList } from '../utils/languages';

const storeLocale = (locale: string) => {
  localStorage.setItem('locale', locale);
};

const LanguagePage = () => (
  <Layout language="en">
    <div className="container mx-auto text-center">
      <h1>Welcome to Beyond Moria</h1>
      <p>Please select a language</p>
      <ul className="flex flex-wrap">
        {getLocaleList().map(locale => (
          <li key={locale} className="w-1/2 h-full">
            <Link
              to={locale}
              onClick={() => storeLocale(locale)}
              className="no-underline p-1 block md:p-3"
            >
              <ListCard>{getLanguageName(locale)}</ListCard>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </Layout>
);

export default LanguagePage;
