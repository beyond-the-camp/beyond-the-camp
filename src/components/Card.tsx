import * as React from 'react';

import { css } from 'react-emotion';

interface Props {
  title: string;
}

const cardStyle = css`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  padding: 0.5rem 1rem;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const Card = ({ title }: Props) => (
  <div className={cardStyle}>
    <p>{title}</p>
  </div>
);
