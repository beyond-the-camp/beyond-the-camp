import * as React from 'react';

import { graphql, Link, navigate } from 'gatsby';
import styled from 'react-emotion';

import { Card } from '../components/Card';
import { Layout } from '../components/Layout';

const LanguageList = styled.ul`
  padding: 10px 10px;

  li {
    margin: 10px 10px;
  }
`;

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
      <Layout>
        <LanguageList>
          {data.language.edges.map(({ node }) => (
            <li key={node.id}>
              <Link
                to={node.locale}
                onClick={() => LanguagePage.storeLocale(node.locale)}
              >
                <Card title={node.name} />
              </Link>
            </li>
          ))}
        </LanguageList>
      </Layout>
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
