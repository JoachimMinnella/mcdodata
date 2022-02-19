import React from 'react';
import './styles/index.scss';
import Food from './pages/Food';
import { actionCreators, State, store } from './state';
import { currentTarget, getPosts } from './state/actions/creators';
import { useDispatch, useSelector } from 'react-redux';
import { McdoData } from './interfaces/McdoData';
import { bindActionCreators } from 'redux';

const App: React.FC = () => {

  store.dispatch( getPosts() )

  // SI J'ESSAIE DE STOCKER MES MENUS DANS STORE, TS EST PAS CONTENT ET JE NE COMPREND PAS L'ERREUR, IL ME DIT QUE LE TYPE N'ES PAS BON ALORS QUE SI...
  // const datas = useSelector((state: State) => state.getPostsReducer) as McdoData
  // const menuData = datas.menus
  // store.dispatch( currentTarget(menuData) )

  //SI J'UTILISE CETTE MÉTHODE POUR STOCKER MON TABLEAU DANS LE STORE, CA FONCTIONNE MAIS CA ME FETCH MES DATA À L'INFINI ET JE NE COMPREND PAS POURQUOI
  // const dispatch = useDispatch()
  // const {currentTarget} = bindActionCreators(actionCreators, dispatch)
  // const datas = useSelector((state: State) => state.getPostsReducer) as McdoData
  // const menuData = datas.menus
  // currentTarget(menuData)

  return (
    <Food />
    // <Test />
  );
};

export default App;