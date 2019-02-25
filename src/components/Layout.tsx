/* eslint-disable @typescript-eslint/camelcase */

import * as React from 'react';

import { Helmet } from 'react-helmet';

import { LocaleMessages } from '../i18n/types';
import { getTextDirection } from '../utils/languages';
import { LocaleType } from '../utils/types';
import { LocaleLinks } from './LanguageSelector';
import NavBar from './NavBar';

import { addLocaleData, IntlProvider } from 'react-intl';

// Locale data
import * as arData from 'react-intl/locale-data/ar';
import * as enData from 'react-intl/locale-data/en';
import * as faData from 'react-intl/locale-data/fa';
import * as frData from 'react-intl/locale-data/fr';

// Messages
import ar from '../i18n/ar';
import en_GB from '../i18n/en_GB';
import fa_IR from '../i18n/fa_IR';
import fr_FR from '../i18n/fr_FR';

const messages: Record<LocaleType, LocaleMessages> = {
  en_GB,
  fr_FR,
  ar,
  fa_IR
};

addLocaleData([...enData, ...frData, ...arData, ...faData]);

interface Props {
  currentLocale?: LocaleType;
  children?: React.ReactNode;
  localeLinks?: LocaleLinks;
}

const defaultProps: Partial<Props> = {
  currentLocale: 'en_GB'
};

const Layout = ({ children, currentLocale, localeLinks }: Props) => {
  const directionClass = getTextDirection(currentLocale) === 'rtl' ? 'rtl' : '';

  const jsLocale = currentLocale.replace('_', '-');

  return (
    <IntlProvider locale={jsLocale} messages={messages[currentLocale]}>
      <div
        className={`${directionClass} bg-grey-lighter min-h-screen overflow-x-hidden`}
      >
        <Helmet>
          <title>BeyondMoria</title>
        </Helmet>
        <NavBar currentLocale={currentLocale} localeLinks={localeLinks} />
        <main className="pb-4">{children}</main>
      </div>
    </IntlProvider>
  );
};

Layout.defaultProps = defaultProps;

export default Layout;
