import * as React from 'react';

interface Props {
  children: React.ReactNode;
}

export const ListCard = ({ children }: Props) => (
  <div className="px-6 py-10 border bg-white text-grey-darkest flex items-center justify-center h-full lg:hover:c-elevate">
    {children}
  </div>
);
