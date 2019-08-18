/* eslint-disable @typescript-eslint/camelcase */

import * as React from 'react';

import { Helmet } from 'react-helmet';

import { getTextDirection } from '../utils/languages';
import { LocaleType } from '../utils/types';
import { NavBar } from './NavBar';

import { addLocaleData, IntlProvider } from 'react-intl';

// Locale data
import * as enData from 'react-intl/locale-data/en';

// Messages
import * as en from '../i18n/en.json';

const messages = { en };

addLocaleData([...enData]);

interface Props {
  language: LocaleType;
  children?: React.ReactNode;
}

export const Layout = ({ language, children }: Props) => (
  <IntlProvider locale={language} messages={messages[language]}>
    <>
      <Helmet>
        <title>BeyondMoria</title>
        <html lang={language} dir={getTextDirection(language)} />
        <link
          href="https://fonts.googleapis.com/css?family=Quicksand:400,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <NavBar language={language} />
      <main className="py-8">{children}</main>
    </>
  </IntlProvider>
);
