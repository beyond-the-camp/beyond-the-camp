import * as React from 'react';

import { Link } from 'gatsby';

import { getLanguageName, getLocaleList } from '../utils/languages';
import { LocaleType } from '../utils/types';

export type LocaleLinks = Record<LocaleType, string>;

const getLink = (locale: LocaleType, links?: LocaleLinks): string => {
  if (links && links[locale]) {
    return links[locale];
  }
  return `/${locale}`;
};

interface Props {
  currentLocale: LocaleType;
  links?: LocaleLinks;
}

interface State {
  showMenu: boolean;
}

class LanguageSelector extends React.Component<Props, State> {
  public state: State = {
    showMenu: false
  };

  constructor(props: Props) {
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  public render() {
    const { currentLocale, links } = this.props;
    return (
      <div className="relative inline-block">
        <button
          onClick={this.toggleMenu}
          className="hover:opacity-50 text-white px-6 h-12"
        >
          {getLanguageName(currentLocale)}
        </button>
        {this.state.showMenu && (
          <div className="absolute block pin-r bg-white p-3 z-50 border-black shadow-md">
            {getLocaleList().map(locale => (
              <p key={locale} className="m-0">
                <Link to={getLink(locale, links)}>
                  {getLanguageName(locale)}
                </Link>
              </p>
            ))}
          </div>
        )}
      </div>
    );
  }

  private toggleMenu() {
    this.setState(state => ({ showMenu: !state.showMenu }));
  }
}

export default LanguageSelector;
