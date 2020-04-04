import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import { toBeInTheDocument } from '@testing-library/jest-dom';

//#region  MOCK
import App from '../App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

const mockReducer = (state = { auth: {}, }, action) => {
    switch (action.payload) {
        default:
            return state;
    }
}

const MockApp = () => {

    const test_store = createStore(mockReducer, applyMiddleware(logger));

    return (
        <BrowserRouter>
            <Provider store={test_store}>
                <App />
            </Provider>
        </BrowserRouter>
    )
}
//#endregion

let view;

describe('src/app', () => {
    beforeAll(() => {
        view = shallow(<MockApp />)
    })
    it('renders without crashing', () => {
        expect(view).toMatchSnapshot();
    })
})