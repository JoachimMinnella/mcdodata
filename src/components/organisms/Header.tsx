import React from 'react';
import Nav from '@/components/Nav';

export interface Props {}

export const Header = (props: Props): JSX.Element => {
  return (
    <div>
      <image />
      <Nav />
    </div>
  );
};
