import * as React from 'react';

import {
  Container,
  Level,
  LevelItem,
  Navbar,
  NavbarBrand,
  NavbarItem
} from 'bloomer';

import './all.sass';

interface Props {
  children?: React.ReactNode;
}

const Layout = ({ children }: Props) => (
  <Container>
    <Navbar>
      <Level>
        <LevelItem>
          <NavbarBrand>
            <NavbarItem>BeyondMoria</NavbarItem>
          </NavbarBrand>
        </LevelItem>
      </Level>
    </Navbar>
    <Container>{children}</Container>
  </Container>
);

export default Layout;
