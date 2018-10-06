import * as React from 'react';

import { css } from 'react-emotion';

interface Props {
  title: string;
}

const cardStyle = css`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 0.5rem 1rem;
`;

export const Card = ({ title }: Props) => (
  <div className={cardStyle}>
    <p>{title}</p>
  </div>
);
