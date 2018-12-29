import * as React from 'react';

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
import * as ar from '../i18n/ar.json';
import * as en_GB from '../i18n/en_GB.json';
import * as fa_IR from '../i18n/fa_IR.json';
import * as fr_FR from '../i18n/fr_FR.json';

const messages: Record<LocaleType, any> = {
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

const Layout = ({ children, currentLocale, localeLinks }: Props) => {
  const directionClass =
    getTextDirection(currentLocale) === 'rtl' ? 'layout-rtl' : '';

  return (
    <IntlProvider locale="en" messages={messages[currentLocale].default}>
      <div className={`${directionClass} background`}>
        <NavBar currentLocale={currentLocale} localeLinks={localeLinks} />
        <main>{children}</main>
      </div>
    </IntlProvider>
  );
};

export default Layout;
