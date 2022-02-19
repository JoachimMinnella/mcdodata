import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from '../state';

const Test: React.FC = () => {

    const dispatch = useDispatch()

    const {helloTest, hiTest} = bindActionCreators(actionCreators, dispatch)
    const amount = useSelector((state: State) => state.testReducer)

    return (
        <div>
            <h1>{amount}</h1>
            <button onClick={ () => { helloTest(10) } }>plus</button>
            <button onClick={ () => { hiTest(10) }}>moins</button>
        </div>
    );
};

export default Test;