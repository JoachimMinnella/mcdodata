import axios from 'axios';
import React from 'react';
import Choice from '../components/Choice';
import Nav from '../components/Nav';
import Order from '../components/Order';

const Food: React.FC = () => {

    return (
        <main className='main main--food'>
            <Nav />
            <Choice />
            <Order />
        </main>
    );
};

export default Food;