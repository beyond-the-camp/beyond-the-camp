import * as React from 'react';

import '../styles';

interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => <div>{children}</div>;
