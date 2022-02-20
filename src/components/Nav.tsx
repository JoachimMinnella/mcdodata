import React from 'react';
import { useSelector } from 'react-redux';

import NavEl from './NavEL';

import { isEmpty } from '@/utils';

const Nav: React.FC = () => {
  const mcDoDatas = useSelector(
    (state: State) => state.getPostsReducer
  ) as McdoData;

  return (
    <nav className="nav">
      <ul className="nav__list">
        {!isEmpty(mcDoDatas) &&
          mcDoDatas.nav.map((navEl) => (
            <NavEl
              name={navEl.name}
              illu={navEl.illu}
              key={navEl.index}
              alt={navEl.alt}
            />
          ))}
      </ul>
    </nav>
  );
};

export default Nav;
