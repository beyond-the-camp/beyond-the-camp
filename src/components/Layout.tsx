import * as React from 'react';

import { css } from 'react-emotion';

const style = css`
  margin: 1rem auto;
  max-width: 30rem;
  padding: 1rem;
`;

interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => (
  <div className={style}>{children}</div>
);
