import React from 'react';
import { shallow } from 'enzyme'
import SideRail from '../../../components/side-rail';

let sideRail;

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

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
            <SideRail />
        </Provider>
    )
}


describe('components/side-rail', () => {

    beforeAll(() => {
        sideRail = shallow(<MockApp/>)
    })
    it('renders properly', () => {
        expect(sideRail).toMatchSnapshot();
    })
})