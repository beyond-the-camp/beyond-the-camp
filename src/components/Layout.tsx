import * as React from 'react';

import { LocaleType } from '../utils/types';
import { NavBar } from './NavBar';

import { IntlProvider } from 'react-intl';
import '@formatjs/intl-pluralrules/locale-data/en';
import '@formatjs/intl-pluralrules/locale-data/fr';

// Messages
import * as en from '../i18n/en.json';
import * as fr from '../i18n/fr.json';

const messages = { en, fr };

interface Props {
  language: LocaleType;
  children?: React.ReactNode;
}

export const Layout = ({ language, children }: Props) => (
  <IntlProvider locale={language} messages={messages[language]}>
    <>
      <NavBar language={language} />
      <main className="py-8">{children}</main>
    </>
  </IntlProvider>
);
