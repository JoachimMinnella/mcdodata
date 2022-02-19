import React from 'react';
import { useSelector } from 'react-redux';
import { McdoData } from '../interfaces/McdoData';
import { State } from '../state';
import NavEl from './NavEL';
import { isEmpty } from './Utils';

const Nav: React.FC = () => {

    const mcDoDatas = useSelector((state: State) => state.getPostsReducer) as McdoData
    
    return (
        <nav className='nav'>
            <ul className='nav__list'>
                {
                    !isEmpty(mcDoDatas) && mcDoDatas.nav.map(navEl => <NavEl name={navEl.name} illu={navEl.illu} key={navEl.index} alt={navEl.alt}/>)
                }
            </ul>
        </nav>
    );
};

export default Nav;