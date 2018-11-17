import * as React from 'react';

import { Card, CardContent, Container, Content } from 'bloomer';
import { Link, navigate } from 'gatsby';

interface LanguageNode {
  name: string;
  locale: string;
}

const languages: LanguageNode[] = [
  {
    name: 'English',
    locale: 'en_GB'
  },
  {
    name: 'Afrikaans',
    locale: 'af'
  }
];

export default class LanguagePage extends React.Component {
  private static loadLocale(): string {
    return localStorage.getItem('locale');
  }

  private static storeLocale(locale: string) {
    localStorage.setItem('locale', locale);
  }

  public componentDidMount() {
    const locale = LanguagePage.loadLocale();
    if (locale) {
      navigate(locale);
    }
  }

  public render() {
    return (
      <Container>
        {languages.map(node => (
          <li key={node.locale}>
            <Link
              to={node.locale}
              onClick={() => LanguagePage.storeLocale(node.locale)}
            >
              <Card>
                <CardContent>
                  <Content>{node.name}</Content>
                </CardContent>
              </Card>
            </Link>
          </li>
        ))}
      </Container>
    );
  }
}
