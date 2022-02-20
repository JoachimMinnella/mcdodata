import React from 'react';

import { NavLink } from '@/components/atoms/NavLink';

export interface Props {}

export const Nav = (props: Props): JSX.Element => {
  return (
    <nav>
      <NavLink />
      <NavLink />
      <NavLink />
    </nav>
  );
};
