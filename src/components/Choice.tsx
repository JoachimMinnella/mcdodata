import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { State } from '../state';

const Choice: React.FC = () => {

    const [title, setTitle] = useState('menus');
    const currentTarget = useSelector((state: State) => state.currentTargetReducer)

    return (
        <section className='meal'>
            <h2 className='title'>Nos {title}</h2>
            <div className='container container--list'>
                <ul className='meal__list'>

                </ul>
            </div>
        </section>
    );
};

export default Choice;