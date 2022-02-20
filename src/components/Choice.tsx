import React, { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '@/hooks';

import { currentTargetSelector } from '@/state';
import { setDesserts } from '@/state/actions';

const Choice: React.FC = () => {
  const [title, setTitle] = useState('menus');

  const currentTarget = useAppSelector(currentTargetSelector);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setDesserts([]));
  }, []);

  return (
    <section className="meal">
      <h2 className="title">Nos {title}</h2>
      <div className="container container--list">
        <ul className="meal__list"></ul>
      </div>
    </section>
  );
};

export default Choice;
