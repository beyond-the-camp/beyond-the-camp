/* eslint-disable @typescript-eslint/camelcase */

import * as React from 'react';

import { Helmet } from 'react-helmet';

import { LocaleMessages } from '../i18n/types';
import { getTextDirection } from '../utils/languages';
import { LocaleType } from '../utils/types';
import { NavBar } from './NavBar';

import { addLocaleData, IntlProvider } from 'react-intl';

// Locale data
import * as arData from 'react-intl/locale-data/ar';
import * as enData from 'react-intl/locale-data/en';
import * as faData from 'react-intl/locale-data/fa';
import * as frData from 'react-intl/locale-data/fr';

// Messages
import ar from '../i18n/ar';
import en from '../i18n/en';
import fa from '../i18n/fa';
import fr from '../i18n/fr';

const messages: Record<LocaleType, LocaleMessages> = {
  en,
  fr,
  ar,
  fa
};

addLocaleData([...enData, ...frData, ...arData, ...faData]);

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
