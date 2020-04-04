import React from 'react';
import { shallow } from 'enzyme'
import Foreground from '../../../components/foreground';


import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

let foreground;
const mockReducer = (state = { open: {}, }, action) => {
    switch (action.payload) {
        default:
            return state;
    }
}

const MockApp = () => {

    const test_store = createStore(mockReducer, applyMiddleware(logger));

    return (
        <Provider store={test_store}>
            <Foreground />
        </Provider>
    )
}


describe('components/welcome-screen', () => {

    beforeAll(() => {
        foreground = shallow(<MockApp />)
    })
    it('renders properly', () => {
        expect(foreground).toMatchSnapshot();
    })
})