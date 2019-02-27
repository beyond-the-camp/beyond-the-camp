import * as React from 'react';

interface Props {
  children: React.ReactNode;
}

export const ListCard = ({ children }: Props) => (
  <div className="px-6 py-6 border rounded bg-white text-grey-darkest overflow-hidden hover:shadow">
    {children}
  </div>
);
