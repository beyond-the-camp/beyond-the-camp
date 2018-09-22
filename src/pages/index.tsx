import * as React from 'react';

import { graphql, Link, navigate } from 'gatsby';

interface LanguageNode {
  id: string;
  name: string;
  locale: string;
}

interface Props {
  data: {
    language: {
      edges: Array<{
        node: LanguageNode;
      }>;
    };
  };
}

export default class LanguagePage extends React.Component<Props> {
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
    const { data } = this.props;
    return (
      <section>
        <ul>
          {data.language.edges.map(({ node }) => (
            <li key={node.id}>
              <Link
                to={node.locale}
                onClick={() => LanguagePage.storeLocale(node.locale)}
              >
                {node.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export const query = graphql`
  query Languages {
    language: allDatoCmsLanguage {
      edges {
        node {
          id
          name
          locale
        }
      }
    }
  }
`;
