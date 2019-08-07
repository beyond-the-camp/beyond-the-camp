import * as React from 'react';

import { FormattedMessage } from 'react-intl';

interface Props {
  html?: string;
  children?: React.ReactNode;
}

export const Information = ({ html, children }: Props) => (
  <div className="bg-white border p-4">
    <h3 className="text-center">
      <FormattedMessage id="INFORMATION" />
    </h3>
    {html ? (
      <div
        dangerouslySetInnerHTML={{
          __html: html
        }}
      />
    ) : (
      children
    )}
  </div>
);
