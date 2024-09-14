import React, { ReactNode } from 'react';
import Header from '@/components/elements/Header';

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full h-full">
      <Header>{children}</Header>
    </div>
  );
};

export default layout;
