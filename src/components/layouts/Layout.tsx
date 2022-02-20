import React, { ReactNode } from 'react';
import { Header } from '@/components/organisms/Header';

export interface Props {
  children: ReactNode;
}

export const Layout = (props: Props): JSX.Element => {
  return (
    <div>
      <Header />
      <main>{props.children}</main>
    </div>
  );
};
