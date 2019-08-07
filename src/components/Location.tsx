import * as React from 'react';

import { FormattedMessage } from 'react-intl';

interface Props {
  text?: string;
}

export const Location = ({ text }: Props) => (
  <div className="bg-white border p-4">
    <h3>
      <FormattedMessage id="LOCATION" />
    </h3>
    {text ? <p>{text}</p> : null}
  </div>
);
