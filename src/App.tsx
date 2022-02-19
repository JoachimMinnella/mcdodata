import React from 'react';
import './styles/index.scss';
import Food from './pages/Food';
import { store } from './state';
import { getPosts } from './state/actions/creators';

const App: React.FC = () => {

  store.dispatch( getPosts() )

  return (
    <Food />
    // <Test />
  );
};

export default App;